namespace apiVentasNoel.Models
{
    public class Venta
    {
       
        public int IdVenta { get; set; }
        public string? Fecha_venta { get; set; }
        public int? Total { get; set; }

        public List<DetalleVenta> DetalleVentas { get; set; } = new List<DetalleVenta>();


        // public virtual ICollection<DetalleVenta> DetalleVenta { get; set; }
    }
}

