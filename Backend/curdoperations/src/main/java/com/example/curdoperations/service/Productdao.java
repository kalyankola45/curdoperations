package com.example.curdoperations.service;

import java.util.List;

import com.example.curdoperations.model.Product;

public interface Productdao {

    // save
    public Product Productsave(Product theproject);

    // getallproducts
    public List<Product> getall();

    // getbyid

    public Product findbyid(int id);

    // deleteby id

    public void Deletebyid(int id);

    // updateby id

    public Product updatebyid(int id, Product theproduct);
}
