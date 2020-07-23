package com.example.AngularApp.DAO;

import java.util.List;

import com.example.AngularApp.entity.InfoEntity;
import com.example.AngularApp.entity.UsersEntity;

public interface InfoDAO {

	public List<InfoEntity> getInfo();
	
	public void createInfo(InfoEntity i);
	
	public void deleteInfo(int id );
	
	public void editInfo(InfoEntity i);
	
	public InfoEntity getsingleInfo(int id);
	
	public UsersEntity getsingleUser(UsersEntity u);
	
	public void createUser(UsersEntity u);
	
}
