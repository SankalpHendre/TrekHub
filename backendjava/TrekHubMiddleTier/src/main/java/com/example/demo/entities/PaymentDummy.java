package com.example.demo.entities;

public class PaymentDummy {

	
	String payment_mode;
	
	String transaction_id;
	
	double amount;
	
	int booking_id;
	
	int plantrek_id;
	
	int trekker_id;

	public PaymentDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PaymentDummy(String payment_mode, String transaction_id, double amount, int booking_id, int plantrek_id,
			int trekker_id) {
		super();
		this.payment_mode = payment_mode;
		this.transaction_id = transaction_id;
		this.amount = amount;
		this.booking_id = booking_id;
		this.plantrek_id = plantrek_id;
		this.trekker_id = trekker_id;
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

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public int getPlantrek_id() {
		return plantrek_id;
	}

	public void setPlantrek_id(int plantrek_id) {
		this.plantrek_id = plantrek_id;
	}

	public int getTrekker_id() {
		return trekker_id;
	}

	public void setTrekker_id(int trekker_id) {
		this.trekker_id = trekker_id;
	}
	
	
}
