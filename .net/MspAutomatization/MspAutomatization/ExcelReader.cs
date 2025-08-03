using MspAutomatization;
using OfficeOpenXml;
using System.ComponentModel;
using System.Globalization;

public static class ExcelReader
{
    public static ExcelData ReadExcelFile(string filePath)
    {
        ExcelPackage.LicenseContext = OfficeOpenXml.LicenseContext.NonCommercial;

        var excelData = new ExcelData();
        var sheetMap = new Dictionary<string, List<SheetRecord>>()
        {
            ["SG"] = excelData.SG,
            ["SG-ODO"] = excelData.SG_ODO,
            ["ISSFA"] = excelData.ISSFA,
            ["ISSPOL"] = excelData.ISSPOL,
            ["C-MED"] = excelData.C_MED,
            ["C-ODO"] = excelData.C_ODO
        };

        using var package = new ExcelPackage(new FileInfo(filePath));

        foreach (var sheetEntry in sheetMap)
        {
            var sheet = package.Workbook.Worksheets[sheetEntry.Key];
            if (sheet == null) continue;

            var records = new List<SheetRecord>();
            var seenKeys = new HashSet<string>();

            for (int row = 2; row <= sheet.Dimension.End.Row; row++) // Assuming headers are on row 1
            {
                string cedula = sheet.Cells[row, 1].Text?.Trim();
                string fechaStr = sheet.Cells[row, 2].Text?.Trim();
                string orden = sheet.Cells[row, 3].Text?.Trim();

                if (string.IsNullOrWhiteSpace(cedula) || string.IsNullOrWhiteSpace(fechaStr) || string.IsNullOrWhiteSpace(orden))
                    continue;

                if (!DateTime.TryParse(fechaStr, CultureInfo.CurrentCulture, DateTimeStyles.None, out var fecha))
                    continue;

                string uniqueKey = $"{sheetEntry.Key}|{cedula}|{fecha:yyyy-MM-dd}";

                if (seenKeys.Contains(uniqueKey))
                    continue;

                seenKeys.Add(uniqueKey);
                records.Add(new SheetRecord
                {
                    Cedula = cedula.Length < 10 ? $"0{cedula}" : cedula,
                    Fecha = fecha.ToString("dd-MM-yyyy", CultureInfo.InvariantCulture),
                    Orden = orden
                });
            }

            sheetEntry.Value.AddRange(records);
        }

        return excelData;
    }
}
