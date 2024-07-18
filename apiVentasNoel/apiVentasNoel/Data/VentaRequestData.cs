using apiVentasNoel.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace apiVentasNoel.Data
{
    public class VentaRequestData
    {
        private readonly string conexion;

        public VentaRequestData(IConfiguration configuration)
        {
            conexion = configuration.GetConnectionString("cadenaSQL")!;
        }

        public async Task<int?> RegistrarVenta(VentaRequest objeto)
        {
            using (var connection = new SqlConnection(conexion))
            {
                var parameters = new DynamicParameters();
                parameters.Add("@fecha_venta", objeto.Fecha_venta, DbType.String);
                parameters.Add("@id_producto", objeto.Id_producto, DbType.Int32);
                parameters.Add("@cant", objeto.Cant, DbType.Int32);

                var ventaId = await connection.QuerySingleOrDefaultAsync<int>(
                    "dbo.sp_RegistrarVenta",
                    parameters,
                    commandType: CommandType.StoredProcedure
                );

                return ventaId;
            }
        }




        //public async Task<bool> RegistrarVenta(VentaRequest objeto)
        //{
        //    bool respuesta = true;

        //    using (var con = new SqlConnection(conexion))
        //    {

        //        SqlCommand cmd = new SqlCommand("dbo.sp_RegistrarVenta", con);
        //        cmd.Parameters.AddWithValue("@id_producto", objeto.Id_producto);
        //        cmd.Parameters.AddWithValue("@fecha_venta", objeto.Fecha_venta);
        //        cmd.Parameters.AddWithValue("@cant", objeto.Cant);
        //        cmd.CommandType = CommandType.StoredProcedure;
        //        try
        //        {
        //            await con.OpenAsync();
        //            respuesta = await cmd.ExecuteNonQueryAsync() > 0 ? true : false;
        //        }
        //        catch
        //        {
        //            respuesta = false;
        //        }
        //    }
        //    return respuesta;
        //}
    }
}
