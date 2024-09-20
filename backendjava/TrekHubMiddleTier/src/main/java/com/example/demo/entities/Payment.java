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
@Table(name="payment")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int payment_id;
	
	@Column
	String payment_mode;
	
	@Column
	String transaction_id;
	
	@Column
	double amount;
	
	
	
	@OneToOne
	@JoinColumn(name="booking_id")
	TrekBooking booking_id;
	
	
	@OneToOne
	@JoinColumn(name="plantrek_id")
    PlanTrek plantrek_id;
	
	@OneToOne
	@JoinColumn(name="trekker_id")
	User trekker_id;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(String payment_mode, String transaction_id, double amount, TrekBooking booking_id,
			PlanTrek plantrek_id, User trekker_id) {
		super();
		this.payment_mode = payment_mode;
		this.transaction_id = transaction_id;
		this.amount = amount;
		this.booking_id = booking_id;
		this.plantrek_id = plantrek_id;
		this.trekker_id = trekker_id;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public String getPayment_mode() {
		return payment_mode;
	}

	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}

	public String getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public TrekBooking getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(TrekBooking booking_id) {
		this.booking_id = booking_id;
	}

	public PlanTrek getPlantrek_id() {
		return plantrek_id;
	}

	public void setPlantrek_id(PlanTrek plantrek_id) {
		this.plantrek_id = plantrek_id;
	}

	public User getTrekker_id() {
		return trekker_id;
	}

	public void setTrekker_id(User trekker_id) {
		this.trekker_id = trekker_id;
	}

	
}

