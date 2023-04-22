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

import com.spring.application.model.Customer;
import com.spring.application.service.CustomerService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/customers")
public class CustomerController 
{
	@Autowired
	private CustomerService customerService;
	
//	Register
	@PostMapping("/register")
	public ResponseEntity<Customer>saveCustomer(@Valid @RequestBody Customer customer)
	{
		return new ResponseEntity<Customer>(customerService.saveCustomer(customer),HttpStatus.CREATED);
	}
	
	
//	Login
	@PostMapping("/login")
	public ResponseEntity<Customer>loginCustomer(@RequestBody Customer customer)
	{
		return new ResponseEntity<Customer>(customerService.loginCustomer(customer),HttpStatus.OK);
	}
	
//	Get All Customers
	@GetMapping("/customers")
	public List<Customer>getAllCustomers()
	{
		return customerService.getAllCustomers();
	}
	
	
//	Get Customer By Id
	@GetMapping("/customer/{id}")
	public ResponseEntity<Customer>findByCustomerId(@PathVariable("id")long customerId)
	{
		return new ResponseEntity<Customer>(customerService.getCustomerById(customerId),HttpStatus.OK);
	}
	
//	UpdateCustomer
	@PutMapping("/customer/{id}")
	public ResponseEntity<Customer>updateCustomer(@PathVariable("id")long customerId,@RequestBody Customer customer)
	{
		return new ResponseEntity<Customer>(customerService.updateCustomer(customer,customerId),HttpStatus.OK);
	}
	
	
//	Forgotpassword
	@PostMapping("/forgotpassword")
	public Customer findByCustomerEmailId(@RequestBody Customer customer)
	{
		return customerService.findByCustomerEmailId(customer);
	}
	
	
//	Delete Customer
	@DeleteMapping("/customer/{id}")
	public ResponseEntity<Boolean>deleteCustomer(@PathVariable("id")long customerId)
	{
		customerService.deleteCustomer(customerId);
		boolean flag= true;
		return new ResponseEntity<Boolean>(flag,HttpStatus.OK);
	}
	
	
	@PostMapping("/{cid}/{newpassword}")
	public Customer changeCustomerPassword(@PathVariable("cid") long cid,@PathVariable("newpassword") String newpassword) {
		//return customerService.getCustomerByEmail(customer);
		Customer c=customerService.getCustomerById(cid);
		c.setCustomerPassword(newpassword);
		customerService.updateCustomer(c, cid);
//		customerService.updateCustomer(c, cid);
		return c;
	}
}
