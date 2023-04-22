package com.spring.application.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.spring.application.exception.ResourceNotFound;
import com.spring.application.model.Admin;
import com.spring.application.repository.AdminRepository;

@Service
public class AdminService 
{
	@Autowired
	private AdminRepository adminRepository;
	
	

	public Admin saveAdmin(@Valid Admin admin) 
	{
		System.out.println("Admin Register Service "+admin);
		return this.adminRepository.save(admin);
	}

	public Admin loginAdmin(Admin admin) {
//		System.out.println("Admin Login Service "+admin);
		return this.adminRepository.findByAdminEmailIdAndAdminPassword(admin.adminEmailId,admin.adminPassword).orElseThrow(()->new ResourceNotFound("Admin ","Id",admin.adminEmailId+"and password"+admin.adminPassword));
	}

	public Admin updateAdmin(Admin admin, long adminId) 
	{
		Admin existingAdmin=adminRepository.findById(adminId).orElseThrow(()->new ResourceNotFound("Admin","id",adminId));
		 existingAdmin.setFirstName(admin.getFirstName());
		 existingAdmin.setLastName(admin.getLastName());
		 existingAdmin.setAdminEmailId(admin.getAdminEmailId());
		 existingAdmin.setAdminPassword(admin.getAdminPassword());
		 adminRepository.save( existingAdmin);
		return existingAdmin;
	}

	

	public void deleteAdmin(long adminId) 
	{
		adminRepository.findById(adminId).orElseThrow(()->new ResourceNotFound("Admin","id",adminId));
		adminRepository.deleteById(adminId);
	}

		
	public List<Admin> getAllAdmin() 
	{
		
		return adminRepository.findAll();
	}

	public Admin findByAdminEmailId(Admin admin) {
		
		 return this.adminRepository.findByAdminEmailId(admin.adminEmailId).orElseThrow(()->new ResourceNotFound("Admin ","Id",admin.adminEmailId+"and password"+admin.adminPassword));
	}

	public Admin findByAdminId(long adminId) {
		
		return adminRepository.findById(adminId).orElseThrow(()->new ResourceNotFound("Admin","id",adminId)); 
	}

	
}
