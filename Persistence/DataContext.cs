using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    //public class DataContext : IdentityDbContext<AppUser>
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<Person> Person { get; set; }

        // protected override void OnModelCreating(ModelBuilder builder){
        //     base.OnModelCreating(builder);

        // }

    }
}