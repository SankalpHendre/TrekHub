package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TrekImage;

@Transactional
@Repository
public interface TrekImageRepository extends JpaRepository<TrekImage, Integer> 
{

}
