package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.PlanTrek;

@Transactional
@Repository
public interface PlanTrekRepository extends JpaRepository<PlanTrek, Integer> 
{
	@Query("Select e from PlanTrek e where e.plantreks_id=:id")
	public PlanTrek getPlantrekbyid(int id);
	

	 @Query("SELECT pt FROM PlanTrek pt WHERE pt.user_id.user_id = :userId")
	    List<PlanTrek> findByUserId(@Param("userId") int userId);
}
