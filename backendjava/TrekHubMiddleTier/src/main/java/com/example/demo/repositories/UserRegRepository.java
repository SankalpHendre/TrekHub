package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.AddTrek;
import com.example.demo.entities.Login;
import com.example.demo.entities.User;

@Repository
public interface UserRegRepository extends JpaRepository<User, Integer> 
{

	 @Query("SELECT e FROM User e WHERE e.login_id.role_id.role_id = :roleId")
	    public List<User> getUsersByRoleId(int roleId);
	 
	 
	 @Query("Select l from Login l Where l.role_id Not in(select p.user_id from PlanTrek p)")
	 List<Login> getUserByRoleList();

	 
	 @Query("SELECT t FROM AddTrek t")
	    List<AddTrek>getTrekIds();
	 
	 
	 @Query("SELECT u.user_id FROM User u WHERE u.login_id.uid = :loginId")
	    Integer findUserIdByLoginId(String loginId);
	 
	 
	 
	 @Query("SELECT u FROM User u where u.user_id=:userid")
	 List<User> findUserIdByLoginId1(int userid);



}
