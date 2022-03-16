using Jsonize;
using Jsonize.Abstractions.Models;
using Jsonize.Parser;
using Jsonize.Serializer;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Text.RegularExpressions;
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
        public async Task GenerateJson_WithSimpleHtml_GeneratedJson()
        {
            var normalString = HttpUtility.HtmlDecode(GetSimpleHtml().Trim());

            var parser = new JsonizeParser();
            var serializer = new JsonizeSerializer();

            var jsonizer = new Jsonizer(parser, serializer);

            var jsonWithUselessNodes = await jsonizer.ParseToJsonizeNodeAsync(htmlEntities(normalString));

            JsonizeNode jsonClean;
            CleanJsonFromUselessNodes(jsonWithUselessNodes, out jsonClean);

            var jsonString = JsonConvert.SerializeObject(jsonClean);

            output.WriteLine($"{htmlEntities(jsonString, true)}");

            Assert.NotNull(jsonClean);
            Assert.NotEmpty(jsonString);
        }

        [Fact]
        public async Task GenerateJson_WithComplexHtml_GeneratedJson()
        {
            var normalString = HttpUtility.HtmlDecode(GetComplexHtml().Trim());

            var parser = new JsonizeParser();
            var serializer = new JsonizeSerializer();

            var jsonizer = new Jsonizer(parser, serializer);

            var jsonWithUselessNodes = await jsonizer.ParseToJsonizeNodeAsync(htmlEntities(normalString));

            JsonizeNode jsonClean;
            CleanJsonFromUselessNodes(jsonWithUselessNodes, out jsonClean);

            var jsonString = JsonConvert.SerializeObject(jsonClean);

            output.WriteLine($"{htmlEntities(jsonString, true)}");

            Assert.NotNull(jsonClean);
            Assert.NotEmpty(jsonString);
        }

        [Fact]
        public async Task GenerateJson_WithNonHtml_GeneratedJson()
        {
            var normalString = HttpUtility.HtmlDecode(GetNonHtml().Trim());

            var parser = new JsonizeParser();
            var serializer = new JsonizeSerializer();

            var jsonizer = new Jsonizer(parser, serializer);

            var jsonWithUselessNodes = await jsonizer.ParseToJsonizeNodeAsync(htmlEntities(normalString));

            JsonizeNode jsonClean;
            CleanJsonFromUselessNodes(jsonWithUselessNodes, out jsonClean);

            var jsonString = JsonConvert.SerializeObject(jsonClean);

            output.WriteLine($"{htmlEntities(jsonString, true)}");

            Assert.NotNull(jsonClean);
            Assert.NotEmpty(jsonString);
        }

        [Fact]
        public async Task GenerateRealJson()
        {
            var normalString = HttpUtility.HtmlDecode(GetRealHtml().Trim());

            var parser = new JsonizeParser();
            var serializer = new JsonizeSerializer();

            var jsonizer = new Jsonizer(parser, serializer);

            var jsonWithUselessNodes = await jsonizer.ParseToJsonizeNodeAsync(htmlEntities(normalString));

            JsonizeNode jsonClean;
            CleanJsonFromUselessNodes(jsonWithUselessNodes, out jsonClean);

            var jsonString = JsonConvert.SerializeObject(jsonClean);

            output.WriteLine($"{htmlEntities(jsonString, true)}");

            Assert.NotNull(jsonClean);
            Assert.NotEmpty(jsonString);
        }


        private string htmlEntities(string html, bool reverse = false)
        {
            var tags = new Dictionary<string, string>();
            tags.Add("<strong>", "[[strong]]");
            tags.Add("</strong>", "[[/strong]]");
            tags.Add("<b>", "[[b]]");
            tags.Add("</b>", "[[/b]]");
            tags.Add("<i>", "[[i]]");
            tags.Add("</i>", "[[/i]]");
            tags.Add("<u>", "[[u]]");
            tags.Add("</u>", "[[/u]]");
            tags.Add("<em>", "[[em]]");
            tags.Add("</em>", "[[/em]]");
            tags.Add("<a", "[[a");
            tags.Add("</a>", "[[/a]]");
            tags.Add("<img", "[[img");

            string convertedString = html;
            foreach (var tag in tags)
            {
                if (reverse)
                {
                    convertedString = convertedString.Replace(tag.Value, tag.Key);
                }
                else
                {
                    convertedString = convertedString.Replace(tag.Key, tag.Value);
                }
            }
            return convertedString;
        }

        private void CleanJsonFromUselessNodes(JsonizeNode node, out JsonizeNode node1)
        {
            node1 = node;
            if (node.Tag?.Equals("body") ?? true)
            {
                foreach (var children in node.Children)
                {
                    CleanJsonFromUselessNodes(children, out node1);
                }
            } else
            {
                node1 = node.Children.FirstOrDefault(x => x.Tag.Equals("body"));
            }
        }

        private string GetSimpleHtml()
        {
            return @"<p>Tu auto est&aacute; totalmente cubierto ante cualquier da&ntilde;o parcial o total, ya sea por accidente o robo. Adem&aacute;s tambi&eacute;n cuentas con esta protecci&oacute;n en toda la Comunidad Andina, es decir en Bolivia, Colombia y Per&uacute;.</p>";
        }

        private string GetComplexHtml()
        {
            return @"<p>Recibe un auto <strong>sustituto </strong>por 10 d&iacute;as en p&eacute;rdidas <a href='http://www.google.com'>parciales</a> y 20 d&iacute;as en p&eacute;rdidas totales, cuando el valor del siniestro sea mayor a $1.000 y la reparaci&oacute;n de tu auto supere los 3 d&iacute;as. La gama del auto sustituto depender&aacute; del valor asegurado de tu veh&iacute;culo:</p><p><img src='https://static.remove.bg/remove-bg-web/6c5ea334216f9ded64486efb0e2a4421757cbce5/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt='asdfasdfasf' width='600' height='400' /></p><p>Recibe un auto <strong>sustituto </strong>por 10 d&iacute;as en p&eacute;rdidas <a href='http://www.google.com'>parciales</a> y 20 d&iacute;as en p&eacute;rdidas totales, cuando el valor del <em>siniestro</em> sea mayor a $1.000 y la <em><strong>reparaci&oacute;n</strong> </em>de tu auto supere los 3 d&iacute;as. La gama del auto sustituto depender&aacute; del valor asegurado de tu veh&iacute;culo:</p><ul><li>Veh&iacute;culos con un valor asegurado de $0 a $20.000: Gama baja.</li><li>Veh&iacute;culos con un valor asegurado de $20.001 a $40.000: Gama media.</li><li>Veh&iacute;culos con un valor asegurado de $40.001 en adelante: Gama alta.</li></ul><h4>Tabla de Responsabilidad Civil</h4><table><tbody><tr><td>Valor asegurado del veh&iacute;culo</td><td>L&iacute;mite Responsabilidad Civil</td></tr><tr><td>Menor o igual a $15000</td><td>Hasta $15000</td></tr><tr><td>Entre $15001 y $20000</td><td>Hasta $20000</td></tr><tr><td>Entre $15001 y $20000</td><td>Hasta $20000</td></tr><tr><td>Entre $15001 y $20000</td><td>Hasta $20000</td></tr><tr><td>Entre $15001 y $20000</td><td>Hasta $20000</td></tr><tr><td>Entre $15001 y $20000</td><td>Hasta $20000</td></tr></tbody></table>";
        }

        private string GetNonHtml()
        {
            return @"Tu auto est&aacute; totalmente cubierto ante cualquier da&ntilde;o parcial o total, ya sea por accidente o robo. Adem&aacute;s tambi&eacute;n cuentas con esta protecci&oacute;n en toda la Comunidad Andina, es decir en Bolivia, Colombia y Per&uacute;.";
        }

        private string GetRealHtml()
        {
            return @"<p>Recibe un auto sustituto por 10 d&iacute;as en p&eacute;rdidas parciales y 20 d&iacute;as en p&eacute;rdidas totales, cuando el valor del siniestro sea mayor a $1.000 y la reparaci&oacute;n de tu auto supere los 3 d&iacute;as. La gama del auto sustituto depender&aacute; del valor asegurado de tu veh&iacute;culo:</p><ul><li>Veh&iacute;culos con un valor asegurado de $0 a $20.000: Gama baja.</li><li>Veh&iacute;culos con un valor asegurado de $20.001 a $40.000: Gama media.</li><li>Veh&iacute;culos con un valor asegurado de $40.001 en adelante: Gama alta.</li></ul>";
        }
    }
}
