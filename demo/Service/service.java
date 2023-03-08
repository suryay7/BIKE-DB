package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.entity;
import com.example.demo.Repository.Bikrepo;

@Service
public class service {
	
	@Autowired
	
	private Bikrepo repo;
	
	public entity addparking(entity obj)
	{
		return repo.save(obj);
	}
	
	
	public List<entity>getAllParking()
	{
		return repo.findAll();
	}
	
	public String delete(int product_Id)
	{
		repo.deleteById(product_Id);
		return"deleted";
	}
	
	public entity update(int product_Id,entity obj)
	{
		return repo.saveAndFlush(obj);
	}	

}