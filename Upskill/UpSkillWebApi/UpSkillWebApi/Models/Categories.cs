using System.ComponentModel.DataAnnotations;

namespace UpSkillWebApi.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string ImageUrl { get; set; }

        public ICollection<Course> Course { get; set; }
    }
}
