package com.example.demo.entities;

import java.sql.Date;

public class PlanTrekDummy 
{
	Date start_date;
	double price;
	int avail_seats;
	Date last_date_apply;
	int trek_id;
	int guide_id;
	String status;
	
	public PlanTrekDummy() 
	{
		super();
		
	}

	public PlanTrekDummy(Date start_date, double price, int avail_seats, Date last_date_apply, int trek_id,
			int guide_id, String status) {
		super();
		this.start_date = start_date;
		this.price = price;
		this.avail_seats = avail_seats;
		this.last_date_apply = last_date_apply;
		this.trek_id = trek_id;
		this.guide_id = guide_id;
		this.status = status;
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

	public int getTrek_id() {
		return trek_id;
	}

	public void setTrek_id(int trek_id) {
		this.trek_id = trek_id;
	}

	public int getGuide_id() {
		return guide_id;
	}

	public void setGuide_id(int guide_id) {
		this.guide_id = guide_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
	
	
	

}

