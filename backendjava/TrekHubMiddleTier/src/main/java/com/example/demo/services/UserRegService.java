package com.example.demo.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.AddTrek;
import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.entities.UserReg;
import com.example.demo.repositories.UserRegRepository;

@Service
public class UserRegService {
	
	@Autowired
	UserRegRepository regrepo;
	
	public User saveUser(User u)
	{
		return regrepo.save(u);
	}
	
	
	public User getUserInfo(int id)
	{
		System.out.println(id+"");
		//return regrepo.findById(id);
	
		Optional<User> u=regrepo.findById(id);
		
		User up=null;
		try
		{
			up=u.get();
		}
		catch(NoSuchElementException e)
		{
			e.printStackTrace();
			System.out.println(e.getMessage());
		}
		return up;
	}

	public List<User> getUsersByRoleId(int roleId) {
        return regrepo.getUsersByRoleId(roleId);
    }
	
	
	public List<Login> getUsersByRoleId1() {
        return regrepo.getUserByRoleList();
    }
	
	
	public List<AddTrek> getTrekIds() {
        return regrepo.getTrekIds();
	}
	

	
	 public Integer getUserIdByLoginId(String loginId) {
	        return regrepo.findUserIdByLoginId(loginId);
	    }
	
	 
	 public List<User> getUserBYId(int userid)
		{
			return regrepo.findUserIdByLoginId1(userid);
		}
	 
	 
	 
	 public User updateUser(int userId, UserReg updatedUser) {
	        User existingUser = regrepo.findById(userId)
	                                   .orElseThrow(() -> new NoSuchElementException("User not found"));

	        existingUser.setFname(updatedUser.getFname());
	        existingUser.setLname(updatedUser.getLname());
	        existingUser.setEmail(updatedUser.getEmail());
	        existingUser.setContact(updatedUser.getContact());
	        existingUser.setAdharno(updatedUser.getAdharno());
	        existingUser.setGender(updatedUser.getGender());
	        existingUser.setAddressline(updatedUser.getAddressline());
	        
	        existingUser.setPincode(updatedUser.getPincode());

	        return regrepo.save(existingUser); // Use save method to update the entity
	    }
}
