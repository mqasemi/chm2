namespace DatingApp.API.Dtos
{
    public class UserForLoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool rememberMe { get; set; }
    }
}