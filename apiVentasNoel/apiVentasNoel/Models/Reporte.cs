namespace apiVentasNoel.Models
{
    public class Reporte
    {
        public int id_venta { get; set; }
        public string? nombre { get; set; }
        public int precio { get; set; }
        public string? fecha_venta { get; set; }
        public int cant { get; set; }
        public int total { get; set; }
        public string? Fecha_inicio { get; set; }
        public string? Fecha_fin { get; set; }
    }
}
