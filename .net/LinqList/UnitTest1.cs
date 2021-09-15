using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using Xunit.Abstractions;

namespace LinqList
{
    public class UnitTest1
    {

        private readonly ITestOutputHelper output;

        public UnitTest1(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void Test1()
        {
            var lista1 = new List<string> { "uno", "dos", "tres", "cuatro", "cinco" };
            var lista2 = new List<Lista2> {
                new Lista2("uno1", "uno"),
                new Lista2("dos1", "dos"),
                new Lista2("tres", "tres"),
                new Lista2("cuatro1", "cuatro"),
                new Lista2("2uno", "uno"),
                new Lista2("2dos", "dos"),
                new Lista2("2tres", "tres"),
                new Lista2("2cuatro", "cuatro"),
                new Lista2("uno3", "uno"),
                new Lista2("dos3", "dos"),
                new Lista2("tres3", "tres"),
                new Lista2("cuatro3", "cuatro"),
                new Lista2("4uno", "uno"),
                new Lista2("4dos", "dos"),
                new Lista2("4tres", "tres"),
                new Lista2("4cuatro", "cuatro"),
                new Lista2("uno5", "uno"),
                new Lista2("dos5", "dos"),
                new Lista2("tres5", "tres"),
                new Lista2("cuatro5", "cuatro"),
                new Lista2("6uno", "uno"),
                new Lista2("6dos", "dos"),
                new Lista2("6tres", "tres"),
                new Lista2("6cuatro", "cuatro"),
                new Lista2("uno7", "uno"),
                new Lista2("dos7", "dos"),
                new Lista2("tres7", "tres"),
                new Lista2("cuatro7", "cuatro"),
                new Lista2("8uno", "uno"),
                new Lista2("8dos", "dos"),
                new Lista2("8tres", "tres"),
                new Lista2("8cuatro", "cuatro"),
                new Lista2("uno9", "uno"),
                new Lista2("dos9", "dos"),
                new Lista2("tres9", "tres"),
                new Lista2("cuatro9", "cuatro")
            };


            output.WriteLine("Con índices");
            var query = lista2.Where(e => e.campo1.StartsWith(lista1[0]) || e.campo1.StartsWith(lista1[1]) || e.campo1.StartsWith(lista1[2])).ToList();
            query.ForEach(x => output.WriteLine(x.campo1));


            output.WriteLine("Sin índices");
            var query1 = lista2.Where(e => lista1.Any(x => e.campo1.StartsWith(x))).ToList();
            query1.ForEach(x => output.WriteLine(x.campo1));

        }
    }

    class Lista2 {
        public string campo1 { set; get; }
        public string campo2 { set; get; }
        public Lista2(string campo1, string campo2) {
            this.campo1 = campo1;
            this.campo2 = campo2;
        
        }
    }
}
