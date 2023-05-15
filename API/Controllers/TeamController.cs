using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class TeamController : BaseApiController
    {
        private readonly DataContext _context;
        
        public TeamController(DataContext context)
        {
            _context = context;
            
        }

         [HttpGet] //api/activities
        public async Task<ActionResult<List<Person>>> GetActivities()
        {
            return await _context.Person.ToListAsync();
        }

        [HttpGet("{id}")] //api/activities/fdfkdffdfd
        public async Task<ActionResult<Person>> GetActivity(Guid id)
        {
            return await _context.Person.FindAsync(id);
        }
    }
}