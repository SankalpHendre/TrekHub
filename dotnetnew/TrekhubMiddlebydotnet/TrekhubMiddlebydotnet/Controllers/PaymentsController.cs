using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrekhubMiddlebydotnet.Models;

namespace TrekhubMiddlebydotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly TrekhubdbContext _context;

        public PaymentsController(TrekhubdbContext context)
        {
            _context = context;
        }

        // GET: api/Payments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payment>>> GetPayments()
        {
          if (_context.Payments == null)
          {
              return NotFound();
          }
            return await _context.Payments.ToListAsync();
        }
        
        [HttpGet,Route("ondate")]
        public async Task<ActionResult<IEnumerable<Payment>>> GetPaymentsonDate(DateTime startdate, DateTime enddate)
            
        {
            if (_context.Payments == null)
            {
                return NotFound();
            }
            return await _context.Payments.Where(t=>t.PaymentDate >= startdate && t.PaymentDate <= enddate).ToListAsync();
        }


        // GET: api/Payments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPayment(int id)
        {
          if (_context.Payments == null)
          {
              return NotFound();
          }
            var payment = await _context.Payments.FindAsync(id);

            if (payment == null)
            {
                return NotFound();
            }

            return payment;
        }


        private bool PaymentExists(int id)
        {
            return (_context.Payments?.Any(e => e.PaymentId == id)).GetValueOrDefault();
        }
    }
}
