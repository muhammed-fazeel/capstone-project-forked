using Microsoft.EntityFrameworkCore;

namespace UpSkillWebApi.Models
{
    public class UpSkillDbContext : DbContext
    {
        public UpSkillDbContext(DbContextOptions<UpSkillDbContext> options) : base(options)
        {

        }
        public DbSet<Category> Category { get; set; }
        public DbSet<Course> Course { get; set; }
        public DbSet<Review> Review { get; set; }
        public DbSet<VideoLinks> VideoLink { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<EnrolledCourses> EnrolledCourse { get; set; }
        public DbSet<User> User { get; set; }   
    }
}
