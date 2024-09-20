using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class Trek
{
    public int TrekId { get; set; }

    public string TrekName { get; set; } = null!;

    public string Duration { get; set; } = null!;

    public int Capacity { get; set; }

    public string Description { get; set; } = null!;

    public string Location { get; set; } = null!;

    public string Level { get; set; } = null!;

    public virtual ICollection<Plantrek> Plantreks { get; set; } = new List<Plantrek>();

    public virtual ICollection<Trekimage> Trekimages { get; set; } = new List<Trekimage>();

    public virtual ICollection<TreksPlantrekobj> TreksPlantrekobjs { get; set; } = new List<TreksPlantrekobj>();
}
