using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Inventory.Api.Controllers
{
    [ApiController]
    [Route("api/subscriber")]
    public class InventoryController : ControllerBase
    {

        [HttpGet]
        [Route("Get")]
        public async Task<string> Get()
        {
            
            return await Task.FromResult("sfasdfasfasdf");
        }

    }
}
