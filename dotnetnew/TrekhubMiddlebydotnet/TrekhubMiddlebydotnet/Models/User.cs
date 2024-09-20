using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class User
{
    public int UserId { get; set; }

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public string? Adharno { get; set; }

    public string? Gender { get; set; }

    public string? Addressline { get; set; }

    public string? City { get; set; }

    public string? District { get; set; }

    public string? State { get; set; }

    public int? Pincode { get; set; }

    public string? Country { get; set; }

    public int? UserLoginId { get; set; }

    public virtual ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Plantrek> Plantreks { get; set; } = new List<Plantrek>();

    public virtual ICollection<Trekbooking> Trekbookings { get; set; } = new List<Trekbooking>();

    public virtual Login? UserLogin { get; set; }
}
