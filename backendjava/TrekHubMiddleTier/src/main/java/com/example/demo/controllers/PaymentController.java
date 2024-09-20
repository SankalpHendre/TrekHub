package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Payment;
import com.example.demo.entities.PaymentDummy;
import com.example.demo.entities.PlanTrek;
import com.example.demo.entities.TrekBooking;
import com.example.demo.entities.User;
import com.example.demo.services.PaymentService;
import com.example.demo.services.PlanTrekService;
import com.example.demo.services.TrekBookingService;
import com.example.demo.services.UserRegService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentController {

	@Autowired
	PlanTrekService plantrekserv;
	
	@Autowired
	UserRegService uregservice;
	
	@Autowired
	PaymentService paymentservice;
	
	@Autowired
	TrekBookingService bookservice;
	
	@PostMapping("/payment")
	public Payment payment(@RequestBody PaymentDummy py)
	{
		User user= uregservice.getUserInfo(py.getTrekker_id());
		PlanTrek pk=plantrekserv.getPlantrekbyid(py.getPlantrek_id());
		TrekBooking tt=bookservice.getBookingInfo(py.getBooking_id());
		
		Payment payment=new Payment(py.getPayment_mode(), py.getTransaction_id(),py.getAmount(), tt, pk, user);
		
		return paymentservice.save(payment);
		
	}
}

