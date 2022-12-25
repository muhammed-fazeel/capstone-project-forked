using Microsoft.EntityFrameworkCore;

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
            dbCtx.Add(category);
            dbCtx.SaveChanges();
        }

        public void AddCourse(Course course)
        {
            dbCtx.Add(course);
            dbCtx.SaveChanges();
        }

        public void AddCourse(EnrolledCourses course, int UserId)
        {
           throw new NotImplementedException();
        }

        public void AddReview(Review review)
        {
            dbCtx.Add(review);
            dbCtx.SaveChanges();
        }

        public void AddVideo(VideoLinks video)
        {
            dbCtx.Add(video);
            dbCtx.SaveChanges();
        }

        public void DeleteAllVideos(int CourseID)
        {
            throw new NotImplementedException();
        }

        public void DeleteCourse(int CourseId)
        {
            //write code to delete video links
            var course = dbCtx.Course.Where(o => o.CourseId == CourseId).SingleOrDefault();
            //delete if found
            if (course != null)
            {
                dbCtx.Remove(course);
                dbCtx.SaveChanges();
            }
        }

        //for admin use only
        public void DeleteVideo(int VideoId)
        {
            var vid = dbCtx.VideoLink.Where(o => o.VideoLinksId == VideoId).SingleOrDefault();
            //delete if found
            if (vid != null)
            {
                dbCtx.Remove(vid);
                dbCtx.SaveChanges();
            }

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

        public List<Course> GetAllEnrolledCoursesByUserId(int id)
        {
            //join course c on enrolledCourses e where id=userId 
            var courses = new List<Course>();
            var enrolledCourses = dbCtx.EnrolledCourse.Where(o => o.UserId == id).ToList();
            foreach (var course in enrolledCourses)
            {
                courses.Add(this.GetCourse(course.CourseID));

            }
            return courses;
        }
        public void AddEnrolledCourse(EnrolledCourses course)
        {
            dbCtx.EnrolledCourse.Add(course);
            dbCtx.SaveChanges();


        }

        //goes to the course page
        public Course GetCourse(int id)
        {
            var course = dbCtx.Course.Where(o => o.CourseId == id).SingleOrDefault();
            return course;
    
        }

        public List<Course> GetCoursesByCategory(int CatId)
        {
            var courses = dbCtx.Course.Where(o => o.CategoryId == CatId).ToList();
            return courses;
        }

        public List<Review> GetReviews(int courseid)
        {
            var reviews = dbCtx.Review.Where(o=>o.CourseId==courseid).ToList();
            return reviews;
        }

        public Role GetRole(int UserId)
        {
            throw new NotImplementedException();
        }

        public List<VideoLinks> GetVideoLinksByCourseId(int courseid)
        {
            var videos = dbCtx.VideoLink.Where(o => o.CourseId == courseid).ToList();
            return videos;
        }

        public void AddUser(User user)
        {
            dbCtx.User.Add(user);
            dbCtx.SaveChanges();
        }

        public User GetUserByEmail(string email)
        {
            var user = dbCtx.User.Where(o => o.Email == email).SingleOrDefault();
            return user;
        }
    }
}
