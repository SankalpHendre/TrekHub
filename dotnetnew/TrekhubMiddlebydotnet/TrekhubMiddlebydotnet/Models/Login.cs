using System;
using System.Collections.Generic;

namespace TrekhubMiddlebydotnet.Models;

public partial class Login
{
    public int LoginId { get; set; }

    public string Uid { get; set; } = null!;

    public string Pwd { get; set; } = null!;

    public int? RoleId { get; set; }

    public virtual Role? Role { get; set; }

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
