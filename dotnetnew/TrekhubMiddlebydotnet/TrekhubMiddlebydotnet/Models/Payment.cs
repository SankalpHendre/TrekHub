using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class Payment
{
    public int PaymentId { get; set; }

    public string? PaymentMode { get; set; }

    public string? TransactionId { get; set; }

    public string? Amount { get; set; }

    public DateTime? PaymentDate { get; set; }

    public int? BookingId { get; set; }

    public int? PlantrekId { get; set; }

    public int? TrekkerId { get; set; }

    public virtual Trekbooking? Booking { get; set; }

    public virtual Plantrek? Plantrek { get; set; }

    public virtual User? Trekker { get; set; }
}
