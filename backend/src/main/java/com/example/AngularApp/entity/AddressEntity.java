package com.example.AngularApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="address")
public class AddressEntity {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(name="house_no")
	String house;
	
	@Column(name="street")
	String street;
	
	@Column(name="zip")
	int zip;
	
	@Column(name="country")
	String country;

	public AddressEntity() {
		
	}

	public AddressEntity( String house, String street, int zip, String country) {
		super();
		
		this.house = house;
		this.street = street;
		this.zip = zip;
		this.country = country;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getHouse() {
		return house;
	}

	public void setHouse(String house) {
		this.house = house;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "AddressEntity [ house=" + house + ", street=" + street + ", zip=" + zip + ", country="
				+ country + "]";
	}
	
	
	
	
}
