using System;
using System.Security.Cryptography;
using Xunit;
using Xunit.Abstractions;

namespace RSA2048Test
{
    public class UnitTest1
    {
        private readonly ITestOutputHelper _output;

        public UnitTest1(ITestOutputHelper output)
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
            string pubKeyString = GetPublicKeyString(pubKey);

            //converting it back
            pubKey = GetPublicKey(pubKeyString);

            //conversion for the private key is no black magic either ... omitted

            //we have a public key ... let's get a new csp and load that key
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(pubKey);

            //we need some data to encrypt
            var plainTextData = "82592564-40d6-e6bf-2d42-3a017bffe69c";

            //var plainTextData = "\"TransactionReference\":\"82592564-40d6-e6bf-2d42-3a017bffe69c\",\"NumberCard\":\"5451951574925480\",\"Identification\":\"1103533095\",\"IdentificationType\":\"CEDULA\",\"HomePhone\":\"072579999\",\"WorkPhone\":\"072579999\",\"CellPhone\":\"0999999999\",\"Email\":\"software@bocetosoft.com\",\"Brand\":\"MASTERCARD\",\"City\":\"LOJA/LOJA\",\"Address\":\"Calle principal 123456 y secundaria\",\"FirstName\":\"Manuel\",\"SecondName\":\"José\",\"FirsLastName\":\"Prieto\",\"SecondLastName\":\"Sous\",\"Gender\":\"MASCULINO\",\"CivilStatus\":\"CASADO\",\"DateBirth\":\"1978-10-25T00:00:00\",\"Income\":11000.0,\"Patrimony\":500000.0,\"EconomicActivity\":\"N821100\"}";

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
            plainTextData = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

            _output.WriteLine(plainTextData);
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
                plainTextData = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);

                _output.WriteLine(plainTextData);


            }
            //Catch and display a CryptographicException  
            //to the console.
            catch (CryptographicException e)
            {
                _output.WriteLine(e.Message);

            }
        }

        private static RSAParameters GetPublicKey(string pubKeyString)
        {
            RSAParameters pubKey;
            //get a stream from the string
            var sr = new System.IO.StringReader(pubKeyString);
            //we need a deserializer
            var xs = new System.Xml.Serialization.XmlSerializer(typeof(RSAParameters));
            //get the object back from the stream
            pubKey = (RSAParameters)xs.Deserialize(sr);
            return pubKey;
        }

        private static string GetPublicKeyString(RSAParameters pubKey)
        {
            string pubKeyString;
            //we need some buffer
            var sw = new System.IO.StringWriter();
            //we need a serializer
            var xs = new System.Xml.Serialization.XmlSerializer(typeof(RSAParameters));
            //serialize the key into the stream
            xs.Serialize(sw, pubKey);
            //get the string from the stream
            pubKeyString = sw.ToString();
            return pubKeyString;
        }
    }
}
