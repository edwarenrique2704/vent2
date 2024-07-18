using apiVentasNoel.Data;
using apiVentasNoel.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace apiVentasNoel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VentaController : ControllerBase
    {
        private readonly VentaData _ventaData;

        public VentaController(VentaData ventaData)
        {
            _ventaData = ventaData;
        }

        // GET: api/Venta
        [HttpGet]
        public async Task<ActionResult<List<Venta>>> Historial()
        {
            var historial = await _ventaData.Historial();
            return Ok(historial);
        }

        // POST: api/Venta
        //[HttpPost]
        //public async Task<ActionResult<int>> RegistrarVenta(string fecha_venta, int id_producto, int cant)
        //{
        //    if (string.IsNullOrEmpty(fecha_venta) || id_producto <= 0 || cant <= 0)
        //    {
        //        return BadRequest("Invalid request parameters.");
        //    }

        //    var ventaId = await _ventaData.RegistrarVenta(fecha_venta, id_producto, cant);

        //    if (ventaId == null)
        //    {
        //        return BadRequest("Insufficient stock.");
        //    }

        //    return CreatedAtAction(nameof(RegistrarVenta), new { id = ventaId }, new { id = ventaId });
        //}




    }
}
