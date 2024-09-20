package com.example.demo.entities;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import com.example.demo.entities.AddTrek;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="trekimages")
public class TrekImage 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int trek_image_id;
	
	@Column
	byte[] trek_image;
	
	@JsonIgnoreProperties("trekimageobj")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="trek_id")
	@OnDelete(action = OnDeleteAction.CASCADE)
	AddTrek trekobj;

	public TrekImage() 
	{
		super();
		
	}

	public TrekImage(int trek_image_id, byte[] trek_image, AddTrek trekobj) 
	{
		super();
		this.trek_image_id = trek_image_id;
		this.trek_image = trek_image;
		this.trekobj = trekobj;
	}
	

	public TrekImage(AddTrek trekobj) {
		super();
		this.trekobj = trekobj;
	}
	
	public TrekImage(byte[] trek_image, AddTrek trekobj) {
		super();
		this.trek_image = trek_image;
		this.trekobj = trekobj;
	}

	public int getTrek_image_id() {
		return trek_image_id;
	}

	public void setTrek_image_id(int trek_image_id) {
		this.trek_image_id = trek_image_id;
	}

	public byte[] getTrek_image() {
		return trek_image;
	}

	public void setTrek_image(byte[] trek_image) {
		this.trek_image = trek_image;
	}

	public AddTrek getTrekobj() {
		return trekobj;
	}

	public void setTrekobj(AddTrek trekobj) {
		this.trekobj = trekobj;
	}

	
	
	
	
	

}

