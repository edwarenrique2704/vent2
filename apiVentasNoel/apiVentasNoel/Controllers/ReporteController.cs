using apiVentasNoel.Data;
using apiVentasNoel.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace apiVentasNoel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReporteController : ControllerBase
    {
        private readonly ReporteData _reporteData;

        public ReporteController(ReporteData reporteData)
        {
            _reporteData = reporteData;
        }

        [HttpPost("ReporteVentas")]


        public async Task<ActionResult<List<Reporte>>> Report([FromBody] Reporte objeto)
        {
            if (objeto== null || string.IsNullOrEmpty(objeto.Fecha_inicio) || string.IsNullOrEmpty(objeto.Fecha_fin))
            {
                return BadRequest("Los parámetros Fecha_inicio y Fecha_fin son requeridos.");
            }

            try
            {
                var reporte = await _reporteData.Report(objeto);
                return Ok(reporte);
            }
            catch (Exception ex)
            {
                // Puedes manejar el error de manera más específica según tus necesidades
                return StatusCode(500, $"Error al obtener el reporte: {ex.Message}");
            }
        }
    }
}


        //    public async Task<ActionResult> Report([FromBody] Reporte objeto)
        //    {
        //        List<Reporte> Report = await _reporteData.Report(objeto);
        //        return StatusCode(StatusCodes.Status200OK, Report);



        //        //return Report.ToList();
        //    }
        //}
  