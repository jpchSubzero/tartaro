using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace MetadataConvertion
{
    public class MetadataConverter
    {
        [Fact]
        public async Task xxx()
        {

            Convert(GetInput());
        }

        private QuotationDto Convert(List<InterContextDataDto> data)
        {
            var quotationDto = new QuotationDto();
			quotationDto.QuotationFields ??= new List<QuotationField>();

			quotationDto.ValidDays = GetValueFromGeneric<int>(nameof(quotationDto.ValidDays), data);
            quotationDto.State = GetValueFromGeneric<string>(nameof(quotationDto.State), data);
            quotationDto.PartialPrice = GetValueFromGeneric<decimal>(nameof(quotationDto.PartialPrice), data);
            quotationDto.Tax = GetValueFromGeneric<decimal>(nameof(quotationDto.Tax), data);
            quotationDto.FinalPrice = GetValueFromGeneric<decimal>(nameof(quotationDto.FinalPrice), data);
            quotationDto.ProductId = GetValueFromGeneric<Guid>(nameof(quotationDto.ProductId), data);
            quotationDto.PlanId = GetValueFromGeneric<Guid>(nameof(quotationDto.PlanId), data);
            quotationDto.CurrencyId = GetValueFromGeneric<Guid>(nameof(quotationDto.CurrencyId), data);
            quotationDto.PeriodId = GetValueFromGeneric<Guid>(nameof(quotationDto.PeriodId), data);
            quotationDto.WayId = GetValueFromGeneric<Guid>(nameof(quotationDto.WayId), data);
            quotationDto.TrackingId = GetValueFromGeneric<Guid>(nameof(quotationDto.TrackingId), data);
            quotationDto.ProductCode = GetValueFromGeneric<string>(nameof(quotationDto.ProductCode), data);
            List<InterContextDataDto> inputFields = (List<InterContextDataDto>)data.FirstOrDefault(x => x.IsComplex).Value;

            GetInnerProperties(quotationDto, inputFields, 2);

            return quotationDto;
        }

        private void GetInnerProperties(QuotationDto quotationDto, List<InterContextDataDto> inputFields, int fields)
        {
            for (int i = 1; i <= inputFields.Count / fields; i++)
            {
				var key = GetValueFromGenericSubCollection<Guid>("FieldId", $"{i}", inputFields);
				var value = GetValueFromGenericSubCollection<string>("Value", $"{i}", inputFields);

				quotationDto.QuotationFields.Add(new QuotationField()
                {
                    FieldId = key,
                    Value = value
                });
            }
        }

        private T GetValueFromGeneric<T>(string field, List<InterContextDataDto> genericData)
        {
			var value = genericData.FirstOrDefault(x => x.Key.Equals(field)).Value.ToString();
			return ConvertFrom<T>(value);
		}

        private T GetValueFromGenericSubCollection<T>(string field, string code, List<InterContextDataDto> genericData)
        {
			var value = genericData.FirstOrDefault(x => x.Key.Equals(field) && x.Code.Equals(code)).Value.ToString();
			return ConvertFrom<T>(value);
		}

		private T ConvertFrom<T>(string value)
        {
            var converter = TypeDescriptor.GetConverter(typeof(T));
            var result = converter.ConvertFrom(value);
            return (T)result;
        }

        private List<InterContextDataDto> GetInput()
        {
            var data = new List<InterContextDataDto>();
			data.Add(new InterContextDataDto()
			{
				Key = "ValidDays",
				Code = "ValidDays",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.Number,
				Value = "90",
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "State",
				Code = "State",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "string",
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "PartialPrice",
				Code = "PartialPrice",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.Decimal,
				Value = 9999.99,
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "Tax",
				Code = "Tax",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.Decimal,
				Value = 9999.99,
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "FinalPrice",
				Code = "FinalPrice",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.Decimal,
				Value = 9999.99,
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "ProductId",
				Code = "ProductId",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "PlanId",
				Code = "PlanId",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "CurrencyId",
			  Code = "CurrencyId",
			  Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "PeriodId",
				Code = "PeriodId",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "WayId",
				Code = "WayId",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "TrackingId",
				Code = "TrackingId",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "ProductCode",
				Code = "ProductCode",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "PROD001",
				IsComplex = false
			});

			var inputs = new List<InterContextDataDto>();
			inputs.Add(new InterContextDataDto()
			{
				Key = "FieldId",
				Code = "1",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				IsComplex = false
			});
			inputs.Add(new InterContextDataDto()
			{
				Key = "Value",
				Code = "1",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "value 1",
				IsComplex = false
			});
			inputs.Add(new InterContextDataDto()
			{
				Key = "FieldId",
				Code = "2",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				IsComplex = false
			});
			inputs.Add(new InterContextDataDto()
			{
				Key = "Value",
				Code = "2",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = "value 2",
				IsComplex = false
			});
			data.Add(new InterContextDataDto()
			{
				Key = "QuotationFields",
				Code = "QuotationFields",
				Updatable = false,
				IsRequired = true,
				ValueType = TypeValue.String,
				Value = inputs,
				IsComplex = true
			});

			return data;
        }

    }

    public class InterContextDataDto
    {
        public string Key { set; get; }
        public Object Value { set; get; }
        public string Code { set; get; }
        public bool Updatable { set; get; }
        public bool IsRequired { set; get; }
        public TypeValue ValueType { set; get; } = TypeValue.String;
        public bool IsComplex { set; get; } = false;

    }

    public enum TypeValue
    {
        String = 0,
        Number = 1,
        Date = 2,
        Json = 3,
        NumberNullable = 4,
        DateNullable = 5,
        Decimal = 6,
        DecimalNullable = 7
    }

    public class QuotationDto
    {
        public int ValidDays { get; set; }
        public string State { get; set; }
        public decimal PartialPrice { get; set; }
        public decimal Tax { get; set; }
        public decimal FinalPrice { get; set; }
        public Guid ProductId { get; set; }
        public Guid PlanId { get; set; }
        public Guid CurrencyId { get; set; }
        public Guid PeriodId { get; set; }
        public Guid WayId { get; set; }
        public Guid TrackingId { get; set; }
        public string ProductCode { get; set; }
        public List<QuotationField> QuotationFields { get; set; }
    }

    public class QuotationField
    {
        public Guid FieldId { get; set; }
        public string Value { get; set; }
    }


}

