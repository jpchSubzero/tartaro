using FakeItEasy;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text.RegularExpressions;
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

                failureLogDto.Method = "<Transfer>gfasdfasdf";
                failureLogDto.Error = ex.Message;
                failureLogDto.Detail = ex.StackTrace;
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
                failureLogDto.Error = ex.Message;
                failureLogDto.Detail = ex.StackTrace;
                failureLogDto.StateId = Guid.Parse("613aa4ed-5d7d-486d-7f0d-08d9d476ef02");

                failureLogDto = CustomSanitize(failureLogDto);
                _output.WriteLine(JsonConvert.SerializeObject(failureLogDto));
            }
        }

        private T CustomSanitize<T>(T objectToSanitize)
        {
            var textFromObject = JsonConvert.SerializeObject(objectToSanitize);

            Dictionary<string, string> restricteds = new();
            restricteds.Add("(", "[");
            restricteds.Add(")", "]");
            restricteds.Add("<", "[");
            restricteds.Add(">", "]");
            restricteds.Add("`", "'");

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
