using apiVentasNoel.Models;
using Dapper;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace apiVentasNoel.Data
{
    public class ReporteData
    {
        private readonly string conexion;

        public ReporteData(IConfiguration configuration)
        {
            conexion = configuration.GetConnectionString("cadenaSQL")!;
        }

        public async Task<List<Reporte>> Report(Reporte objeto)
        {
            using (var connection = new SqlConnection(conexion))
            {
                var parameters = new DynamicParameters();
                parameters.Add("@fecha_inicio",objeto. Fecha_inicio, DbType.String);
                parameters.Add("@fecha_fin", objeto.Fecha_fin, DbType.String);

                var reporte = await connection.QueryAsync<Reporte>(
                    "dbo.sp_Reporte_Ventas",
                    parameters,
                    commandType: CommandType.StoredProcedure
                );

                return reporte.ToList();
            }
        }
    }
}

















//using apiVentasNoel.Models;
//using Dapper;
//using System.Data.SqlClient;
//using System.Data;

//namespace apiVentasNoel.Data
//{
//    public class ReporteData
//    {
//        private readonly string conexion;

//        public ReporteData(IConfiguration configuration)
//        {
//            conexion = configuration.GetConnectionString("cadenaSQL")!;
//        }

//        public async Task<List<Reporte>> Report(Reporte objeto)
//        {
//            using (var connection = new SqlConnection(conexion))
//            {
//                var parameters = new DynamicParameters();
//                parameters.Add("@fecha_inicio", objeto.Fecha_inicio, DbType.String);
//                parameters.Add("@fecha_fin", objeto.Fecha_fin, DbType.String);


//                var reporte = await connection.querysingleordefaultasync<List>(
//                    "dbo.sp_ReporteVentas",
//                    parameters,
//                    commandtype: commandtype.storedprocedure
//                );

//                return reporte;

//            }

//        }
//    }
//}