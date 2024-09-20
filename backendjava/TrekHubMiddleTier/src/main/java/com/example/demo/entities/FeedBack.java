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
@Table(name="feedback")
public class FeedBack {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int feedback_id;
	
	@Column
	int rating;
	
	@Column
	String comment;
	
	@OneToOne
	@JoinColumn(name="trekker_id")
	User trekker_id;
	
	@OneToOne
	@JoinColumn(name="plantrek_id")
	PlanTrek plantrek_id;

	public FeedBack(int rating, String comment, User trekker_id, PlanTrek plantrek_id) {
		super();
		this.rating = rating;
		this.comment = comment;
		this.trekker_id = trekker_id;
		this.plantrek_id = plantrek_id;
	}

	public FeedBack() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getFeedback_id() {
		return feedback_id;
	}

	public void setFeedback_id(int feedback_id) {
		this.feedback_id = feedback_id;
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
	
	
}

