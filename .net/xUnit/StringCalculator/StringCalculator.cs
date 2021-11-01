using System;
using System.Linq;

namespace StringCalculator
{
    public class StringCalculator
    {
        public int Add(string input)
        {
            if (string.IsNullOrEmpty(input)) return 0;

            string[] numbers = input.Split(",");

            return numbers.Sum(x => int.Parse(x));
        }

        public static void Main(string[] args)
        {

        }
    }
}
