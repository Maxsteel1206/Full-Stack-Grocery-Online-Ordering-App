package com.spring.application.service;

import java.util.ArrayList;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import com.spring.application.exception.ResourceNotFound;
import com.spring.application.model.Category;
import com.spring.application.model.Product;
import com.spring.application.model.ProductPaging;
import com.spring.application.repository.ProductRepository;

@Service
public class ProductService 
{
	@Autowired
	private ProductRepository productRepository;
	
	public Product addProduct(Product product)
	{
		System.out.println("Product Added Succesfully "+product);
		product.setProductname(product.getProductname());
		product.setQuantity(product.getQuantity());
		product.setMrpPrice(product.getMrpPrice());
		product.setDescription(product.getDescription());
		return productRepository.save(product);
		
	}

	
	public List<Product> getAllProducts() 
	{
		
		return productRepository.findAll();
	}


	public Product getProductByProductId(long productId) 
	{
		
		return productRepository.findByproductId(productId).orElseThrow(()->new ResourceNotFound("Product","Id" , productId));
	}


	public Product updateProduct(Product product,long productId) 
	{
		Product existingProduct = productRepository.findById(productId).orElseThrow(()->new ResourceNotFound("product","productId",productId));
		existingProduct.setProductname(product.getProductname());
		existingProduct.setMrpPrice(product.getMrpPrice());
		existingProduct.setImage(product.getImage());
		existingProduct.setDescription(product.getDescription());
		existingProduct.setQuantity(product.getQuantity());
		
		productRepository.save(existingProduct);
		
		return existingProduct;
	}


	public void deleteProduct(long productId) 
	{
		productRepository.findById(productId).orElseThrow(()->new ResourceNotFound("product","Id",productId));
		productRepository.deleteById(productId);	
	
		
	}


	public List<Product> findByCategory(Category category) 
	{
		
		return productRepository.findByCategory(category);
	}


	public ProductPaging findByCategory(Category category, Integer pageNo, Integer pageSize) 
	{
		Pageable paging = PageRequest.of(pageNo, pageSize);
		Page<Product> pageResult = productRepository.findByCategory(category, paging);
		ProductPaging pr = new ProductPaging();
		pr.setTotalProduct(pageResult.getTotalElements());
		if(pageResult.hasContent()) {
            pr.setProduct(pageResult.getContent());
        } else {
        	 pr.setProduct(new ArrayList<Product>());
        }
		return pr;
	}


	public ProductPaging getAllProducts(Integer pageNo, Integer pageSize) 
	{
		Pageable paging = PageRequest.of(pageNo, pageSize);
		Page<Product> pageResult = productRepository.findAll(paging);
		ProductPaging pr = new ProductPaging();
		pr.setTotalProduct(pageResult.getTotalElements());
		System.out.println(">>>>>"+ pageResult.getTotalPages());
		if(pageResult.hasContent()) {
            pr.setProduct(pageResult.getContent());
        } else {
        	 pr.setProduct(new ArrayList<Product>());
        }
		return pr;
	}

	

}
