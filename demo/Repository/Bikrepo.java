package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.entity;

public interface Bikrepo  extends JpaRepository<entity,Integer>{

}