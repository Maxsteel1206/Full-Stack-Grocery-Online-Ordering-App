package com.spring.application.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.application.exception.ResourceNotFound;
import com.spring.application.model.Cart;
import com.spring.application.model.Customer;
import com.spring.application.model.Product;
import com.spring.application.repository.CartRepository;

@Service
public class CartService 
{
	@Autowired
	public CartRepository cartRepository;
	@Autowired
	public ProductService productService;
	@Autowired
	public CustomerService customerService;
	
	

	public Cart addCart(Cart cart,long productId,long customerId) {

		Product product =productService.getProductByProductId(productId) ;
		Customer customer =customerService.getCustomerById(customerId) ;
		 List<Cart> crl = this.getAllCarts();
		 int flag = 0;
		 Cart existingCart = null;
		 if (crl.size() > 0) {
			 for (int i=0;i< crl.size();i++) {
				 Cart c = this.getCartById(crl.get(i).getCartId());
				 if (c.getCustomer().getCustomerId() == customerId && c.getProduct().getProductId() == productId) {
					 flag = 1;
					 existingCart = c;
				 }
			 }
		 }
		 product.setQuantity(product.getQuantity()-cart.getQuantity());
		 if (flag ==1 && existingCart != null) {
			 existingCart.setQuantity(existingCart.getQuantity() + cart.getQuantity());
			 existingCart.setMrpPrice(product.getMrpPrice());
			existingCart.setCustomer(customer);
			System.out.println("111111111111111111111111111111111");
			return this.updateCart(existingCart, existingCart.getCartId());
		 } else {
			 cart.setProduct(product);
			cart.setMrpPrice(product.getMrpPrice());
			cart.setCustomer(customer);
			System.out.println("2222222222222222222222222222222222222222");
			return cartRepository.save(cart);
		 }
	}



	
	public List<Cart> getAllCarts() {
		return cartRepository.findAll();
	}



	public Cart getCartById(long cartId) {
		
		return cartRepository.findById(cartId).orElseThrow(()->new ResourceNotFound("Cart","Id",cartId));
	}



	public Cart updateCart(Cart cart, long cartId) {
		Cart existingCart=cartRepository.findById(cartId).orElseThrow(()->new ResourceNotFound("Cart","Id",cartId));
		existingCart.setQuantity(cart.getQuantity());
		existingCart.setMrpPrice(cart.getMrpPrice());
		existingCart.setCartId(cart.getCartId());
		existingCart.setProduct(cart.getProduct());
		existingCart.setCustomer(cart.getCustomer());
	    cartRepository.save(existingCart);
	    
		return existingCart;
	}



	public void deleteCart(long cartId) {
		Cart existingCart=cartRepository.findById(cartId).orElseThrow(()->new ResourceNotFound("Cart","Id",cartId));
		Product product =productService.getProductByProductId(existingCart.getProduct().getProductId());
		product.setQuantity(product.getQuantity() + existingCart.getQuantity());
		productService.updateProduct(product, product.getProductId());
		cartRepository.findById(cartId).orElseThrow(()->new ResourceNotFound("Cart","Id",cartId));
		cartRepository.deleteById(cartId);
		
	}

	public void deleteCartByCustomer(Customer c) {
		cartRepository.deleteCartByCustomer(c);
		
	}


}
