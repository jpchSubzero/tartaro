namespace MspAutomatization
{
    public class Aseguradora
    {
        public string NombreInstitucion { get; set; }
        public string EstadoOperacion { get; set; }
        public string CoberturaSalud { get; set; }
        public string MensajeServicioExterno { get; set; }
        public string Nombre { get; set; }
        public string TipoSeguro { get; set; }
        public string EstadoCobertura { get; set; }
        public string NUI { get; set; }
    }

    public class CoberturaSeguros
    {
        public List<Aseguradora> aseguradora { get; set; }
    }

    public class CoberturaSalud
    {
        public string CodigoMensaje { get; set; }
        public string Mensaje { get; set; }
        public CoberturaSeguros CoberturaSeguros { get; set; }
    }

    public class CoberturaPrivada
    {
        public string CodigoMensaje { get; set; }
        public object RegistrosAsegurados { get; set; }
    }

    public class Data
    {
        public CoberturaSalud coberturaSalud { get; set; }
        public CoberturaPrivada coberturaPrivada { get; set; }
        public int status { get; set; }
    }

    public class ResponseDto
    {
        public string success { get; set; }
        public Data data { get; set; }
    }

}
