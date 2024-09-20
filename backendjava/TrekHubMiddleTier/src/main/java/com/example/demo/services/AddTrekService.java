package com.example.demo.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.*;
import com.example.demo.entities.AddTrek;
import com.example.demo.repositories.AddTrekRepository;
import com.example.demo.repositories.TrekImageRepository;

@Service
public class AddTrekService
{
	@Autowired
	AddTrekRepository addtrekrepo;
	
	@Autowired
	TrekImageRepository trepo;
	
	public AddTrek save(AddTrek t)
	{
		return addtrekrepo.save(t);
	}
	
	public AddTrek getTrekInfo(int id)
	{
		System.out.println("addteckservice--"+id);
		Optional<AddTrek> trekdata=addtrekrepo.findById(id);
		System.out.println("trekid--"+trekdata );
		AddTrek trek=null;
		try
		{
			trek=trekdata.get();
		}
		catch(NoSuchElementException e)
		{
			trek=null;
		}
		return trek;
	}
	
	
	 public void upload(int trekId, byte[] imageData) {
	        AddTrek trek = addtrekrepo.findById(trekId)
	                .orElseThrow(() -> new RuntimeException("Trek not found with ID: " + trekId));
	        
	        TrekImage image = new TrekImage(imageData, trek);
	        trepo.save(image);
	    }

	
	 public List<AddTrek> geAllPackages() {
			
			
			return addtrekrepo.findAll();
		}
}
