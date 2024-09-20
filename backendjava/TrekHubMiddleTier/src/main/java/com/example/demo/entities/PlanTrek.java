package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="plantreks")
public class PlanTrek
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int plantreks_id;
	@Column
	Date start_date;
	@Column
	double price;
	@Column
	int avail_seats;
	@Column
	Date last_date_apply;
	
	@ManyToOne
	@JoinColumn(name="trek_id")
	AddTrek trekidobj;
	
	@ManyToOne
	@JoinColumn(name="guide_id")
	User user_id;
	
	String status;

	public PlanTrek() 
	{
		super();
		
	}

	public PlanTrek(Date start_date, double price, int avail_seats, Date last_date_apply, AddTrek trekidobj,
			User user_id, String status) {
		super();
		this.start_date = start_date;
		this.price = price;
		this.avail_seats = avail_seats;
		this.last_date_apply = last_date_apply;
		this.trekidobj = trekidobj;
		this.user_id = user_id;
		this.status = status;
	}

	public int getPlantreks_id() {
		return plantreks_id;
	}

	public void setPlantreks_id(int plantreks_id) {
		this.plantreks_id = plantreks_id;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getAvail_seats() {
		return avail_seats;
	}

	public void setAvail_seats(int avail_seats) {
		this.avail_seats = avail_seats;
	}

	public Date getLast_date_apply() {
		return last_date_apply;
	}

	public void setLast_date_apply(Date last_date_apply) {
		this.last_date_apply = last_date_apply;
	}

	public AddTrek getTrekidobj() {
		return trekidobj;
	}

	public void setTrekidobj(AddTrek trekidobj) {
		this.trekidobj = trekidobj;
	}

	public User getUser_id() {
		return user_id;
	}

	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	

}
