using System;
using Xunit;

namespace StringCalculator
{
    public class StringCalculator_Test
    {
        [Fact]
        public void Shoukd_Return_0_When_Receives_Empty()
        {
            //Arrange

            var calculator = new StringCalculator();

            //Act

            var result = calculator.Add("");

            //Assert

            Assert.Equal(0, result);
        }

        [Fact]
        public void Shoukd_Return_Same_Number_When_Receives_Numbers()
        {
            //Arrange

            var calculator = new StringCalculator();

            //Act

            var result = calculator.Add("1");

            //Assert

            Assert.Equal(1, result);
        }

        [Fact]
        public void Shoukd_Return_Sum_When_Receives_Two_Numbers()
        {
            //Arrange

            var calculator = new StringCalculator();

            //Act

            var result = calculator.Add("1,3");

            //Assert

            Assert.Equal(4, result);
        }

        [Fact]
        public void Shoukd_Return_Sum_When_Receives_Many_Numbers()
        {
            //Arrange

            var calculator = new StringCalculator();

            //Act

            var result = calculator.Add("1,2,3,4,5,6,7");

            //Assert

            Assert.Equal(28, result);
        }

        [Theory]
        [InlineData("", 0)]
        [InlineData("1", 1)]
        [InlineData("1,2", 3)]
        [InlineData("1,2,3", 6)]
        [InlineData("1,2,3,4", 6)]
        [InlineData("1,2,3,4,5", 6)]
        [InlineData("1,2,3,4,5,6", 6)]
        [InlineData("1,2,3,4,5,6,7", 28)]
        public void Shoukd_Evaluate_String_Numbers(string value, int expected)
        {
            var calculator = new StringCalculator();

            var result = calculator.Add(value);

            Assert.Equal(expected, result);
        }
    }
}
