package com.spring.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.application.model.Cart;
import com.spring.application.model.Customer;

public interface CartRepository extends JpaRepository<Cart,Long>
{

	void deleteCartByCustomer(Customer c);
	

}
