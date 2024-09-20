package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.TrekImage;
import com.example.demo.repositories.TrekImageRepository;

@Service
public class TrekImageService 
{
	@Autowired
	TrekImageRepository trekimgrepo;
	
	
	
	public TrekImage insertdata(TrekImage trekimg)
	{
		return trekimgrepo.save(trekimg);
	}
	

}
