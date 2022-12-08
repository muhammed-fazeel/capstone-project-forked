using System.ComponentModel.DataAnnotations.Schema;

namespace UpSkillWebApi.Models
{
    public class User
    {
        public int UserId { get; set; }
        [ForeignKey("RoleID")]
        public int RoleId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
<<<<<<< HEAD
        public string? PictureUrl { get; set; }
        public Role? Role { get; } 
=======
        public string PictureUrl { get; set; }
        public Role Role { get; set; }
>>>>>>> 3110f6dbd714d9282b2726b9be23b81f7aeab931
        public ICollection<EnrolledCourses>? EnrolledCourses { get;  }
    }
}
