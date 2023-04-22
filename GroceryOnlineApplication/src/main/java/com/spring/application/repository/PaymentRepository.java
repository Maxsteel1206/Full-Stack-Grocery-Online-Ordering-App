package com.spring.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.application.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>
{
	

}
