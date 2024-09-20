package com.example.demo.entities;

public class TrekBookingDummy {

	
	
	int trekker_id;
	int plantrek_id;
	int members;
	double amount;
	public TrekBookingDummy( int trekker_id, int plantrek_id, int members, double amount) {
		super();
		
		this.trekker_id = trekker_id;
		this.plantrek_id = plantrek_id;
		this.members = members;
		this.amount = amount;
	}
	public TrekBookingDummy() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getTrekker_id() {
		return trekker_id;
	}
	public void setTrekker_id(int trekker_id) {
		this.trekker_id = trekker_id;
	}
	public int getPlantrek_id() {
		return plantrek_id;
	}
	public void setPlantrek_id(int plantrek_id) {
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

