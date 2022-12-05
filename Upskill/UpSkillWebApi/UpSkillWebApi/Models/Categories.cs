using System.ComponentModel.DataAnnotations;
using System.Net;

namespace UpSkillWebApi.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string ImageUrl { get; set; }


        private ICollection<Course> _courses;
        public virtual ICollection<Course>? Course{ get;}   
    }
}
