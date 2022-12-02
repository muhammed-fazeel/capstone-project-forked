using System.ComponentModel.DataAnnotations.Schema;

namespace UpSkillWebApi.Models
{
    public class EnrolledCourses
    {
        public int EnrolledCoursesId { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }

        [ForeignKey("CourseID")]
        public int CourseID {get; set; }    
        public User User { get; set; }
        public Course Course { get; set; }

    }
}
