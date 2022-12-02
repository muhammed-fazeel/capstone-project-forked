using System.ComponentModel.DataAnnotations;

namespace UpSkillWebApi.Models
{
    public class Review
    {
        [Key]
        public int ReviewId { get; set; }   
        public int CourseId { get; set; }
        public string Author { get; set; }
        public DateTime Date { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
    }
}
