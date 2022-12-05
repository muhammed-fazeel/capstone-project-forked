using System.ComponentModel.DataAnnotations.Schema;

namespace UpSkillWebApi.Models
{
    public class VideoLinks
    {
        public int VideoLinksId { get; set; }
        [ForeignKey("CourseId")]
        public int CourseId { get; set; }
        public string Url { get; set; }
        public float Duration { get; set; }
        public string Title { get; set; }
        public Course? Course { get;  }

    }
}
