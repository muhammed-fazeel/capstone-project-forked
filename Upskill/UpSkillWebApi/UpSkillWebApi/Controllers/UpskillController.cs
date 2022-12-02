using Microsoft.AspNetCore.Mvc;
using UpSkillWebApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UpSkillWebApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UpSkillController : ControllerBase
    {
        private readonly IDatabase dal;
        public UpSkillController(IDatabase dal)
        {
            this.dal = dal;
        }
        // GET: api/<Controller>
        [HttpGet]
        [Route("GetAllCategories")]
        public IEnumerable<Category> GetAllCategories()
        {
            return  dal.GetAllCategories();   
        }

        [HttpGet]
        [Route("GetAllCourses")]
        public IEnumerable<Course> GetAllCourses()
        {
            return dal.GetAllCourses();
        }





        // GET api/<Controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<Controller>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<Controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
