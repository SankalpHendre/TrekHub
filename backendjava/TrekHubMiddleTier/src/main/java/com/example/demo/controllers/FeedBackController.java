package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.FeedBack;
import com.example.demo.entities.FeedBackDummy;
import com.example.demo.entities.PlanTrek;
import com.example.demo.entities.User;
import com.example.demo.services.FeedBackService;
import com.example.demo.services.PlanTrekService;
import com.example.demo.services.UserRegService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FeedBackController {

	@Autowired
	PlanTrekService plantrekserv;
	
	@Autowired
	UserRegService uregservice;
	
	@Autowired
	FeedBackService feedservice;
	
	@PostMapping("/feedback")
	public FeedBack feedback(@RequestBody FeedBackDummy fd)
	{
		User user= uregservice.getUserInfo(fd.getTrekker_id());
		PlanTrek pk=plantrekserv.getPlantrekbyid(fd.getPlantrek_id());
		
		FeedBack feedback=new FeedBack(fd.getRating(), fd.getComment(), user, pk);
		return feedservice.save(feedback);
	}
}
