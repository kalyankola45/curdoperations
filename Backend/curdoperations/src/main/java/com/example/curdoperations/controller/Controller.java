package com.example.curdoperations.controller;

import java.util.*;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.curdoperations.model.Product;
import com.example.curdoperations.service.Productdao;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*")
public class Controller {

    @Autowired
    public Productdao productdao;

    @GetMapping
    public List<Product> getall() {
        return productdao.getall();
    }

    @PostMapping
    public void newone(@RequestBody Product theproduct) {
        productdao.Productsave(theproduct);
    }

    @GetMapping("/{id}")
    public Product getbyid(@PathVariable int id) {
        return productdao.findbyid(id);
    }

    @DeleteMapping("/{id}")
    public void deletebyid(@PathVariable int id) {
        productdao.Deletebyid(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editproduct(@RequestBody Product product, @PathVariable int id) {
        Product updatedproduct = productdao.updatebyid(id, product);
        return new ResponseEntity<>(updatedproduct, HttpStatus.OK);
    }
}
