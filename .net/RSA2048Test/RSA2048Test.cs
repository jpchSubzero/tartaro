using System;
using System.IO;
using System.IO.Compression;
using System.Security.Cryptography;
using System.Text;
using Xunit;
using Xunit.Abstractions;

namespace RSA2048Test
{
    public class RSA2048Test
    {
        /// <summary>
        /// Url de encriptación online: https://www.devglan.com/online-tools/rsa-encryption-decryption
        /// </summary>
        private readonly ITestOutputHelper _output;

        public RSA2048Test(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void Test1()
        {
            //lets take a new CSP with a new 2048 bit rsa key pair
            var csp = new RSACryptoServiceProvider(2048);

            //how to get the private key
            var privKey = csp.ExportParameters(true);

            //and the public key ...
            var pubKey = csp.ExportParameters(false);

            //converting the public key into a string representation
            string pubKeyString = ConvertRSAKeyToString(pubKey);

            //converting it back
            pubKey = ConvertStringToRSAKey(pubKeyString);

            //conversion for the private key is no black magic either ... omitted

            //we have a public key ... let's get a new csp and load that key
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(pubKey);

            //we need some data to encrypt
            var plainTextData = "82592564-40d6-e6bf-2d42-3a017bffe69c";

            //var plainTextData = "{\"TransactionReference\":\"82592564-40d6-e6bf-2d42-3a017bffe69c\",\"NumberCard\":\"5451951574925480\",\"Identification\":\"1103533095\",\"IdentificationType\":\"CEDULA\",\"HomePhone\":\"072579999\",\"WorkPhone\":\"072579999\",\"CellPhone\":\"0999999999\",\"Email\":\"software@bocetosoft.com\",\"Brand\":\"MASTERCARD\",\"City\":\"LOJA/LOJA\",\"Address\":\"Calle principal 123456 y secundaria\",\"FirstName\":\"Manuel\",\"SecondName\":\"José\",\"FirsLastName\":\"Prieto\",\"SecondLastName\":\"Sous\",\"Gender\":\"MASCULINO\",\"CivilStatus\":\"CASADO\",\"DateBirth\":\"1978-10-25T00:00:00\",\"Income\":11000.0,\"Patrimony\":500000.0,\"EconomicActivity\":\"N821100\"}";

            _output.WriteLine($"{plainTextData.Length} caracteres");

            //for encryption, always handle bytes...
            var bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(plainTextData);

            //apply pkcs#1.5 padding and encrypt our data 
            var bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

            //we might want a string representation of our cypher text... base64 will do
            var cypherText = Convert.ToBase64String(bytesCypherText);


            /*
                * some transmission / storage / retrieval
                * 
                * and we want to decrypt our cypherText
                */

            //first, get our bytes back from the base64 string ...
            bytesCypherText = Convert.FromBase64String(cypherText);

            //we want to decrypt, therefore we need a csp and load our private key
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(privKey);

            //decrypt and strip pkcs#1.5 padding
            bytesPlainTextData = csp.Decrypt(bytesCypherText, false);

            //get our original plainText back...
            var plainTextDataDecrypted = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

            _output.WriteLine(plainTextData);

            Assert.Equal(plainTextData, plainTextDataDecrypted);
        }

        [Fact]
        public void Test2()
        {
            try
            {       //initialze the byte arrays to the public key information.
                byte[] PublicKey = {214,46,220,83,160,73,40,39,201,155,19,202,3,11,191,178,56,
                                   74,90,36,248,103,18,144,170,163,145,87,54,61,34,220,222,
                                   207,137,149,173,14,92,120,206,222,158,28,40,24,30,16,175,
                                   108,128,35,230,118,40,121,113,125,216,130,11,24,90,48,194,
                                   240,105,44,76,34,57,249,228,125,80,38,9,136,29,117,207,139,
                                   168,181,85,137,126,10,126,242,120,247,121,8,100,12,201,171,
                                   38,226,193,180,190,117,177,87,143,242,213,11,44,180,113,93,
                                   106,99,179,68,175,211,164,116,64,148,226,254,172,147};

                byte[] Exponent = { 1, 0, 1 };

                //Values to store encrypted symmetric keys.
                byte[] EncryptedSymmetricKey;
                byte[] EncryptedSymmetricIV;

                //Create a new instance of RSACryptoServiceProvider.
                RSACryptoServiceProvider RSA = new RSACryptoServiceProvider();

                //Create a new instance of RSAParameters.
                RSAParameters RSAKeyInfo = new RSAParameters();

                //Set RSAKeyInfo to the public key values. 
                RSAKeyInfo.Modulus = PublicKey;
                RSAKeyInfo.Exponent = Exponent;

                //Import key parameters into RSA.
                RSA.ImportParameters(RSAKeyInfo);

                //Create a new instance of the Aes class.
                Aes aes = Aes.Create();

                //Encrypt the symmetric key and IV.
                EncryptedSymmetricKey = RSA.Encrypt(aes.Key, false);
                EncryptedSymmetricIV = RSA.Encrypt(aes.IV, false);
                //_output.WriteLine("Aes Key and IV have been encrypted with RSACryptoServiceProvider.");

                var cypherText = Convert.ToBase64String(EncryptedSymmetricKey);

                _output.WriteLine(cypherText);

                var plainTextData = "df1lasdjfa2lsdjfals3djfasdlfj";
                var bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(plainTextData);

                var enc = RSA.Encrypt(bytesPlainTextData, false);
                _output.WriteLine(Convert.ToBase64String(enc));

                RSA = new RSACryptoServiceProvider();
                RSAKeyInfo = new RSAParameters();
                RSAKeyInfo.Modulus = PublicKey;
                RSAKeyInfo.Exponent = Exponent;
                RSA.ImportParameters(RSAKeyInfo);

                //decrypt and strip pkcs#1.5 padding
                bytesPlainTextData = RSA.Decrypt(enc, false);

                //get our original plainText back...
                var plainTextDataDecrypted = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

                _output.WriteLine(plainTextData);

                Assert.Equal(plainTextData, plainTextDataDecrypted);

            }
            //Catch and display a CryptographicException  
            //to the console.
            catch (CryptographicException e)
            {
                _output.WriteLine(e.Message);

            }
        }

        [Fact]
        public void Compressing()
        {
            var uncompressedString = "{\"TransactionReference\":\"82592564-40d6-e6bf-2d42-3a017bffe69c\",\"NumberCard\":\"5451951574925480\",\"Identification\":\"1103533095\",\"IdentificationType\":\"CEDULA\",\"HomePhone\":\"072579999\",\"WorkPhone\":\"072579999\",\"CellPhone\":\"0999999999\",\"Email\":\"software@bocetosoft.com\",\"Brand\":\"MASTERCARD\",\"City\":\"LOJA/LOJA\",\"Address\":\"Calle principal 123456 y secundaria\",\"FirstName\":\"Manuel\",\"SecondName\":\"José\",\"FirsLastName\":\"Prieto\",\"SecondLastName\":\"Sous\",\"Gender\":\"MASCULINO\",\"CivilStatus\":\"CASADO\",\"DateBirth\":\"1978-10-25T00:00:00\",\"Income\":11000.0,\"Patrimony\":500000.0,\"EconomicActivity\":\"N821100\"}";

            var compressedString = Compress(uncompressedString);

            var decompressedString = Decompress(compressedString);

            _output.WriteLine($"Normal: {uncompressedString}, {uncompressedString.Length} caracteres");
            _output.WriteLine($"Comprimido: {compressedString}, {compressedString.Length} caracteres");
            _output.WriteLine($"Descomprimido: {decompressedString}, {decompressedString.Length} caracteres");

            Assert.Equal(uncompressedString, decompressedString);

            uncompressedString = "eyJUcmFuc2FjdGlvblJlZmVyZW5jZSI6IjgyNTkyNTY0LTQwZDYtZTZiZi0yZDQyLTNhMDE3YmZmZTY5YyIsIk51bWJlckNhcmQiOiI1NDUxOTUxNTc0OTI1NDgwIiwiSWRlbnRpZmljYXRpb24iOiIxMTAzNTMzMDk1IiwiSWRlbnRpZmljYXRpb25UeXBlIjoiQ0VEVUxBIiwiSG9tZVBob25lIjoiMDcyNTc5OTk5IiwiV29ya1Bob25lIjoiMDcyNTc5OTk5IiwiQ2VsbFBob25lIjoiMDk5OTk5OTk5OSIsIkVtYWlsIjoic29mdHdhcmVAYm9jZXRvc29mdC5jb20iLCJCcmFuZCI6Ik1BU1RFUkNBUkQiLCJDaXR5IjoiTE9KQS9MT0pBIiwiQWRkcmVzcyI6IkNhbGxlIHByaW5jaXBhbCAxMjM0NTYgeSBzZWN1bmRhcmlhIiwiRmlyc3ROYW1lIjoiTWFudWVsIiwiU2Vjb25kTmFtZSI6Ikpvc8OpIiwiRmlyc0xhc3ROYW1lIjoiUHJpZXRvIiwiU2Vjb25kTGFzdE5hbWUiOiJTb3VzIiwiR2VuZGVyIjoiTUFTQ1VMSU5PIiwiQ2l2aWxTdGF0dXMiOiJDQVNBRE8iLCJEYXRlQmlydGgiOiIxOTc4LTEwLTI1VDAwOjAwOjAwIiwiSW5jb21lIjoxMTAwMC4wLCJQYXRyaW1vbnkiOjUwMDAwMC4wLCJFY29ub21pY0FjdGl2aXR5IjoiTjgyMTEwMCJ9";

            compressedString = Compress(uncompressedString);

            decompressedString = Decompress(compressedString);

            _output.WriteLine($"Normal: {uncompressedString}, {uncompressedString.Length} caracteres");
            _output.WriteLine($"Comprimido: {compressedString}, {compressedString.Length} caracteres");
            _output.WriteLine($"Descomprimido: {decompressedString}, {decompressedString.Length} caracteres");

            Assert.Equal(uncompressedString, decompressedString);
        }

        [Fact]
        public void ValidateMaxStringEncriptedLengthFor2048()
        {
            var csp = new RSACryptoServiceProvider(2048);
            var privKey = csp.ExportParameters(true);
            var pubKey = csp.ExportParameters(false);
            string pubKeyString = ConvertRSAKeyToString(pubKey);
            pubKey = ConvertStringToRSAKey(pubKeyString);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(pubKey);
            var plainTextData = "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
            var bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(plainTextData);

            var bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

            var noException = true;
            while (noException)
            {
                try
                {
                    string tempPlainTextData = plainTextData + "Z";

                    bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(tempPlainTextData);
                    bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

                    plainTextData = tempPlainTextData;
                }
                catch (Exception ex)
                {
                    noException = false;
                }
            }

            var cypherText = Convert.ToBase64String(bytesCypherText);
            bytesCypherText = Convert.FromBase64String(cypherText);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(privKey);
            bytesPlainTextData = csp.Decrypt(bytesCypherText, false);
            var plainTextDataDecrypted = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

            _output.WriteLine($"{plainTextData.Length} caracteres");
            _output.WriteLine(plainTextData);
            Assert.Equal(plainTextData, plainTextDataDecrypted);
        }

        [Fact]
        public void ValidateMaxStringEncriptedLengthFor4096()
        {
            var csp = new RSACryptoServiceProvider(4096);
            var privKey = csp.ExportParameters(true);
            var pubKey = csp.ExportParameters(false);
            string pubKeyString = ConvertRSAKeyToString(pubKey);
            pubKey = ConvertStringToRSAKey(pubKeyString);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(pubKey);
            var plainTextData = "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
            var bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(plainTextData);

            var bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

            var noException = true;
            while (noException)
            {
                try
                {
                    string tempPlainTextData = plainTextData + "Z";

                    bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(tempPlainTextData);
                    bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

                    plainTextData = tempPlainTextData;
                }
                catch (Exception ex)
                {
                    noException = false;
                }
            }

            var cypherText = Convert.ToBase64String(bytesCypherText);
            bytesCypherText = Convert.FromBase64String(cypherText);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(privKey);
            bytesPlainTextData = csp.Decrypt(bytesCypherText, false);
            var plainTextDataDecrypted = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

            _output.WriteLine($"{plainTextData.Length} caracteres");
            _output.WriteLine(plainTextData);
            Assert.Equal(plainTextData, plainTextDataDecrypted);
        }

        [Fact]
        public void ValidateMaxStringEncriptedLengthFor8192()
        {
            var csp = new RSACryptoServiceProvider(8192);
            var privKey = csp.ExportParameters(true);
            var pubKey = csp.ExportParameters(false);
            string pubKeyString = ConvertRSAKeyToString(pubKey);
            pubKey = ConvertStringToRSAKey(pubKeyString);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(pubKey);
            var plainTextData = "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
            var bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(plainTextData);

            var bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

            var noException = true;
            while (noException)
            {
                try
                {
                    string tempPlainTextData = plainTextData + "Z";

                    bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(tempPlainTextData);
                    bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

                    plainTextData = tempPlainTextData;
                }
                catch (Exception ex)
                {
                    noException = false;
                }
            }

            var cypherText = Convert.ToBase64String(bytesCypherText);
            bytesCypherText = Convert.FromBase64String(cypherText);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(privKey);
            bytesPlainTextData = csp.Decrypt(bytesCypherText, false);
            var plainTextDataDecrypted = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

            _output.WriteLine($"{plainTextData.Length} caracteres");
            _output.WriteLine(plainTextData);
            Assert.Equal(plainTextData, plainTextDataDecrypted);
        }

        [Fact]
        public void ValidateMaxStringEncriptedLengthFor12288()
        {
            var csp = new RSACryptoServiceProvider(12288);
            var privKey = csp.ExportParameters(true);
            var pubKey = csp.ExportParameters(false);
            string pubKeyString = ConvertRSAKeyToString(pubKey);
            pubKey = ConvertStringToRSAKey(pubKeyString);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(pubKey);
            var plainTextData = "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
            var bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(plainTextData);

            var bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

            var noException = true;
            while (noException)
            {
                try
                {
                    string tempPlainTextData = plainTextData + "Z";

                    bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(tempPlainTextData);
                    bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

                    plainTextData = tempPlainTextData;
                }
                catch (Exception ex)
                {
                    noException = false;
                }
            }

            var cypherText = Convert.ToBase64String(bytesCypherText);
            bytesCypherText = Convert.FromBase64String(cypherText);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(privKey);
            bytesPlainTextData = csp.Decrypt(bytesCypherText, false);
            var plainTextDataDecrypted = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

            _output.WriteLine($"{plainTextData.Length} caracteres");
            _output.WriteLine(plainTextData);
            Assert.Equal(plainTextData, plainTextDataDecrypted);
        }

        [Fact]
        public void ValidateMaxStringEncriptedLengthFor16384()
        {
            var csp = new RSACryptoServiceProvider(16384);
            var privKey = csp.ExportParameters(true);
            var pubKey = csp.ExportParameters(false);
            string pubKeyString = ConvertRSAKeyToString(pubKey);
            pubKey = ConvertStringToRSAKey(pubKeyString);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(pubKey);
            var plainTextData = "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
            var bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(plainTextData);

            var bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

            var noException = true;
            while (noException)
            {
                try
                {
                    string tempPlainTextData = plainTextData + "Z";

                    bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(tempPlainTextData);
                    bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

                    plainTextData = tempPlainTextData;
                }
                catch (Exception ex)
                {
                    noException = false;
                }
            }

            var cypherText = Convert.ToBase64String(bytesCypherText);
            bytesCypherText = Convert.FromBase64String(cypherText);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(privKey);
            bytesPlainTextData = csp.Decrypt(bytesCypherText, false);
            var plainTextDataDecrypted = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

            _output.WriteLine($"{plainTextData.Length} caracteres");
            _output.WriteLine(plainTextData);
            Assert.Equal(plainTextData, plainTextDataDecrypted);
        }

        [Fact]
        public void RSA12288WithCompressedString()
        {
            var csp = new RSACryptoServiceProvider(12288);
            var privKey = csp.ExportParameters(true);
            var pubKey = csp.ExportParameters(false);

            string pubKeyString = ConvertRSAKeyToString(pubKey);
            string priKeyString = ConvertRSAKeyToString(privKey);

            pubKey = ConvertStringToRSAKey(pubKeyString);
            privKey = ConvertStringToRSAKey(priKeyString);

            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(pubKey);
            var plainTextData = "{\"TransactionReference\":\"82592564-40d6-e6bf-2d42-3a017bffe69c\",\"NumberCard\":\"5451951574925480\",\"Identification\":\"1103533095\",\"IdentificationType\":\"CEDULA\",\"HomePhone\":\"072579999\",\"WorkPhone\":\"072579999\",\"CellPhone\":\"0999999999\",\"Email\":\"software@bocetosoft.com\",\"Brand\":\"MASTERCARD\",\"City\":\"LOJA/LOJA\",\"Address\":\"Calle principal 123456 y secundaria\",\"FirstName\":\"Manuel\",\"SecondName\":\"José\",\"FirsLastName\":\"Prieto\",\"SecondLastName\":\"Sous\",\"Gender\":\"MASCULINO\",\"CivilStatus\":\"CASADO\",\"DateBirth\":\"1978-10-25T00:00:00\",\"Income\":11000.0,\"Patrimony\":500000.0,\"EconomicActivity\":\"N821100\"}";

            _output.WriteLine(plainTextData);

            var compressedString = Compress(plainTextData);

            var bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(compressedString);

            var bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

            var cypherText = Convert.ToBase64String(bytesCypherText);
            bytesCypherText = Convert.FromBase64String(cypherText);
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(privKey);
            bytesPlainTextData = csp.Decrypt(bytesCypherText, false);
            var plainTextDataDecrypted = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

            var decompressedString = Decompress(plainTextDataDecrypted);

            _output.WriteLine(decompressedString);
            Assert.Equal(plainTextData, decompressedString);
        }


        #region Private Methods

        /// <summary>
        /// Convertir en string una llave RSA
        /// </summary>
        /// <param name="pubKey"></param>
        /// <returns></returns>
        private static string ConvertRSAKeyToString(RSAParameters pubKey)
        {
            string pubKeyString;
            var sw = new StringWriter();
            var xs = new System.Xml.Serialization.XmlSerializer(typeof(RSAParameters));
            xs.Serialize(sw, pubKey);
            pubKeyString = sw.ToString();
            return pubKeyString;
        }

        /// <summary>
        /// Convertir en laave RSA un string
        /// </summary>
        /// <param name="pubKeyString"></param>
        /// <returns></returns>
        private static RSAParameters ConvertStringToRSAKey(string pubKeyString)
        {
            RSAParameters pubKey;
            var sr = new StringReader(pubKeyString);
            var xs = new System.Xml.Serialization.XmlSerializer(typeof(RSAParameters));
            pubKey = (RSAParameters)xs.Deserialize(sr);
            return pubKey;
        }


        private static string Compress(string uncompressedString)
        {
            byte[] compressedBytes;
            using (var uncompressedStream = new MemoryStream(Encoding.UTF8.GetBytes(uncompressedString)))
            {
                using (var compressedStream = new MemoryStream())
                {
                    using (var compressorStream = new DeflateStream(compressedStream, CompressionLevel.Fastest, true))
                    {
                        uncompressedStream.CopyTo(compressorStream);
                    }

                    compressedBytes = compressedStream.ToArray();
                }
            }

            return Convert.ToBase64String(compressedBytes);
        }

        private static string Decompress(string compressedString)
        {
            byte[] decompressedBytes;
            var compressedStream = new MemoryStream(Convert.FromBase64String(compressedString));
            using (var decompressorStream = new DeflateStream(compressedStream, CompressionMode.Decompress))
            {
                using (var decompressedStream = new MemoryStream())
                {
                    decompressorStream.CopyTo(decompressedStream);
                    decompressedBytes = decompressedStream.ToArray();
                }
            }

            return Encoding.UTF8.GetString(decompressedBytes);
        }


        #endregion    
    }
}
