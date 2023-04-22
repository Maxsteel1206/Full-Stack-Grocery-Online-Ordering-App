package com.spring.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.application.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long>
{

	List<Order> findByCustomerCustomerId(long customerId);
	

}
