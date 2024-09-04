package com.example.curdoperations.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.curdoperations.model.Product;

public interface Productrepository extends JpaRepository<Product, Integer> {

}
