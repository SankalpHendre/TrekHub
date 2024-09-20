package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Payment;
import com.example.demo.repositories.PaymentRepository;

@Service
public class PaymentService {
    @Autowired
	PaymentRepository prepo;
    
    public Payment save(Payment p)
    {
    	return prepo.save(p);
    }
    
    
}
