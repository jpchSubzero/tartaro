using Bogus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ScriptRunTest.Mock
{
    public static class MockDataBuilder
    {
        public static MockDataDtoModelView GenerateData(int length)
        {
            var dataModel = new MockDataDtoModelView();
            var data = new List<MockDataDto>();
            var cities = MockColumBuilder.GetCityValues();
            var categories = MockColumBuilder.GetCategoriesValues();
            var random = new Random();

            for (int i = 0; i < length; i++)
            {
                var faker = new Faker("es");
                var item = new MockDataDto();
                item.name = faker.Person.FullName;
                item.age = 10 + random.Next(60);
                item.birthday = faker.Person.DateOfBirth;
                item.city = cities.ElementAt(random.Next(categories.Count)).Id;
                item.categories = new List<string>();

                for (int j = 0; j < (random.Next(3) + 1); j++)
                {
                    item.categories.Add(categories.ElementAt(j).Id);
                }

                data.Add(item);
            }

            dataModel.Data = data;

            return dataModel;
        }

        public static List<QueryBuilderDataDto> GenerateDataQB(int length)
        {
            var data = new List<QueryBuilderDataDto>();
            var paymentModes = new string[] { "Cash", "Debit Card", "Credit Card", "Net Banking", "Wallet" };
            var transactionType = new string[] { "income", "expensive" };
            var categories = new string[] { "Food", "Shopping", "Salary", "Transportation", "Mortgage / Rent", "Clothing", "Housing", "Utilities", "Bills", "Personal Care", "Extra income", "Others", "Health Care", "Interests", "Insurance", "Business", "Tax", "Education" };

            for (int i = 0; i < length; i++)
            {
                var random = new Random();
                var faker = new Faker("es");
                var item = new QueryBuilderDataDto();

                item.Category = categories[random.Next(categories.Length)];
                item.PaymentMode = paymentModes[random.Next(paymentModes.Length)];
                item.Date = faker.Person.DateOfBirth;
                item.Amount = 10 + random.Next(100);
                item.Description = faker.Lorem.ToString();
                item.TransactionType = transactionType[random.Next(transactionType.Length)];

                data.Add(item);
            }


            return data;
        }

        public static string GenerateString()
        {
            var faker = new Faker("es");
            return faker.Person.FullName;
        }
    }

    public class MockDataDto
    {
        public string name { set; get; }
        public int age { set; get; }
        public DateTime birthday { set; get; }
        public string city { set; get; }
        public List<string> categories { set; get; }
    }

    public class MockDataDtoModelView
    {
        public List<MockDataDto> Data { get; set; }
        public string Rule { get; set; }
    }

    public class QueryBuilderDataDto
    {
        public string Category { get; set; }
        public string PaymentMode { get; set; }
        public string TransactionType { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public int Amount { get; set; }

    }

}
