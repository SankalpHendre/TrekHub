package com.example.demo.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name="treks")
public class AddTrek 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int trek_id;
	
	@Column
	String trek_name, duration;
	
	@Column
	int capacity;
	
	@Column
	String description,location,level;
	
	@OneToMany(mappedBy = "trekobj",fetch = FetchType.LAZY)
	@Cascade(value = CascadeType.ALL)
	Set<TrekImage> trekimageobj;
	
	@OneToMany
	@Cascade(value = CascadeType.ALL)
	Set<PlanTrek> plantrekobj;

	public AddTrek() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AddTrek(int trek_id, String trek_name, String duration, int capacity, String description, String location,
			String level, Set<TrekImage> trekimageobj, Set<PlanTrek> plantrekobj) {
		super();
		this.trek_id = trek_id;
		this.trek_name = trek_name;
		this.duration = duration;
		this.capacity = capacity;
		this.description = description;
		this.location = location;
		this.level = level;
		this.trekimageobj = trekimageobj;
		this.plantrekobj = plantrekobj;
	}

	public int getTrek_id() {
		return trek_id;
	}

	public void setTrek_id(int trek_id) {
		this.trek_id = trek_id;
	}

	public String getTrek_name() {
		return trek_name;
	}

	public void setTrek_name(String trek_name) {
		this.trek_name = trek_name;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public Set<TrekImage> getTrekimageobj() {
		return trekimageobj;
	}

	public void setTrekimageobj(Set<TrekImage> trekimageobj) {
		this.trekimageobj = trekimageobj;
	}

	public Set<PlanTrek> getPlantrekobj() {
		return plantrekobj;
	}

	public void setPlantrekobj(Set<PlanTrek> plantrekobj) {
		this.plantrekobj = plantrekobj;
	}


	
	

	
	
	
	
	
	
	
	
	

}

