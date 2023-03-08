package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Bike_Det")
public class entity {
     @Id
     private int product_id;
     private String name;
     private int cc;
     private String top_speed;
     private String fuel_norms;
     private String body_type;
     
     public entity() {
    	 
     }

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCc() {
		return cc;
	}

	public void setCc(int cc) {
		this.cc = cc;
	}

	public String getTop_speed() {
		return top_speed;
	}

	public void setTop_speed(String top_speed) {
		this.top_speed = top_speed;
	}

	public String getFuel_norms() {
		return fuel_norms;
	}

	public void setFuel_norms(String fuel_norms) {
		this.fuel_norms = fuel_norms;
	}

	public String getBody_type() {
		return body_type;
	}

	public void setBody_type(String body_type) {
		this.body_type = body_type;
	}

	public entity(int product_id, String name, int cc, String top_speed, String fuel_norms, String body_type) {
		super();
		this.product_id = product_id;
		this.name = name;
		this.cc = cc;
		this.top_speed = top_speed;
		this.fuel_norms = fuel_norms;
		this.body_type = body_type;
	};
	
}
