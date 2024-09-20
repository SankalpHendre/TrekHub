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
    public class TrekbookingsController : ControllerBase
    {
        private readonly TrekhubdbContext _context;

        public TrekbookingsController(TrekhubdbContext context)
        {
            _context = context;
        }

        // GET: api/Trekbookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Trekbooking>>> GetTrekbookings()
        {
          if (_context.Trekbookings == null)
          {
              return NotFound();
          }
            return await _context.Trekbookings.ToListAsync();
        }

        // GET: api/Trekbookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Trekbooking>> GetTrekbooking(int id)
        {
          if (_context.Trekbookings == null)
          {
              return NotFound();
          }
            var trekbooking = await _context.Trekbookings.FindAsync(id);

            if (trekbooking == null)
            {
                return NotFound();
            }

            return trekbooking;
        }

        
        [HttpGet,Route("ondatebooking")]
        public async Task<ActionResult<IEnumerable<Trekbooking>>> GetTrekbookingsonDate(DateTime startdate , DateTime enddate)
        {
            if (_context.Trekbookings == null)
            {
                return NotFound();
            }
            return await _context.Trekbookings.Where(t=>t.BookingDate >= startdate && t.BookingDate <= enddate).ToListAsync();
        }

        [HttpGet, Route("onamount")]
        public async Task<ActionResult<IEnumerable<Trekbooking>>> GetTrekbookingsonAmount(int amount)
        {
            if (_context.Trekbookings == null)
            {
                return NotFound();
            }
            return await _context.Trekbookings.Where(t => t.Amount == amount).ToListAsync();
        }
       
        private bool TrekbookingExists(int id)
        {
            return (_context.Trekbookings?.Any(e => e.BookingId == id)).GetValueOrDefault();
        }
    }
}
