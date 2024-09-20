package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.AddTrek;
import com.example.demo.services.AddTrekService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AddTrekController 
{
	@Autowired
	AddTrekService addtrekservice;
	
	@PostMapping("/addtrek")
	public AddTrek addtrek(@RequestBody AddTrek t)
	{
		return addtrekservice.save(t);
	}


	@GetMapping("/getalltreks")
	public List<AddTrek> getAllPackages()
	{
		return addtrekservice.geAllPackages();
	}
}