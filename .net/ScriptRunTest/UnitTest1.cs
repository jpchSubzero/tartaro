using Bogus;
using DynamicExpresso;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using ScriptRunTest.Mock;
using System;
using Xunit;
using Xunit.Abstractions;

namespace ScriptRunTest
{
    public class UnitTest1
    {
        private readonly ITestOutputHelper output;

        public UnitTest1(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void GetToday()
        {
            var now = CSharpScript.EvaluateAsync<string>("System.DateTime.Now.ToString()").Result;
            output.WriteLine(now);
        }

        [Fact]
        public void GetMockData()
        {
            var data = CSharpScript.EvaluateAsync<string>("ScriptRunTest.UnitTest1.GenerateString()").Result;

            output.WriteLine(data);

        }

        [Fact]
        public void DynamicExpresso()
        {
            var target = new Interpreter();
            double result = target.Eval<double>("Math.Pow(x, y) + 5",
                                new Parameter("x", typeof(double), 10),
                                new Parameter("y", typeof(double), 2));
            output.WriteLine(result + "");

        }

        [Fact]
        public void DynamicExpresso2()
        {

            Func<double, double, double> pow = (x, y) => Math.Pow(x, y);
            var target = new Interpreter().SetFunction("pow", pow);

            var xxx = target.Eval("pow(3, 2)");

            output.WriteLine(xxx + "");

        }

        [Fact]
        public void DynamicExpresso3()
        {

            Func<string> generateString = () => GenerateString();
            var target = new Interpreter().SetFunction("generateString", generateString);

            var xxx = target.Eval("generateString()");

            output.WriteLine(xxx.ToString());

        }

        [Fact]
        public void DynamicExpresso4()
        {

            Func<int, MockDataDtoModelView> generateData = (x) => MockDataBuilder.GenerateData(x);
            var target = new Interpreter().SetFunction("generateData", generateData);

            var data = target.Eval("generateData(10)") as MockDataDtoModelView;

            data.Data.ForEach(x =>
            {
                output.WriteLine(x.name);
            });

        }

        #region Métodos de soporte

        public static string GenerateString()
        {
            var faker = new Faker("es");
            return faker.Person.FullName;
        }

        #endregion

    }
}
