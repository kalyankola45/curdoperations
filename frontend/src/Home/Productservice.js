
import React from 'react'
import axios from "axios";
const api = "http://localhost:8080/product";
export const Addproduct = (product) => {
  return axios
    .post(api, product)
    .then(res => {
      return res.data;
    })
    .catch(err => console.error(err));
}
export const getall = () => {
  return axios
    .get(api)
    .then(res => {
      return res.data;
    }
    )
    .catch(err => console.error(err));
}
export const getbyid = (id) => {
  return axios
    .get(api + `/${id}`)
    .then(res => {
      console.log("getby id succesfully")
      return res.data;
    })
    .catch(err => console.error(err));
}
export const updatebyid = (product) => {
  return axios
    .put(`${api}/${product.id}`, product)
    .then(res => {
      console.log("updated successfully");
      return res.data;
    })
    .catch(err => console.error(err));
}
export const deletebyid = (id) => {
  return axios
    .delete(api + "/" + id)
    .then(res => {


      console.log("deleted successfully")
      return res.data

    })
    .catch(err => console.error(err));
}