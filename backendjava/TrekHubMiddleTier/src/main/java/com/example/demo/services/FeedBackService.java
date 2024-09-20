package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.FeedBack;
import com.example.demo.repositories.FeedBackRepository;

@Service
public class FeedBackService {
    
	@Autowired
	FeedBackRepository feedrepo;
	
	public FeedBack save(FeedBack f)
	{
		return feedrepo.save(f);
	}
}
