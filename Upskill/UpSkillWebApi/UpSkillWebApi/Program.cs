using Microsoft.EntityFrameworkCore;
using UpSkillWebApi.Models;

namespace UpSkillWebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //configure DAO for dependency injection
            builder.Services.Add(new ServiceDescriptor(typeof(IDatabase), typeof(UpSkillEFDAO), ServiceLifetime.Transient));


            //configure dbcontext for using SqlServer
            builder.Services.AddDbContext<UpSkillDbContext>(options => { options.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=testdb;Integrated Security=True;Pooling=False;Encrypt=False"); });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}