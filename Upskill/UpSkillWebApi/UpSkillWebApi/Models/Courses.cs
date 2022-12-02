using Microsoft.AspNetCore.Routing.Constraints;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;

namespace UpSkillWebApi.Models
{
    public class Course
    {
        [Key]
        public int CourseId { get; set; }
        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }
        public string Title { get; set; }
        public int price { get; set; }
        public string Author { get; set; }
        public int Rating { get; set; }
        public float Duration { get; set; }
        public int NoOfLectures { get; set; }
        public string ThumbnailUrl { get; set; }
        public string Description { get; set; }
        public Category Category { get; set; }
        
    }
}
