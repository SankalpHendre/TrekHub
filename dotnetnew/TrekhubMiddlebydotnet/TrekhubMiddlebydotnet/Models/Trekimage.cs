using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class Trekimage
{
    public int TrekImageId { get; set; }

    public byte[]? TrekImage1 { get; set; }

    public int? PlantrekId { get; set; }

    public int? TrekId { get; set; }

    public virtual Plantrek? Plantrek { get; set; }

    public virtual Trek? Trek { get; set; }
}
