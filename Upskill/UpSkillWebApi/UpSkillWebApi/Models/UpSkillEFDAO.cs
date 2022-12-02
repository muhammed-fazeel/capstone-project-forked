namespace UpSkillWebApi.Models
{
    public class UpSkillEFDAO : IDatabase
    {
        private readonly UpSkillDbContext dbCtx;
        public UpSkillEFDAO(UpSkillDbContext dbCtx)
        {
            this.dbCtx = dbCtx;
        }

        public void AddCategory(Category category)
        {
            throw new NotImplementedException();
        }

        public List<Category> GetAllCategories()
        {
            var lstCats = dbCtx.Category.ToList();
            return lstCats;
        }

        public List<Course> GetAllCourses()
        {
            var lstCourses = dbCtx.Course.ToList();
            return lstCourses;
        }
    }
}
