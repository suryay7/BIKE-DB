package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.entity;
import com.example.demo.Service.service;
@CrossOrigin
@RestController
public class controller {
	@Autowired
	
	private service Bikserv;
	
	@PostMapping("/add")
	public entity addPark(@RequestBody entity obj)
	{
		return Bikserv.addparking(obj);
	}
	
	@GetMapping("/show")
	public List<entity> getParking()
	{
		List<entity>arr=new ArrayList<>();
		arr=Bikserv.getAllParking();
		return arr;
	}
	
	@DeleteMapping("/delete/{product_id}")
	public void delete(@PathVariable int product_id)
	{
		 Bikserv.delete(product_id);
	}
	
	@PutMapping("/update/{product_id}")
	public entity update(@PathVariable int product_id,@RequestBody entity obj)
	{
		return Bikserv.update(product_id, obj);
	}

}