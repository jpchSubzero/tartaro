public class FileHelper
{
    public static void MoveFile(string sourcePath, string destinationFolder)
    {
        if (string.IsNullOrWhiteSpace(sourcePath) || string.IsNullOrWhiteSpace(destinationFolder))
            throw new ArgumentException("Source path and destination folder must be valid.");

        if (!File.Exists(sourcePath))
            throw new FileNotFoundException("Source file not found.", sourcePath);

        if (!Directory.Exists(destinationFolder))
            Directory.CreateDirectory(destinationFolder);

        string fileName = Path.GetFileName(sourcePath);
        string destinationPath = Path.Combine(destinationFolder, fileName);

        File.Move(sourcePath, destinationPath);
        Console.WriteLine($"Moved file to: {destinationPath}");
    }

    public static bool FileExists(string filePrefixWithPath)
    {
        if (string.IsNullOrWhiteSpace(filePrefixWithPath))
            throw new ArgumentException("File prefix path must be a non-empty string.", nameof(filePrefixWithPath));

        string directory = Path.GetDirectoryName(filePrefixWithPath);
        string prefix = Path.GetFileName(filePrefixWithPath);

        if (string.IsNullOrWhiteSpace(directory) || string.IsNullOrWhiteSpace(prefix))
            throw new ArgumentException("Invalid path or prefix format.");

        // Buscar archivos que comiencen con el prefijo
        var matchingFiles = Directory.EnumerateFiles(directory, $"{prefix}*");

        return matchingFiles.Any();
    }

    //public static bool FileExists(string filePath)
    //{
    //    if (string.IsNullOrWhiteSpace(filePath))
    //        throw new ArgumentException("File path must be a non-empty string.", nameof(filePath));

    //    return File.Exists(filePath);
    //}
}
