using MspAutomatization;
using Newtonsoft.Json;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

public class ApiManager
{
    private readonly HttpClient _httpClient;

    public ApiManager()
    {
        var handler = new HttpClientHandler
        {
            AutomaticDecompression = System.Net.DecompressionMethods.GZip
                            | System.Net.DecompressionMethods.Deflate
                            | System.Net.DecompressionMethods.Brotli
        };

        _httpClient = new HttpClient(handler);
    }

    public async Task<string> GetTokenAsync(Guid id)
    {
        var url = "https://coberturasalud.msp.gob.ec/";
        var data = $"[\"{id}\",\"https://coberturasalud.msp.gob.ec\"]";
        var content = new StringContent(data, Encoding.UTF8, "text/plain");

        var request = new HttpRequestMessage(HttpMethod.Post, url);
        request.Content = content;

        request.Headers.Add("Accept", "text/x-component");
        request.Headers.Add("Accept-Encoding", "gzip, deflate, br, zstd");
        request.Headers.Add("Accept-Language", "es-419,es;q=0.9");
        request.Headers.Add("Connection", "keep-alive");
        //request.Headers.Add("Content-Length", data.Length.ToString());
        request.Headers.Add("Host", "coberturasalud.msp.gob.ec");
        request.Headers.Add("Next-Action", "60d9c0ba17e867cb74444178292b9b705c4da80f09");
        request.Headers.Add("Next-Router-State-Tree", "%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D");
        request.Headers.Add("Origin", "https://coberturasalud.msp.gob.ec");
        request.Headers.Add("Referer", "https://coberturasalud.msp.gob.ec/");
        request.Headers.Add("Sec-Fetch-Dest", "empty");
        request.Headers.Add("Sec-Fetch-Mode", "cors");
        request.Headers.Add("Sec-Fetch-Site", "same-origin");
        request.Headers.Add("Sec-GPC", "1");
        request.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36");
        request.Headers.Add("sec-ch-ua", "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Brave\";v=\"138\"");
        request.Headers.Add("sec-ch-ua-mobile", "?0");
        request.Headers.Add("sec-ch-ua-platform", "\"Windows\"");

        var response = await _httpClient.SendAsync(request);
        string token = ExtractToken(await response.Content.ReadAsStringAsync());
        return token;
    }

    public async Task<ResponseDto> SendEncryptedConsultationRequestAsync(string identificacion, string fechaConsulta, string token, string cs)
    {
        var payload = $"[\"cobertura\",\"https://coberturasalud.msp.gob.ec\",\"POST\",{{" +
                      $"\"identificacion\":\"{identificacion}\"," +
                      $"\"fechaConsulta\":\"{fechaConsulta}\"," +
                      $"\"token\":\"{token}\"," +
                      $"\"csconsulta\":\"{Transform(cs)}\"}}]";

        var content = new StringContent(payload, Encoding.UTF8, "text/plain");

        var request = new HttpRequestMessage(HttpMethod.Post, "https://coberturasalud.msp.gob.ec/")
        {
            Content = content
        };

        request.Headers.Add("Accept", "text/x-component");
        request.Headers.Add("Accept-Encoding", "gzip, deflate, br, zstd");
        request.Headers.Add("Accept-Language", "es-419,es;q=0.9");
        request.Headers.Add("Connection", "keep-alive");
        request.Headers.Add("Host", "coberturasalud.msp.gob.ec");
        request.Headers.Add("Next-Action", "78d9caa3f8a4c2f05383e70d91433f18eb70dc64c6");
        request.Headers.Add("Next-Router-State-Tree", "%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D");
        request.Headers.Add("Origin", "https://coberturasalud.msp.gob.ec");
        request.Headers.Add("Referer", "https://coberturasalud.msp.gob.ec/");
        request.Headers.Add("Sec-Fetch-Dest", "empty");
        request.Headers.Add("Sec-Fetch-Mode", "cors");
        request.Headers.Add("Sec-Fetch-Site", "same-origin");
        request.Headers.Add("Sec-GPC", "1");
        request.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36");
        request.Headers.Add("sec-ch-ua", "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Brave\";v=\"138\"");
        request.Headers.Add("sec-ch-ua-mobile", "?0");
        request.Headers.Add("sec-ch-ua-platform", "\"Windows\"");

        var response = await _httpClient.SendAsync(request);
        response.EnsureSuccessStatusCode();

        return ExtractResponseAtIndex(ResponseToDictionary(await response.Content.ReadAsStringAsync()));
    }

    // Método para extraer el token
    private static string ExtractToken(string responseText)
    {
        // Separar las líneas
        var lines = responseText.Split(new[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries);

        // Buscar la línea que empieza con "1:"
        var line1 = lines.FirstOrDefault(l => l.StartsWith("1:"));
        if (line1 == null)
            throw new Exception("No se encontró la línea con el token.");

        // Quitar el prefijo "1:" y parsear JSON
        var jsonPart = line1.Substring(2).Trim();
        var parsed = JsonConvert.DeserializeObject<ApiResponse>(jsonPart);

        return parsed?.Data?.Token ?? throw new Exception("Token no encontrado.");
    }

    private static string Transform(string e)
    {
        string result = "";

        for (int n = 0; n < e.Length; n += 2)
        {
            int t;

            if (n + 1 < e.Length)
            {
                t = int.Parse(e[n].ToString()) + int.Parse(e[n + 1].ToString());
            }
            else
            {
                t = int.Parse(e[n].ToString());
            }

            result += t.ToString();
        }

        return result;
    }

    private static ResponseDto ExtractResponseAtIndex(Dictionary<string, string> input)
    {
        if (!input.ContainsKey("1"))
            throw new Exception("No existe la posición 1 en la estructura.");

        string json = input["1"];
        return JsonConvert.DeserializeObject<ResponseDto>(json);
    }

    public static Dictionary<string, string> ResponseToDictionary(string input)
    {
        var resultado = new Dictionary<string, string>();

        var regex = new Regex(@"(\d+):({.*?})(?=\n|$)", RegexOptions.Singleline);
        var coincidencias = regex.Matches(input);

        foreach (Match match in coincidencias)
        {
            string clave = match.Groups[1].Value;
            string valor = match.Groups[2].Value;
            resultado[clave] = valor;
        }

        return resultado;
    }

    public class ApiResponse
    {
        [JsonPropertyName("success")]
        public string Success { get; set; }

        [JsonPropertyName("data")]
        public TokenData Data { get; set; }
    }

    public class TokenData
    {
        [JsonPropertyName("token")]
        public string Token { get; set; }

        [JsonPropertyName("reqId")]
        public string ReqId { get; set; }
    }
}
