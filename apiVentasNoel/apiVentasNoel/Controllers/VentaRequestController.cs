using apiVentasNoel.Data;
using apiVentasNoel.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Diagnostics;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace apiVentasNoel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VentaRequestController : ControllerBase
    {
        private readonly VentaRequestData _ventaRequestData;

        public VentaRequestController(VentaRequestData ventaRequestData)
        {
            _ventaRequestData = ventaRequestData;
        }

        [HttpPost("RegistrarVenta")]
        public async Task<ActionResult<int>> RegistrarVenta([FromBody] VentaRequest objeto)
        {
            if (string.IsNullOrEmpty(objeto.Fecha_venta) || objeto.Id_producto <= 0 || objeto.Cant <= 0)
            {
                return BadRequest("Invalid request parameters.");
            }

            var ventaId = await _ventaRequestData.RegistrarVenta(objeto);

            if (ventaId == null)
            {
                return BadRequest("Insufficient stock.");
            }

            return CreatedAtAction(nameof(RegistrarVenta), new { id = ventaId }, new { id = ventaId });
        }

        //[HttpPost]
        //public async Task<IActionResult> RegistrarVenta([FromBody] VentaRequest objeto)
        //{
        //    bool respuesta = await _ventaRequestData.RegistrarVenta(objeto);
        //   // return StatusCode(StatusCodes.Status200OK, new { isSuccess = respuesta });
        //    return CreatedAtAction(nameof(RegistrarVenta), new { id = ventaId }, new { id = ventaId });
        //}

    }
}
