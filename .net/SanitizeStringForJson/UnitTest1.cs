using FakeItEasy;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web;
using Xunit;
using Xunit.Abstractions;

namespace SanitizeStringForJson
{
    public class UnitTest1
    {
        private readonly ITestOutputHelper _output;

        public UnitTest1(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void TransferHandlesDisconnect()
        {
            var methodTester = new Mock<Transfer>(null, "", "");
            methodTester.CallBase = true;
            methodTester
                .Setup(m =>
                    m.GetFile(
                        It.IsAny<IFileConnection>(),
                        It.IsAny<string>(),
                        It.IsAny<string>()
                    ))
                .Throws(new AccessViolationException());

            try
            {
                methodTester.Object.TransferFiles("foo1", "foo2");

            }
            catch (Exception ex)
            {
                FailureLogDto failureLogDto = new();

                failureLogDto.Method = "<Transfer>gfasdfasdf" + "´";
                failureLogDto.Error = ex.Message + "''´";
                failureLogDto.Detail = ex.StackTrace + "'''´";
                failureLogDto.StateId = Guid.Parse("613aa4ed-5d7d-486d-7f0d-08d9d476ef02");

                _output.WriteLine(JsonConvert.SerializeObject(CustomSanitize(failureLogDto)));
            }
        }

        [Fact]
        public void Test1()
        {
            var fakeRepo = A.Fake<List<string>>();

            try
            {
                A.CallTo(() => fakeRepo.Add(""))
             .Throws<HttpRequestException>()
             .Once()
             .Then
             .Throws<NullReferenceException>()
             .Once()
             .Then
             .Throws<AccessViolationException>()
             .Once();

            }
            catch (Exception ex)
            {
                FailureLogDto failureLogDto = new();

                failureLogDto.Method = "<asdfasdf>gfasdfasdf";
                failureLogDto.Error = "Cannot deserialize the current JSON array /_e.g. /_1,2,3_/_/ into type /Eva.Insurtech.Sale.ChannelContact/ because the type requires a JSON object /_e.g. \"name\":\"value\"_/ to deserialize correctly.\r\nTo fix this error either change the JSON to a JSON object /_e.g. \"name\":\"value\"_/ or change the deserialized type to an array or a type that implements a collection interface /_e.g. ICollection, IList_/ like List/_T_/ that can be deserialized from a JSON array. JsonArrayAttribute can also be added to the type to force it to deserialize from a JSON array.\r\nPath /result.channelContacts.$values/, line 18, position 18.";
                failureLogDto.Detail = " at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.EnsureArrayContract/_JsonReader reader, Type objectType, JsonContract contract_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.CreateList/_JsonReader reader, Type objectType, JsonContract contract, JsonProperty member, Object existingValue, String id_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.ReadMetadataProperties/_JsonReader reader, Type& objectType, JsonContract& contract, JsonProperty member, JsonContainerContract containerContract, JsonProperty containerMember, Object existingValue, Object& newValue, String& id_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.CreateObject/_JsonReader reader, Type objectType, JsonContract contract, JsonProperty member, JsonContainerContract containerContract, JsonProperty containerMember, Object existingValue_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.CreateValueInternal/_JsonReader reader, Type objectType, JsonContract contract, JsonProperty member, JsonContainerContract containerContract, JsonProperty containerMember, Object existingValue_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.SetPropertyValue/_JsonProperty property, JsonConverter propertyConverter, JsonContainerContract containerContract, JsonProperty containerProperty, JsonReader reader, Object target_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.PopulateObject/_Object newObject, JsonReader reader, JsonObjectContract contract, JsonProperty member, String id_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.CreateObject/_JsonReader reader, Type objectType, JsonContract contract, JsonProperty member, JsonContainerContract containerContract, JsonProperty containerMember, Object existingValue_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.CreateValueInternal/_JsonReader reader, Type objectType, JsonContract contract, JsonProperty member, JsonContainerContract containerContract, JsonProperty containerMember, Object existingValue_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.SetPropertyValue/_JsonProperty property, JsonConverter propertyConverter, JsonContainerContract containerContract, JsonProperty containerProperty, JsonReader reader, Object target_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.PopulateObject/_Object newObject, JsonReader reader, JsonObjectContract contract, JsonProperty member, String id_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.CreateObject/_JsonReader reader, Type objectType, JsonContract contract, JsonProperty member, JsonContainerContract containerContract, JsonProperty containerMember, Object existingValue_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.CreateValueInternal/_JsonReader reader, Type objectType, JsonContract contract, JsonProperty member, JsonContainerContract containerContract, JsonProperty containerMember, Object existingValue_/\r\n at Newtonsoft.Json.Serialization.JsonSerializerInternalReader.Deserialize/_JsonReader reader, Type objectType, Boolean checkAdditionalContent_/\r\n at Newtonsoft.Json.JsonSerializer.DeserializeInternal/_JsonReader reader, Type objectType_/\r\n at Newtonsoft.Json.JsonSerializer.Deserialize/_JsonReader reader, Type objectType_/\r\n at Newtonsoft.Json.JsonConvert.DeserializeObject/_String value, Type type, JsonSerializerSettings settings_/\r\n at Newtonsoft.Json.JsonConvert.DeserializeObject/_T_//_String value, JsonSerializerSettings settings_/\r\n at Newtonsoft.Json.JsonConvert.DeserializeObject/_T_//_String value_/\r\n at Eva.Insurtech.Sale.ProductApiServiceManager.GetChannelAsync/_String channelCode_/ in D:\\PROYECTOS\\Grupobusiness.it\\Nova\\Codigo\\Eva.Insurtech.Sale\\src\\Eva.Insurtech.Sale.Application\\ProductApiServices\\ProductApiServiceManager.cs:line 82\r\n at Castle.DynamicProxy.AsyncInterceptorBase.ProceedAsynchronous/_TResult_//_IInvocation invocation, IInvocationProceedInfo proceedInfo_/\r\n at Volo.Abp.Castle.DynamicProxy.CastleAbpMethodInvocationAdapterWithReturnValue/1.ProceedAsync/__/\r\n at Volo.Abp.GlobalFeatures.GlobalFeatureInterceptor.InterceptAsync/_IAbpMethodInvocation invocation_/\r\n at Volo.Abp.Castle.DynamicProxy.CastleAsyncAbpInterceptorAdapter/1.InterceptAsync/_TResult_//_IInvocation invocation, IInvocationProceedInfo proceedInfo, Func/3 proceed_/\r\n at Castle.DynamicProxy.AsyncInterceptorBase.ProceedAsynchronous/_TResult_//_IInvocation invocation, IInvocationProceedInfo proceedInfo_/\r\n at Volo.Abp.Castle.DynamicProxy.CastleAbpMethodInvocationAdapterWithReturnValue/1.ProceedAsync/__/\r\n at Volo.Abp.Validation.ValidationInterceptor.InterceptAsync/_IAbpMethodInvocation invocation_/\r\n at Volo.Abp.Castle.DynamicProxy.CastleAsyncAbpInterceptorAdapter/1.InterceptAsync/_TResult_//_IInvocation invocation, IInvocationProceedInfo proceedInfo, Func/3 proceed_/\r\n at Castle.DynamicProxy.AsyncInterceptorBase.ProceedAsynchronous/_TResult_//_IInvocation invocation, IInvocationProceedInfo proceedInfo_/\r\n at Volo.Abp.Castle.DynamicProxy.CastleAbpMethodInvocationAdapterWithReturnValue/1.ProceedAsync/__/\r\n at Volo.Abp.Auditing.AuditingInterceptor.ProceedByLoggingAsync/_IAbpMethodInvocation invocation, IAuditingHelper auditingHelper, IAuditLogScope auditLogScope_/\r\n at Volo.Abp.Auditing.AuditingInterceptor.InterceptAsync/_IAbpMethodInvocation invocation_/\r\n at Volo.Abp.Castle.DynamicProxy.CastleAsyncAbpInterceptorAdapter/1.InterceptAsync/_TResult_//_IInvocation invocation, IInvocationProceedInfo proceedInfo, Func/3 proceed_/\r\n at Castle.DynamicProxy.AsyncInterceptorBase.ProceedAsynchronous/_TResult_//_IInvocation invocation, IInvocationProceedInfo proceedInfo_/\r\n at Volo.Abp.Castle.DynamicProxy.CastleAbpMethodInvocationAdapterWithReturnValue/1.ProceedAsync/__/\r\n at Volo.Abp.Uow.UnitOfWorkInterceptor.InterceptAsync/_IAbpMethodInvocation invocation_/\r\n at Volo.Abp.Castle.DynamicProxy.CastleAsyncAbpInterceptorAdapter/1.InterceptAsync/_TResult_//_IInvocation invocation, IInvocationProceedInfo proceedInfo, Func/3 proceed_/\r\n at Eva.Insurtech.Sale.SaleAppService.SetPriceValuesFromProductAsync/_SaleInput entityInput, RegisterSaleDto input_/ in D:\\PROYECTOS\\Grupobusiness.it\\Nova\\Codigo\\Eva.Insurtech.Sale\\src\\Eva.Insurtech.Sale.Application\\Sale\\SaleAppService.cs:line 232\r\n at Eva.Insurtech.Sale.SaleAppService.RegisterSaleAsync/_RegisterSaleDto input_/ in D:\\PROYECTOS\\Grupobusiness.it\\Nova\\Codigo\\Eva.Insurtech.Sale\\src\\Eva.Insurtech.Sale.Application\\Sale\\SaleAppService.cs:line 145";
                failureLogDto.StateId = Guid.Parse("613aa4ed-5d7d-486d-7f0d-08d9d476ef02");

                failureLogDto = CustomSanitize(failureLogDto);
                _output.WriteLine(JsonConvert.SerializeObject(failureLogDto));
            }
        }

        private T CustomSanitize<T>(T objectToSanitize)
        {
            var textFromObject = JsonConvert.SerializeObject(objectToSanitize);

            Dictionary<string, string> restricteds = new();

            restricteds.Add("\\\"", "");
            restricteds.Add("\\r", "");
            restricteds.Add("\\n", "");
            restricteds.Add("/", " "); 
            restricteds.Add("(", " "); 
            restricteds.Add(")", " "); 
            restricteds.Add("[", " "); 
            restricteds.Add("]", " "); 
            restricteds.Add("<", " "); 
            restricteds.Add(">", " "); 
            restricteds.Add("`", " "); 
            restricteds.Add("'", " ");
            restricteds.Add("---", " ");


            foreach (KeyValuePair<string, string> restricted in restricteds)
            {
                textFromObject = textFromObject.Replace(restricted.Key, restricted.Value);
            }

            return JsonConvert.DeserializeObject<T>(textFromObject);
        }

    }

    public class FailureLogDto
    {
        public string Method { get; set; }
        public string Error { get; set; }
        public string Detail { get; set; }
        public Guid StateId { get; set; }
    }

    public class Transfer
    {
        public virtual String source { get; set; }
        public virtual String destination { get; set; }

        public Transfer(IFileConnection connection, string remoteFilename, string localFilename)
        {
        }

        public virtual void GetFile(IFileConnection connection,string remoteFilename, string localFilename)
        {
            connection.Get(remoteFilename, localFilename);
        }

        public virtual void PutFile(IFileConnection connection,string localFilename, string remoteFilename)
        {
            connection.Get(remoteFilename, localFilename);
        }

        public virtual void TransferFiles(string sourceName, string destName)
        {
            var tempName = Path.GetTempFileName();
            GetFile(null, sourceName, tempName);
            PutFile(null, tempName, destName);
        }
    }

    public interface IFileConnection
    {
        void Get(string remoteFileName, string localFileName);
        void Put(string localFileName, string remoteFileName);
    }


}
