using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class Role
{
    public int RoleId { get; set; }

    public string? Rolename { get; set; }

    public string? RoleName1 { get; set; }

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();
}
