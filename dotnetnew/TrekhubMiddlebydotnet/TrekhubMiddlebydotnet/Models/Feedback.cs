using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class Feedback
{
    public int FeedbackId { get; set; }

    public int? Rating { get; set; }

    public string? Comment { get; set; }

    public int? TrekkerId { get; set; }

    public int? PlantrekId { get; set; }

    public virtual Plantrek? Plantrek { get; set; }

    public virtual User? Trekker { get; set; }
}
