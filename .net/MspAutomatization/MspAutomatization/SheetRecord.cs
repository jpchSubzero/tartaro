namespace MspAutomatization
{
    public class SheetRecord
    {
        public string Cedula { get; set; }
        public string Fecha { get; set; }
        public string Orden { get; set; }
    }

    public class ExcelData
    {
        public List<SheetRecord> SG { get; set; } = new();
        public List<SheetRecord> SG_ODO { get; set; } = new();
        public List<SheetRecord> ISSFA { get; set; } = new();
        public List<SheetRecord> ISSPOL { get; set; } = new();
        public List<SheetRecord> C_MED { get; set; } = new();
        public List<SheetRecord> C_ODO { get; set; } = new();
    }
}
