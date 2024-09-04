package com.example.curdoperations.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.curdoperations.model.Product;
import com.example.curdoperations.repository.Productrepository;

import jakarta.persistence.EntityManager;

@Service
public class Productimplimention implements Productdao {

    @Autowired
    public Productrepository productrepository;

    @Override
    public Product Productsave(Product theproject) {
        return productrepository.save(theproject);

    }

    @Override
    public List<Product> getall() {
        return productrepository.findAll();
    }

    @Override
    public Product findbyid(int id) {
        return productrepository.findById(id).get();
    }

    @Override
    public void Deletebyid(int id) {
        productrepository.deleteById(id);
    }

    @Override
    public Product updatebyid(int id, Product theproduct) {

        Product oldpProduct = productrepository.findById(id).get();
        oldpProduct.setCategory(theproduct.getCategory());

        oldpProduct.setName(theproduct.getName());
        oldpProduct.setPrice(theproduct.getPrice());
        oldpProduct.setStock(theproduct.getStock());
        oldpProduct.setOrderstatus(theproduct.getOrderstatus());

        return productrepository.save(oldpProduct);

    }

}
