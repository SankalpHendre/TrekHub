using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TrekhubMiddlebydotnet.Models;

public partial class TrekhubdbContext : DbContext
{
    public TrekhubdbContext()
    {
    }

    public TrekhubdbContext(DbContextOptions<TrekhubdbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Feedback> Feedbacks { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Plantrek> Plantreks { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Trek> Treks { get; set; }

    public virtual DbSet<Trekbooking> Trekbookings { get; set; }

    public virtual DbSet<Trekimage> Trekimages { get; set; }

    public virtual DbSet<TreksPlantrekobj> TreksPlantrekobjs { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=Sankalp@5281;database=trekhubdb", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Feedback>(entity =>
        {
            entity.HasKey(e => e.FeedbackId).HasName("PRIMARY");

            entity.ToTable("feedback");

            entity.HasIndex(e => e.PlantrekId, "plantrekid_idx");

            entity.HasIndex(e => e.TrekkerId, "trekkerid_idx");

            entity.Property(e => e.FeedbackId).HasColumnName("feedback_id");
            entity.Property(e => e.Comment)
                .HasMaxLength(500)
                .HasColumnName("comment");
            entity.Property(e => e.PlantrekId).HasColumnName("plantrek_id");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.TrekkerId).HasColumnName("trekker_id");

            entity.HasOne(d => d.Plantrek).WithMany(p => p.Feedbacks)
                .HasForeignKey(d => d.PlantrekId)
                .HasConstraintName("plantrekid");

            entity.HasOne(d => d.Trekker).WithMany(p => p.Feedbacks)
                .HasForeignKey(d => d.TrekkerId)
                .HasConstraintName("trekkerid");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.LoginId).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.RoleId, "role_id_idx");

            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Pwd)
                .HasMaxLength(45)
                .HasColumnName("pwd");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Uid)
                .HasMaxLength(45)
                .HasColumnName("uid");

            entity.HasOne(d => d.Role).WithMany(p => p.Logins)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("role_id");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PRIMARY");

            entity.ToTable("payment");

            entity.HasIndex(e => e.BookingId, "booking_id_idx");

            entity.HasIndex(e => e.PlantrekId, "plantrek_id_idx");

            entity.HasIndex(e => e.TrekkerId, "trekker_id_idx");

            entity.Property(e => e.PaymentId).HasColumnName("payment_id");
            entity.Property(e => e.Amount)
                .HasMaxLength(45)
                .HasColumnName("amount");
            entity.Property(e => e.BookingId).HasColumnName("booking_id");
            entity.Property(e => e.PaymentDate)
                .HasColumnType("datetime")
                .HasColumnName("payment_date");
            entity.Property(e => e.PaymentMode)
                .HasMaxLength(45)
                .HasColumnName("payment_mode");
            entity.Property(e => e.PlantrekId).HasColumnName("plantrek_id");
            entity.Property(e => e.TransactionId)
                .HasMaxLength(45)
                .HasColumnName("transaction_id");
            entity.Property(e => e.TrekkerId).HasColumnName("trekker_id");

            entity.HasOne(d => d.Booking).WithMany(p => p.Payments)
                .HasForeignKey(d => d.BookingId)
                .HasConstraintName("booking_id");

            entity.HasOne(d => d.Plantrek).WithMany(p => p.Payments)
                .HasForeignKey(d => d.PlantrekId)
                .HasConstraintName("plantreks_id");

