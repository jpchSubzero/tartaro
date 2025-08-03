using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Security.Cryptography;

public class AesHelper
{
    public static string Encrypt(string plaintext, string passphrase)
    {
        byte[] salt = GenerateRandomSalt(8);
        DeriveKeyAndIV(passphrase, salt, 32, 16, out byte[] key, out byte[] iv);

        using (Aes aes = Aes.Create())
        {
            aes.KeySize = 256;
            aes.BlockSize = 128;
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.PKCS7;
            aes.Key = key;
            aes.IV = iv;

            byte[] encrypted;
            using (ICryptoTransform encryptor = aes.CreateEncryptor())
            {
                encrypted = encryptor.TransformFinalBlock(Encoding.UTF8.GetBytes(plaintext), 0, plaintext.Length);
            }

            byte[] saltedPrefix = Encoding.ASCII.GetBytes("Salted__");
            byte[] result = saltedPrefix.Concat(salt).Concat(encrypted).ToArray();
            return Convert.ToBase64String(result);
        }
    }

    public static string Decrypt(string ciphertextBase64, string passphrase)
    {
        byte[] raw = Convert.FromBase64String(ciphertextBase64);
        byte[] saltedPrefix = raw.Take(8).ToArray();
        if (Encoding.ASCII.GetString(saltedPrefix) != "Salted__")
            throw new Exception("Invalid ciphertext header");

        byte[] salt = raw.Skip(8).Take(8).ToArray();
        byte[] encrypted = raw.Skip(16).ToArray();

        DeriveKeyAndIV(passphrase, salt, 32, 16, out byte[] key, out byte[] iv);

        using (Aes aes = Aes.Create())
        {
            aes.KeySize = 256;
            aes.BlockSize = 128;
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.PKCS7;
            aes.Key = key;
            aes.IV = iv;

            byte[] decrypted;
            using (ICryptoTransform decryptor = aes.CreateDecryptor())
            {
                decrypted = decryptor.TransformFinalBlock(encrypted, 0, encrypted.Length);
            }

            return Encoding.UTF8.GetString(decrypted);
        }
    }

    private static void DeriveKeyAndIV(string passphrase, byte[] salt, int keySize, int ivSize, out byte[] key, out byte[] iv)
    {
        List<byte> derived = new List<byte>();
        byte[] passBytes = Encoding.UTF8.GetBytes(passphrase);
        byte[] block = new byte[0];

        using (MD5 md5 = MD5.Create())
        {
            while (derived.Count < (keySize + ivSize))
            {
                byte[] input = block.Concat(passBytes).Concat(salt).ToArray();
                block = md5.ComputeHash(input);
                derived.AddRange(block);
            }
        }

        key = derived.Take(keySize).ToArray();
        iv = derived.Skip(keySize).Take(ivSize).ToArray();
    }

    private static byte[] GenerateRandomSalt(int length)
    {
        byte[] salt = new byte[length];
        using (var rng = RandomNumberGenerator.Create())
        {
            rng.GetBytes(salt);
        }
        return salt;
    }
}
