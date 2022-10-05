using Microsoft.EntityFrameworkCore;
using MT_Customer.Models;

namespace MT_Customer.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) 
        { }

        public DbSet<Customer> customers { get; set; }
    }
}
