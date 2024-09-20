package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login,Integer> {

	@Query("select l from Login l where uid = :uid and pwd = :pwd")
	public Optional<Login>getLogin(String uid,String pwd);
}
