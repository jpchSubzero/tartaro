using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using Xunit;
using Xunit.Abstractions;

namespace SyncRequest
{
    public class UnitTest1
    {
        private readonly ITestOutputHelper output;

        public UnitTest1(ITestOutputHelper output) {
            this.output = output;
        }
            
        [Fact]
        public void Test1()
        {
            GetTokenAsync();
        }

        [Fact]
        public void Test2()
        {
            var url = $"https://jsonmock.hackerrank.com/api/articles";

            WebRequest request = WebRequest.Create(url);

            WebResponse response = request.GetResponse();
            using (Stream dataStream = response.GetResponseStream())
            {
                StreamReader reader = new StreamReader(dataStream);
                string responseFromServer = reader.ReadToEnd();

                var options = new JsonSerializerOptions
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                };
                var resultado = JsonSerializer.Deserialize<Data>(responseFromServer, options);

                var xxx = resultado.data.Where(x => !x.author.Equals("epaga")).OrderByDescending(x => x.num_comments).Take(5);

                output.WriteLine(JsonSerializer.Serialize(resultado));
                output.WriteLine(JsonSerializer.Serialize(xxx));
            }

            response.Close();
        }

        private void GetTokenAsync()
        {

            var url = $"https://jsonmock.hackerrank.com/api/articles?page=1";

            var client = new HttpClient();
            var response = client.GetAsync(url).Result;

            string result = response.Content.ReadAsStringAsync().Result;

            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            };
            var resultado = JsonSerializer.Deserialize<Data>(result, options);

            //Ordenar por dos campos
            var filtrado = resultado.data.Where(x => !x.author.Equals("epaga")).OrderByDescending(x => x.num_comments).Take(5);

            output.WriteLine(JsonSerializer.Serialize(resultado));
            output.WriteLine(JsonSerializer.Serialize(filtrado));
        }
    }

    public class Datum
    {
        public string title { get; set; }
        public string url { get; set; }
        public string author { get; set; }
        public int? num_comments { get; set; }
        public object story_id { get; set; }
        public string story_title { get; set; }
        public string story_url { get; set; }
        public int? parent_id { get; set; }
        public int created_at { get; set; }
    }

    public class Data
    {
        public int page { get; set; }
        public int per_page { get; set; }
        public int total { get; set; }
        public int total_pages { get; set; }
        public List<Datum> data { get; set; }
    }
}
