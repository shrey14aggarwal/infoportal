package com.example.AngularApp.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="info")
public class InfoEntity {

	public InfoEntity() {
		
	}
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(name="first_name")

	String first;
	
	@Column(name="last_name")
	String last;
	
	@Column(name="gender")
	String gender;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="address_id")
	AddressEntity addressEntity;

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirst() {
		return first;
	}

	public void setFirst(String first) {
		this.first = first;
	}

	public String getLast() {
		return last;
	}

	public void setLast(String last) {
		this.last = last;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	

	public AddressEntity getAddressEntity() {
		return addressEntity;
	}

	public void setAddressEntity(AddressEntity addressEntity) {
		this.addressEntity = addressEntity;
	}

	
	public InfoEntity(String first, String last, String gender, AddressEntity addressEntity) {
		super();
		this.first = first;
		this.last = last;
		this.gender = gender;
		this.addressEntity = addressEntity;
	}

	@Override
	public String toString() {
		return "InfoEntity [id=" + id + ", first=" + first + ", last=" + last + ", gender=" + gender
				+ ", addressEntity=" + addressEntity + "]";
	}

	
	
	
	
	
}
