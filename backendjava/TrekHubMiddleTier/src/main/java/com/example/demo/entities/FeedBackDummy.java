package com.example.demo.entities;

public class FeedBackDummy {

	
	int rating;
	String comment;
	int trekker_id;
	int plantrek_id;
	public FeedBackDummy(int rating, String comment, int trekker_id, int plantrek_id) {
		super();
		this.rating = rating;
		this.comment = comment;
		this.trekker_id = trekker_id;
		this.plantrek_id = plantrek_id;
	}
	public FeedBackDummy() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
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
	
	
}
