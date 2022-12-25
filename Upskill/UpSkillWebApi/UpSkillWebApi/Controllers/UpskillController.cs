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
        public List<Category> GetAllCategories()
        {
            return dal.GetAllCategories();
        }

        [HttpGet]
        [Route("GetAllCourses")]
        public IEnumerable<Course> GetAllCourses()
        {
            return dal.GetAllCourses();
        }

        [HttpPost]
        [Route("AddCourse")]
        public void AddCourse(Course course)
        {
            dal.AddCourse(course);
        }

        [HttpGet]
        [Route("GetCourse/{id:int}")]
        public Course GetCourse(int id)
        {
            return dal.GetCourse(id);
        }

        [HttpGet]
        [Route("GetCoursesByCategoryId/{id:int}")]
        public List<Course> GetCoursesByCategory(int id)
        {
            return dal.GetCoursesByCategory(id);
        }

        //Category

        [HttpPost]
        [Route("AddCategory")]
        public void AddCategory(Category category)
        {
            dal.AddCategory(category);
        }

        //reviews

        [HttpPost]
        [Route("AddReview")]
        public void AddReview(Review review)
        {
            dal.AddReview(review);
        }

        [HttpGet]
        [Route("GetReviews/{CourseId}")]
        public List<Review> GetReviews(int CourseId)
        {
            return dal.GetReviews(CourseId);
        }

        //videolinks
        [HttpGet]
        [Route("GetVideos/{id}")]
        public List<VideoLinks> GetVideos(int id)
        {
            return dal.GetVideoLinksByCourseId(id);
        }

        [HttpPost]
        [Route("AddVideo")]
        public void AddVideo(VideoLinks video)
        {
            dal.AddVideo(video);
        }

        [HttpDelete]
        [Route("DeleteVideo/{id}")]
        public void DeleteVideo(int id)
        {
            dal.DeleteVideo(id);
        }

        //enrolled courses
 
        [HttpGet]
        [Route("GetEnrolledCourses")]
        public List<Course> GetEnrolledCourses(int userid)
        {
            return dal.GetAllEnrolledCoursesByUserId(userid);
        }
        //add enrolled course
        [HttpPost]
        [Route("AddEnrolledCourse")]
        public void AddEnrolledCourse(EnrolledCourses course)
        {
            dal.AddEnrolledCourse(course);
        }

        //roles
        [HttpGet]
        [Route("GetRoles")]
        public Role GetRole(int id)
        {
            return dal.GetRole(id);
        }

        [HttpPost]
        [Route("AddUser")]
        public void AddUser(User user)
        {
            dal.AddUser(user);
        }

        [HttpGet]
        [Route("GetUserByEmail")]
        public User GetUserByEmail(string email)
        {
            return dal.GetUserByEmail(email);
        }










        // GET api/<Controller>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<Controller>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<Controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<Controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
