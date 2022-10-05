using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MT_Customer.Data;
using MT_Customer.Models;
using System.Collections.Generic;
using System.Reflection.Metadata;

namespace MT_Customer.Controllers
{
    [EnableCors("Testing")]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : Controller
    {
        private readonly ApplicationDbContext _context;
        public CustomersController(ApplicationDbContext context)
        {
            _context = context;
        }
        // Get: api/Customers
        [EnableCors("Testing")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> AllCustomers()
        {
            if(_context.customers == null)
            {
              return NotFound();  
            }
            return Ok(await _context.customers.ToListAsync());
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            if (_context.customers == null)
            {
                return NotFound();
            }
            var customer = await _context.customers.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Customer>> AddCustomer(Customer customer)
        {
           
            if (_context.customers == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Customer'  is null.");
            }
               
            _context.customers.Add(customer);
           await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomer", new { id = customer.Id }, customer);
        }


    }
}