            entity.HasOne(d => d.Trekker).WithMany(p => p.Payments)
                .HasForeignKey(d => d.TrekkerId)
                .HasConstraintName("trekkers_id");
        });

        modelBuilder.Entity<Plantrek>(entity =>
        {
            entity.HasKey(e => e.PlantreksId).HasName("PRIMARY");

            entity.ToTable("plantreks");

            entity.HasIndex(e => e.GuideId, "guide_id_idx");

            entity.HasIndex(e => e.TrekId, "trek_id_idx");

            entity.Property(e => e.PlantreksId).HasColumnName("plantreks_id");
            entity.Property(e => e.AvailSeats).HasColumnName("avail_seats");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.GuideId).HasColumnName("guide_id");
            entity.Property(e => e.LastDateApply).HasColumnName("last_date_apply");
            entity.Property(e => e.Price)
                .HasPrecision(9, 2)
                .HasColumnName("price");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
            entity.Property(e => e.Status)
                .HasMaxLength(45)
                .HasColumnName("status");
            entity.Property(e => e.TrekId).HasColumnName("trek_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Guide).WithMany(p => p.Plantreks)
                .HasForeignKey(d => d.GuideId)
                .HasConstraintName("guide_id");

            entity.HasOne(d => d.Trek).WithMany(p => p.Plantreks)
                .HasForeignKey(d => d.TrekId)
                .HasConstraintName("trek_id");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PRIMARY");

            entity.ToTable("roles");

            entity.Property(e => e.RoleId)
                .ValueGeneratedNever()
                .HasColumnName("role_id");
            entity.Property(e => e.RoleName1)
                .HasMaxLength(255)
                .HasColumnName("role_name");
            entity.Property(e => e.Rolename)
                .HasMaxLength(15)
                .HasColumnName("rolename");
        });

        modelBuilder.Entity<Trek>(entity =>
        {
            entity.HasKey(e => e.TrekId).HasName("PRIMARY");

            entity.ToTable("treks");

            entity.Property(e => e.TrekId).HasColumnName("trek_id");
            entity.Property(e => e.Capacity).HasColumnName("capacity");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.Duration)
                .HasMaxLength(45)
                .HasColumnName("duration");
            entity.Property(e => e.Level)
                .HasMaxLength(45)
                .HasColumnName("level");
            entity.Property(e => e.Location)
                .HasMaxLength(45)
                .HasColumnName("location");
            entity.Property(e => e.TrekName)
                .HasMaxLength(45)
                .HasColumnName("trek_name");
        });

        modelBuilder.Entity<Trekbooking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PRIMARY");

            entity.ToTable("trekbooking");

            entity.HasIndex(e => e.PlantrekId, "plantrek_id_idx");

            entity.HasIndex(e => e.TrekkerId, "trekker_id_idx");

            entity.Property(e => e.BookingId).HasColumnName("booking_id");
            entity.Property(e => e.Amount)
                .HasPrecision(9, 2)
                .HasColumnName("amount");
            entity.Property(e => e.BookingDate).HasColumnName("booking_date");
            entity.Property(e => e.Members).HasColumnName("members");
            entity.Property(e => e.PlantrekId).HasColumnName("plantrek_id");
            entity.Property(e => e.TrekkerId).HasColumnName("trekker_id");

            entity.HasOne(d => d.Plantrek).WithMany(p => p.Trekbookings)
                .HasForeignKey(d => d.PlantrekId)
                .HasConstraintName("plantrek_id");

            entity.HasOne(d => d.Trekker).WithMany(p => p.Trekbookings)
                .HasForeignKey(d => d.TrekkerId)
                .HasConstraintName("trekker_id");
        });

        modelBuilder.Entity<Trekimage>(entity =>
        {
            entity.HasKey(e => e.TrekImageId).HasName("PRIMARY");

            entity.ToTable("trekimages");

            entity.HasIndex(e => e.TrekId, "FK6qreh5mylcms9wj2hawwjwlfc");

            entity.HasIndex(e => e.PlantrekId, "plantrekid_idx");

            entity.Property(e => e.TrekImageId).HasColumnName("trek_image_id");
            entity.Property(e => e.PlantrekId).HasColumnName("plantrek_id");
            entity.Property(e => e.TrekId).HasColumnName("trek_id");
            entity.Property(e => e.TrekImage1).HasColumnName("trek_image");

            entity.HasOne(d => d.Plantrek).WithMany(p => p.Trekimages)
                .HasForeignKey(d => d.PlantrekId)
                .HasConstraintName("plan_trek_id");

            entity.HasOne(d => d.Trek).WithMany(p => p.Trekimages)
                .HasForeignKey(d => d.TrekId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK6qreh5mylcms9wj2hawwjwlfc");
        });

        modelBuilder.Entity<TreksPlantrekobj>(entity =>
        {
            entity.HasKey(e => new { e.AddTrekTrekId, e.PlantrekobjPlantreksId })
                .HasName("PRIMARY")
                .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

            entity.ToTable("treks_plantrekobj");

            entity.HasIndex(e => e.PlantrekobjPlantreksId, "UK_gtrwx023ry0vrqics6irl89vp").IsUnique();

            entity.Property(e => e.AddTrekTrekId).HasColumnName("add_trek_trek_id");
            entity.Property(e => e.PlantrekobjPlantreksId).HasColumnName("plantrekobj_plantreks_id");

            entity.HasOne(d => d.AddTrekTrek).WithMany(p => p.TreksPlantrekobjs)
                .HasForeignKey(d => d.AddTrekTrekId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK8dnoqr9gv29b5rif5xa59y4bw");

            entity.HasOne(d => d.PlantrekobjPlantreks).WithOne(p => p.TreksPlantrekobj)
                .HasForeignKey<TreksPlantrekobj>(d => d.PlantrekobjPlantreksId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKloaxu3blm0fytt8juf7buxlo0");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.ToTable("users");

            entity.HasIndex(e => e.UserLoginId, "user_login_id_idx");

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Addressline)
                .HasMaxLength(200)
                .HasColumnName("addressline");
            entity.Property(e => e.Adharno)
                .HasMaxLength(45)
                .HasColumnName("adharno");
            entity.Property(e => e.City)
                .HasMaxLength(45)
                .HasColumnName("city");
            entity.Property(e => e.Contact)
                .HasMaxLength(15)
                .HasColumnName("contact");
            entity.Property(e => e.Country)
                .HasMaxLength(45)
                .HasColumnName("country");
            entity.Property(e => e.District)
                .HasMaxLength(45)
                .HasColumnName("district");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(20)
                .HasColumnName("fname");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .HasColumnName("gender");
            entity.Property(e => e.Lname)
                .HasMaxLength(20)
                .HasColumnName("lname");
            entity.Property(e => e.Pincode).HasColumnName("pincode");
            entity.Property(e => e.State)
                .HasMaxLength(45)
                .HasColumnName("state");
            entity.Property(e => e.UserLoginId).HasColumnName("user_login_id");

            entity.HasOne(d => d.UserLogin).WithMany(p => p.Users)
                .HasForeignKey(d => d.UserLoginId)
                .HasConstraintName("user_login_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
