using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;


namespace Gateway.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class AuthController:ControllerBase
    {
         private readonly IConfiguration _config;

        public AuthController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost("login")]
        public IActionResult Login(UserForLoginDto userForLoginDto)
        {
            // var userFromRepo = await _repo.Login(userForLoginDto.Username
            //     .ToLower(), userForLoginDto.Password);
           var userFromRepo= (userForLoginDto.Password.Equals("password"))?userForLoginDto:null;
            if (userFromRepo == null)
                return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Email.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Email),
                  new Claim("name", userFromRepo.Email)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

           // var user = _mapper.Map<UserForListDto>(userFromRepo);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token),
                userFromRepo
            });
        }
    
    }
}