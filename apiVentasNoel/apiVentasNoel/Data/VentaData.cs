using apiVentasNoel.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace apiVentasNoel.Data
{
    public class VentaData
    {
        private readonly string conexion;

        public VentaData(IConfiguration configuration)
        {
            conexion = configuration.GetConnectionString("cadenaSQL")!;
        }

      

        public async Task<List<Venta>> Historial()
        {
            using (var connection = new SqlConnection(conexion))
            {
                var query = @"
                    SELECT id_venta AS IdVenta, fecha_venta AS Fecha_Venta, total AS Total
                    FROM Ventas";

                var ventas = await connection.QueryAsync<Venta>(query);
                return ventas.ToList();

            }
        }
    }
}

