using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using UpSkillWebApi.Models;

namespace UpSkillWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IDatabase dal;

        public LoginController(IDatabase dal)
        {
            this.dal = dal;
        }
        
        [HttpPost]
        [Route("Login")]
        public IActionResult Login(User user)
        {
           
            User org_user=dal.GetUserByEmail(user.Email);
            if (org_user.Password == user.Password && org_user.RoleId==user.RoleId)
            {
                //return OK with token
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ByYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM"));

                var token = new JwtSecurityToken(
                    issuer: "ramnath",
                    audience: "ramnath",
                    expires: DateTime.Now.AddHours(3),
                    //claims: new List<Claim> { new Claim("t1", "v1"), new Claim("t2", "v2") },
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });

            }

            return Unauthorized();



        }
    }
}
