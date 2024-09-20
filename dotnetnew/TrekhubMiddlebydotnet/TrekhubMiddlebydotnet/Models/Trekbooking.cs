using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class Trekbooking
{
    public int BookingId { get; set; }

    public DateTime BookingDate { get; set; }

    public int? TrekkerId { get; set; }

    public int? PlantrekId { get; set; }

    public int? Members { get; set; }

    public decimal? Amount { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual Plantrek? Plantrek { get; set; }

    public virtual User? Trekker { get; set; }
}
