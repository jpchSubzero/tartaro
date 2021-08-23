using Bogus;
using DynamicExpresso;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using Newtonsoft.Json;
using ScriptRunTest.Mock;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Xunit;
using Xunit.Abstractions;

namespace ScriptRunTest
{
    public class DynamicExpressoTest
    {
        private readonly ITestOutputHelper output;

        public DynamicExpressoTest(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void PowWithParameters()
        {
            var target = new Interpreter();
            double result = target.Eval<double>("Math.Pow(x, y) + 5",
                                new Parameter("x", typeof(double), 10),
                                new Parameter("y", typeof(double), 2));
            output.WriteLine(result + "");

        }

        [Fact]
        public void PowAsFunc()
        {

            Func<double, double, double> pow = (x, y) => Math.Pow(x, y);
            var target = new Interpreter().SetFunction("pow", pow);

            var xxx = target.Eval("pow(3, 2)");

            output.WriteLine(xxx + "");

        }

        [Fact]
        public void CustomStringMethodAsFunc()
        {

            Func<string> generateString = () => GenerateString();
            var target = new Interpreter().SetFunction("generateString", generateString);

            var xxx = target.Eval("generateString()");

            output.WriteLine(xxx.ToString());

        }

        [Fact]
        public void CustomComplexMethodAsFunc()
        {

            Func<int, MockDataDtoModelView> generateData = (x) => MockDataBuilder.GenerateData(x);
            var target = new Interpreter().SetFunction("generateData", generateData);

            var data = target.Eval("generateData(10)") as MockDataDtoModelView;

            data.Data.ForEach(x =>
            {
                output.WriteLine(x.name);
            });

        }

        [Fact]
        public void LinqWhereExample()
        {
            var customers = new List<Customer> {
                new Customer() { Name = "David", Age = 31, Gender = 'M' },
                new Customer() { Name = "Mary", Age = 29, Gender = 'F' },
                new Customer() { Name = "Jack", Age = 2, Gender = 'M' },
                new Customer() { Name = "Marta", Age = 1, Gender = 'F' },
                new Customer() { Name = "Moses", Age = 120, Gender = 'M' },
            };

            string whereExpression = "customer.Age > 18 && customer.Gender == 'F'";

            var interpreter = new Interpreter();
            Func<Customer, bool> dynamicWhere = interpreter.ParseAsDelegate<Func<Customer, bool>>(whereExpression, "customer");

            var xxx = customers.Count(dynamicWhere);

            output.WriteLine($"{xxx}");
        }

        [Fact]
        public void LinqWhereAnd()
        {

            var data = MockDataBuilder.GenerateData(100);

            var dataLists = data.Data;

            var dataFilteredStatic = dataLists.Where(dataList => dataList.city == "CITY_1" && dataList.name.StartsWith("A")).ToList();

            string whereExpression = "dataList.city == \"CITY_1\" && dataList.name.StartsWith(\"A\")";

            var interpreter = new Interpreter();
            Func<MockDataDto, bool> dynamicWhere = interpreter.ParseAsDelegate<Func<MockDataDto, bool>>(whereExpression, "dataList");

            var dataFilteredDynamic = dataLists.Where(dynamicWhere).ToList();

            dataFilteredDynamic.ForEach(x =>
            {
                output.WriteLine(x.name);
            });

            Assert.Equal(dataFilteredDynamic.Count, dataFilteredStatic.Count);
        }

        [Fact]
        public void LinqWhereCustom()
        {
            var data = MockDataBuilder.GenerateData(100);
            var dataLists = data.Data;
            var interpreter = new Interpreter();

            var dataFilteredStatic = dataLists.Where(item =>
                (item.age >= 0 && item.age < 10) && (item.age <= 0 && item.age > 10) && (item.birthday >= DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture) && item.birthday < DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture)) && (item.birthday <= DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture) && item.birthday > DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture)) && item.age == 0 && item.birthday == DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture)
            ).ToList();

            var dataFilteredStatic1 = dataLists.Where(item =>
                (item.age >= 0 && item.age < 10) && (item.age <= 0 && item.age > 10) && (item.birthday >= DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture) && item.birthday < DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture)) && (item.birthday <= DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture) && item.birthday > DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture)) && item.age == 0 && item.birthday == DateTime.ParseExact("08/22/2021", "d", CultureInfo.InvariantCulture)).ToList();

            string whereExpression = "item.name.StartsWith(\"A\") && item.age > 30 && (item.city == \"CITY_2\")";
            var vars = new string[] { "item" };
            Func<MockDataDto, bool> dynamicWhere = interpreter.ParseAsDelegate<Func<MockDataDto, bool>>(whereExpression, vars);
            var dataFilteredDynamic = dataLists.Where(dynamicWhere).ToList();

            dataFilteredStatic.ForEach(x => output.WriteLine(x.name));
            output.WriteLine("-----------------------------");
            dataFilteredStatic1.ForEach(x => output.WriteLine(x.name));

            //Assert.Equal(dataFilteredDynamic.Count, dataFilteredStatic.Count);
        }

        [Fact]
        public void LinqWhereCustomQB()
        {
            var dataLists = MockDataBuilder.GenerateDataQB(100);

            var dataFilteredStatic = dataLists.Where(item =>

item.Date > Convert.ToDateTime("8/22/1921", CultureInfo.InvariantCulture)





            ).ToList();


            var interpreter = new Interpreter();
            string whereExpression = "new string[] { \"Food\" }.Contains(item.Category)";
            var vars = new string[] { "item" };
            //Func<QueryBuilderDataDto, bool> dynamicWhere = interpreter.ParseAsDelegate<Func<QueryBuilderDataDto, bool>>(whereExpression, vars);
            //var dataFilteredDynamic = dataLists.Where(dynamicWhere).ToList();

            //dataFilteredDynamic.ForEach(x => output.WriteLine(x.Category));
            output.WriteLine("-----------------------------");
            dataFilteredStatic.ForEach(x => output.WriteLine(x.Category));

        }


        #region Métodos de soporte

        public static string GenerateString()
        {
            var faker = new Faker("es");
            return faker.Person.FullName;
        }

        class Customer
        {
            public string Name { get; set; }
            public int Age { get; set; }
            public char Gender { get; set; }
        }

        #endregion
    }
}
