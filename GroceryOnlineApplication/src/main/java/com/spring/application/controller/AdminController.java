package com.spring.application.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.application.model.Admin;
import com.spring.application.service.AdminService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class AdminController 
{
	
	
	@Autowired
	private AdminService adminservice;
	

	
	
//	Register
	@PostMapping("/register")
	public ResponseEntity<Admin>saveAdmin(@Valid @RequestBody Admin admin)
	{
		System.out.println("admin register "+admin);
		return new  ResponseEntity<Admin>(adminservice.saveAdmin(admin),HttpStatus.CREATED);
	}
	
//	Login
	@PostMapping("/login")
	public ResponseEntity<Admin>loginAdmin(@RequestBody Admin admin)
	{
		System.out.println("admin login "+admin);
		return new ResponseEntity<Admin>(adminservice.loginAdmin(admin),HttpStatus.CREATED);
	}
	
//	Update
	@PutMapping("/upadte/admin/{id}")
	public ResponseEntity<Admin>updateAdmin(@PathVariable("id") long adminId,@RequestBody Admin admin)
	{
		return new ResponseEntity<Admin>(adminservice.updateAdmin(admin,adminId),HttpStatus.OK);
	}
	
//	Get All Admin
	@GetMapping("/admin")
	public List<Admin>getAllAdmin()
	{
		return adminservice.getAllAdmin();
	}
	
//	ForgotPassword
	@PostMapping("/forgotpassword")
	public Admin findByAdminEmailId(@RequestBody Admin admin)
	{
		return  adminservice.findByAdminEmailId(admin);
	}
	
//	Get Id
	@GetMapping("/admin/{id}")
	public ResponseEntity<Admin>findByAdminId(@PathVariable("id")long adminId)
	{
		return new ResponseEntity<Admin>(adminservice.findByAdminId(adminId),HttpStatus.OK);
		
	}
	
	
//	Delete Admin
	@DeleteMapping("delete/{id}")
	public ResponseEntity<Boolean> deleteAdmin(@PathVariable("id")long adminId)
	{
		adminservice.deleteAdmin(adminId);
		boolean flag=true;
		return new ResponseEntity<Boolean>(flag,HttpStatus.OK);
		
	}
}
