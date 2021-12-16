using Jsonize;
using Jsonize.Parser;
using Jsonize.Serializer;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using Xunit;
using Xunit.Abstractions;

namespace HtmlToJson
{
    public class UnitTest1
    {
        private readonly ITestOutputHelper output;

        public UnitTest1(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public async Task Test1()
        {
            using (var client = new HttpClient())
            {
                //var url = @"https://jackfinlay.com";
                //var response = await client.GetAsync(url);
                //string html = await response.Content.ReadAsStringAsync();

                var html = @"

                    <p>Recibe un auto sustituto por 10 d&iacute;as en p&eacute;rdidas parciales y 20 d&iacute;as en p&eacute;rdidas totales, cuando el valor del siniestro sea mayor a $1.000 y la reparaci&oacute;n de tu auto supere los 3 d&iacute;as. La gama del auto sustituto depender&aacute; del valor asegurado de tu veh&iacute;culo:</p>
                    <ul>
                    <li>Veh&iacute;culos con un valor asegurado de $0 a $20.000: Gama baja.</li>
                    <li>Veh&iacute;culos con un valor asegurado de $20.001 a $40.000: Gama media.</li>
                    <li>Veh&iacute;culos con un valor asegurado de $40.001 en adelante: Gama alta.</li>
                    </ul>
                    <h4>Tabla de Responsabilidad Civil</h4>
                    <table>
                    <tbody>
                    <tr>
                    <td>Valor asegurado del veh&iacute;culo</td>
                    <td>L&iacute;mite Responsabilidad Civil</td>
                    </tr>
                    <tr>
                    <td>Menor o igual a $15000</td>
                    <td>Hasta $15000</td>
                    </tr>
                    <tr>
                    <td>Entre $15001 y $20000</td>
                    <td>Hasta $20000</td>
                    </tr>
                    <tr>
                    <td>Entre $15001 y $20000</td>
                    <td>Hasta $20000</td>
                    </tr>
                    <tr>
                    <td>Entre $15001 y $20000</td>
                    <td>Hasta $20000</td>
                    </tr>
                    <tr>
                    <td>Entre $15001 y $20000</td>
                    <td>Hasta $20000</td>
                    </tr>
                    <tr>
                    <td>Entre $15001 y $20000</td>
                    <td>Hasta $20000</td>
                    </tr>
                    </tbody>
                    </table>
                ";

                //var html = @"
                //    <p><strong>Recibe</strong> un auto <span style='background - color: #ff0000;'>sustituto</span> por 10 d&iacute;as en p&eacute;rdidas parciales y 20 d&iacute;as en p&eacute;rdidas totales, cuando el valor del siniestro sea mayor a $1.000 y la reparaci&oacute;n de tu auto supere los 3 d&iacute;as. La gama del auto sustituto depender&aacute; del valor asegurado de tu veh&iacute;culo:</p>
                //";

                var normalString = HttpUtility.HtmlDecode(html.Trim());
                var normalString1 = HttpUtility.HtmlEncode(html);

                var parser = new JsonizeParser();
                var serializer = new JsonizeSerializer();

                var jsonizer = new Jsonizer(parser, serializer);

                var json = await jsonizer.ParseToStringAsync(normalString);
                //var json = await jsonizer.ParseToJsonizeNodeAsync(html);

                output.WriteLine($"{json}");

                //JObject json1 = JObject.Parse(normalString);

            }
        }
    }
}
