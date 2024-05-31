using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public  IActionResult Get()
        {
            return new JsonResult("hello world");
        }
    }
}
