using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
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

            /*            builder.Services.AddDbContext<UpSkillDbContext>(options => { options.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=testdb;Integrated Security=True;Encrypt=False"); });
            */            //dhruv's connection string don't delete it 
            /*builder.Services.AddDbContext<UpSkillDbContext>(options => { options.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=testdb;Integrated Security=True;Pooling=False;Encrypt=False"); });*/

            //Asutosh's connection string
            builder.Services.AddDbContext<UpSkillDbContext>(options => { options.UseSqlServer("Data Source=./;Initial Catalog=UpSkillDB3;Integrated Security=True;Pooling=False;Encrypt=False"); });





            //enable CORS policy
            builder.Services.AddCors(options => { options.AddPolicy("clients-allowed", policy => policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod()); });


            //enable jwt-bearer authentication 
            builder.Services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = "ramnath",//ConfigurationManager.AppSetting["JWT:ValidIssuer"],
                        ValidAudience = "ramnath",// ConfigurationManager.AppSetting["JWT:ValidAudience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ByYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM"/*ConfigurationManager.AppSetting["JWT:Secret"]*/))
                    };
                });


            //build
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("clients-allowed");

            app.UseAuthorization();

            app.UseAuthentication();

            app.MapControllers();

            app.Run();
        }
    }
}