package com.cars.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ModelRepo extends JpaRepository<Model,Integer>{
    @Query("select e from Model e")
    List<Model> findAllModelsQuery();
} 
