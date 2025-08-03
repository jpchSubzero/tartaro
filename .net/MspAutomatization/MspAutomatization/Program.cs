using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;




namespace DecryptAccountCardNumbers
{
    static class Program
    {
        public static async Task Main(string[] args)
        {






            //int x = 1;

            //foreach (var item in data.SG)
            //{
            //    Console.WriteLine($"{x}. {item.Cedula} - {item.Fecha:yyyy-MM-dd} - {item.Orden}");
            //    x++;
            //}


            //return;




            //var dict = new Dictionary<string, string>
            //{
            //    { "0150106052", "01-05-2024" },
            //    { "0701269391", "01-05-2024" },
            //    { "0701778151", "01-05-2024" },
            //    { "0702110230", "01-05-2024" },
            //    { "0750631087", "01-05-2024" },
            //    { "0752202168", "01-05-2024" },
            //};

            var apiManager = new ApiManager();

            var options = new ChromeOptions();
            options.AddExcludedArgument("enable-automation");
            options.AddAdditionalOption("useAutomationExtension", false);
            options.AddUserProfilePreference("download.prompt_for_download", false);
            options.AddUserProfilePreference("plugins.always_open_pdf_externally", true);
            options.AddUserProfilePreference("pdfjs.disabled", true);

            var driver = new ChromeDriver(options);
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));

            driver.Navigate().GoToUrl("https://coberturasalud.msp.gob.ec/");


            Task.Delay(5000).Wait();


            int cont = 1;
            var id = Guid.NewGuid();

            var path = "d:\\Temp\\MSP\\listado_coberturas_consultar ---JUNIO-----CSN2-CS.xlsx";
            var data = ExcelReader.ReadExcelFile(path);

            foreach (var item in data.SG)
            {
                try
                {
                    var target = $"d:\\Temp\\MSP\\{nameof(data.SG).Replace('_', '-')}";

                    if (FileHelper.FileExists($"{target}\\{item.Fecha.Replace('-', '_')} {item.Orden}"))
                    {
                        cont++;
                        continue;
                    }

                    string token = apiManager.GetTokenAsync(id).Result;

                    string encryptedCedula = AesHelper.Encrypt(item.Cedula, token);
                    string encryptedFecha = AesHelper.Encrypt(item.Fecha, token);

                    var result = apiManager.SendEncryptedConsultationRequestAsync(encryptedCedula, encryptedFecha, token, item.Cedula).Result;

                    var name = result.data.coberturaSalud.CoberturaSeguros.aseguradora.FirstOrDefault(x => !string.IsNullOrEmpty(x.Nombre))?.Nombre;

                    var fileName = $"{item.Fecha.Replace('-', '_')} {item.Orden} {name.Replace(' ', '_')}_{item.Cedula}.pdf";


                    //if (FileHelper.FileExists($"{target}\\{fileName}"))
                    //{
                    //    cont++;
                    //    continue;
                    //}

                    Console.WriteLine($"Descargando archivo: {cont} de {data.SG.Count} - {fileName}");

                    Task.Delay(2000).Wait();

                    //var cedula = driver.FindElement(By.Id("cedula"));
                    IWebElement cedula = wait.Until(ExpectedConditions.ElementIsVisible(By.Id("cedula")));
                    cedula.Click();
                    cedula.SendKeys(Keys.Control + "a");
                    cedula.SendKeys(Keys.Backspace);
                    cedula.SendKeys(item.Cedula);

                    //var inputFecha = driver.FindElement(By.CssSelector("input[placeholder=\"DD-MM-YYYY\"]"));
                    IWebElement inputFecha = wait.Until(ExpectedConditions.ElementIsVisible(By.CssSelector("input[placeholder=\"DD-MM-YYYY\"]")));
                    inputFecha.Click();
                    inputFecha.SendKeys(item.Fecha);

                    IWebElement botonConsultar = wait.Until(ExpectedConditions.ElementIsVisible(By.XPath("//button[normalize-space()='Consultar']")));
                    //var botonConsultar = driver.FindElement(By.XPath("//button[normalize-space()='Consultar']"));
                    botonConsultar.Click();

                    Task.Delay(5000).Wait();

                    IWebElement embed = wait.Until(ExpectedConditions.ElementIsVisible(By.TagName("embed")));
                    //var embed = driver.FindElement(By.TagName("embed"));
                    string blobUrl = embed.GetAttribute("src");

                    var jsExecutor = (IJavaScriptExecutor)driver;

                    string dataUrl = (string)jsExecutor.ExecuteAsyncScript(@"
                        var blobUrl = arguments[0];
                        var callback = arguments[arguments.length - 1];
                        const name = arguments[1];

                        fetch(blobUrl)
                            .then(response => response.blob())
                            .then(blob => {
                                const downloadUrl = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = downloadUrl;
                                a.download = name;
                                document.body.appendChild(a);
                                a.click();
                                a.remove();

                                callback('descarga-ok'); // <== INDISPENSABLE para que no haga timeout
                            })
                            .catch(error => {
                                callback('error: ' + error);
                            });
                    ", blobUrl, fileName);

                    cont++;

                    Task.Delay(2000).Wait();

                    FileHelper.MoveFile($"c:\\Users\\jpch_\\Downloads\\{fileName}", target);

                }
                catch (Exception ex)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"Error: {item.Orden} - {item.Cedula} - {item.Fecha} - {ex.Message}");
                    Console.ResetColor();
                    cont++;
                    continue;
                }


            }
        }
    }
}




//Task.Delay(2000).Wait();

//var cedula = driver.FindElement(By.Id("cedula"));
//cedula.SendKeys("1105875775");

//var inputFecha = driver.FindElement(By.CssSelector("input[placeholder=\"DD-MM-YYYY\"]"));
//inputFecha.Click();
//inputFecha.SendKeys("01012024");

//var botonConsultar = driver.FindElement(By.XPath("//button[normalize-space()='Consultar']"));
//botonConsultar.Click();

//Task.Delay(5000).Wait();

//var embed = driver.FindElement(By.TagName("embed"));
//string blobUrl = embed.GetAttribute("src");

//var jsExecutor = (IJavaScriptExecutor)driver;
//string dataUrl = (string)jsExecutor.ExecuteAsyncScript(@"
//    (async () => {
//      const blobUrl = arguments[0];

//        const now = new Date();
//        const yyyy = now.getFullYear();
//        const mm = String(now.getMonth() + 1).padStart(2, '0');
//        const dd = String(now.getDate()).padStart(2, '0');
//        const name = `archivo_${yyyy}${mm}${dd}.pdf`;

//      const response = await fetch(blobUrl);
//      const blob = await response.blob();

//      const downloadUrl = URL.createObjectURL(blob);
//      const a = document.createElement('a');
//      a.href = downloadUrl;
//      a.download = name;
//      document.body.appendChild(a);
//      a.click();
//      a.remove();
//    })();
//", blobUrl);

