using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UpSkillWebApi.Models
{
    public class Review
    {
        [Key]
        public int ReviewId { get; set; }
        [ForeignKey("CourseId")]
        public int CourseId { get; set; }
        public string Author { get; set; }
        public DateTime Date { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
        public Course Course { get; set; }
    }
}
