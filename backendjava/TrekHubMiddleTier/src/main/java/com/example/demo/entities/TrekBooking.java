package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="trekbooking")
public class TrekBooking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int booking_id;
	
	
	
	@OneToOne
	@JoinColumn(name="trekker_id")
	User trekker_id;
	
	@OneToOne
	@JoinColumn(name="plantrek_id")
    PlanTrek plantrek_id;
	
	@Column
	int members;
	
	@Column
	double amount;

	public TrekBooking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TrekBooking( User trekker_id, PlanTrek plantrek_id, int members, double amount) {
		super();
	
		this.trekker_id = trekker_id;
		this.plantrek_id = plantrek_id;
		this.members = members;
		this.amount = amount;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	
	public User getTrekker_id() {
		return trekker_id;
	}

	public void setTrekker_id(User trekker_id) {
		this.trekker_id = trekker_id;
	}

	public PlanTrek getPlantrek_id() {
		return plantrek_id;
	}

	public void setPlantrek_id(PlanTrek plantrek_id) {
		this.plantrek_id = plantrek_id;
	}

	public int getMembers() {
		return members;
	}

	public void setMembers(int members) {
		this.members = members;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	
}

