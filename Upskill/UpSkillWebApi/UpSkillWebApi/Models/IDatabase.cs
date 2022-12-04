namespace UpSkillWebApi.Models
{
    public interface IDatabase
    {   

        //calls for courses 
        public void AddCourse(Course course);  
        List<Course> GetAllCourses();

        public Course GetCourse(int id);    
        public List<Course> GetCoursesByCategory(int CatId);
        public void DeleteCourse(int CourseId);

        //calls for Categories
        List<Category> GetAllCategories();

        void AddCategory(Category category);


        //calls for reviews
        public List<Review> GetReviews();
        public void AddReview(Review review);   

        //calls for videoLinks
        public List<VideoLinks> GetVideoLinksByCourseId(int CourseId);
        public void AddVideo(VideoLinks video); 
        public void DeleteVideo(int VideoId);

        //calls for enrolled courses
        public List<EnrolledCourses> GetAllEnrolledCoursesByUserId(int id);

        public void AddCourse(EnrolledCourses course,int UserId);  // adding the course to user's enrolled courses 

        //calls for Users- this will used for authentication
        // to-do add the functions here


        //calls for Roles
        public Role GetRole(int UserId);

        
    }
}
