using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class Plantrek
{
    public int PlantreksId { get; set; }

    public DateOnly? StartDate { get; set; }

    public DateOnly? EndDate { get; set; }

    public decimal? Price { get; set; }

    public int? AvailSeats { get; set; }

    public DateOnly? LastDateApply { get; set; }

    public int? TrekId { get; set; }

    public int? GuideId { get; set; }

    public string? Status { get; set; }

    public int? UserId { get; set; }

    public virtual ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();

    public virtual User? Guide { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual Trek? Trek { get; set; }

    public virtual ICollection<Trekbooking> Trekbookings { get; set; } = new List<Trekbooking>();

    public virtual ICollection<Trekimage> Trekimages { get; set; } = new List<Trekimage>();

    public virtual TreksPlantrekobj? TreksPlantrekobj { get; set; }
}
