namespace UpSkillWebApi.Models
{
    public class UpSkillEFDAO : IDatabase
    {
        private readonly UpSkillDbContext dbCtx;
        public UpSkillEFDAO(UpSkillDbContext dbCtx)
        {
            this.dbCtx = dbCtx;
        }

        public void AddCategory(Category category)
        {
            throw new NotImplementedException();
        }

        public void AddCourse(Course course)
        {
            throw new NotImplementedException();
        }

        public void AddCourse(EnrolledCourses course, int UserId)
        {
            throw new NotImplementedException();
        }

        public void AddReview(Review review)
        {
            throw new NotImplementedException();
        }

        public void AddVideo(VideoLinks video)
        {
            throw new NotImplementedException();
        }

        public void DeleteCourse(int CourseId)
        {
            throw new NotImplementedException();
        }

        public void DeleteVideo(int VideoId)
        {
            throw new NotImplementedException();
        }

        public List<Category> GetAllCategories()
        {
            var lstCats = dbCtx.Category.ToList();
            return lstCats;
        }

        public List<Course> GetAllCourses()
        {
            var lstCourses = dbCtx.Course.ToList();
            return lstCourses;
        }

        public List<EnrolledCourses> GetAllEnrolledCoursesByUserId(int id)
        {
            throw new NotImplementedException();
        }

        public Course GetCourse(int id)
        {
            throw new NotImplementedException();
        }

        public List<Course> GetCoursesByCategory(int CatId)
        {
            throw new NotImplementedException();
        }

        public List<Review> GetReviews()
        {
            throw new NotImplementedException();
        }

        public Role GetRole(int UserId)
        {
            throw new NotImplementedException();
        }

        public List<VideoLinks> GetVideoLinksByCourseId(int CourseId)
        {
            throw new NotImplementedException();
        }
    }
}
