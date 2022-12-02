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
    }
}
