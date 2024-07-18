using apiVentasNoel.Models;
using System.Data.SqlClient;
using System.Data;

namespace apiVentasNoel.Data
{
    public class DetalleVentaData
    {

        
    }
}



/*
foreach (var detalle in venta.DetalleVentas)
{
    SqlCommand cmdDetalle = new SqlCommand("sp_RegistrarDetalleVenta", con);
    cmdDetalle.CommandType = CommandType.StoredProcedure;
    cmdDetalle.Parameters.AddWithValue("@id_venta", venta.IdVenta);
    cmdDetalle.Parameters.AddWithValue("@id_producto", detalle.IdProducto);
    cmdDetalle.Parameters.AddWithValue("@cant", detalle.Cant);
    await cmdDetalle.ExecuteNonQueryAsync();
}
*/
            
