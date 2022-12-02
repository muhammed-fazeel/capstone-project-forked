namespace UpSkillWebApi.Models
{
    public interface IDatabase
    {   
        void AddCategory(Category category);
        List<Category> GetAllCategories();
        List<Course> GetAllCourses();
    }
}
