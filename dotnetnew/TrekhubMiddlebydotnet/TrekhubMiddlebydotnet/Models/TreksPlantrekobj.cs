using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class TreksPlantrekobj
{
    public int AddTrekTrekId { get; set; }

    public int PlantrekobjPlantreksId { get; set; }

    public virtual Trek AddTrekTrek { get; set; } = null!;

    public virtual Plantrek PlantrekobjPlantreks { get; set; } = null!;
}
