package com.example.AngularApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import io.jsonwebtoken.Jwts;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.AngularApp.DAO.InfoDAO;
import com.example.AngularApp.entity.InfoEntity;
import com.example.AngularApp.entity.UsersEntity;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class InfoController {

	@Autowired
	InfoDAO infoDAO;

	@RequestMapping("/info")
	public List<InfoEntity> Info() {

		List<InfoEntity> list = infoDAO.getInfo();

		return list;

	}

	@PostMapping("/edit")
	public void eInfo(@RequestBody InfoEntity i) {

		System.out.println(i);
		infoDAO.editInfo(i);
		
		
	}

	@PostMapping(value = "/insertInfo")
	public void addInfo(@RequestBody InfoEntity i)

	{
		System.out.println("i got from front end is "+ i);

		infoDAO.createInfo(i);
		

	}

	@RequestMapping(value = "/delete")
	public void delInfo(@RequestBody int id) {

		infoDAO.deleteInfo(id);
		System.out.println("deleted");
	}

	@RequestMapping("/get")
	public InfoEntity getSingleInfo(@RequestBody int id) {
		System.out.println(infoDAO.getsingleInfo(id));
		return infoDAO.getsingleInfo(id);

	}

	@RequestMapping("/getUser")
	public UsersEntity getUser(@RequestBody UsersEntity u) {
		System.out.println(u);
		return infoDAO.getsingleUser(u);
	}

	@RequestMapping("/createUser")
	public void createsingleUser(@RequestBody UsersEntity u) {
		System.out.println(u);
		infoDAO.createUser(u);
		System.out.println("User created");
	}

}
