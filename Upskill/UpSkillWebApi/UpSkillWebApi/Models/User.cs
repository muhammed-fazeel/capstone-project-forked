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
        public string? PictureUrl { get; set; }
        public Role? Role { get; } 
        public ICollection<EnrolledCourses>? EnrolledCourses { get;  }
    }
}
