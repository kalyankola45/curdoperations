import React, { useEffect, useState } from 'react'
import { deletebyid, getall, getbyid } from './Productservice';
import Logo from "./logo192.png"

const Homepage = ({ show, setshows, update, setupdate, currentproduct, setcurrentproduct }) => {

  const setstatus = async (id) => {
    try {
      setshows(true); 
      setupdate(true); 
      const existproduct = await getbyid(id); 
      setcurrentproduct(existproduct); 
    } catch (error) {
      console.log(error);
    }
  };
  console.log(currentproduct)

  const [product, setproduct] = useState([]);
  useEffect(() => {
    const getfomr = async () => {
      const result = await getall();
      setproduct(result);
    }
    getfomr();
  }, [])
  const handledelete = async (id) => {
    let isconfirm = window.confirm("Are you sure you want to delete this item");
    console.log("this is isconfirm", isconfirm);
    if (isconfirm) {
      try {
        await deletebyid(id);
        const result = await getall();
        setproduct(result);
      }
      catch (error) {
        console.log(error)
      }
    }
    else {
      alert("Product cancelation fail ")
   }

  }
  return (
    <>
      <div className='container'>
        {
          product.map((e) => (

            <div className='cardsss' >

              <div className='details'>
                <h6>Product Name:{e.name}</h6>
                <p>Category:{e.category}</p>

                <h6>Stock :{e.stock}</h6>
                <h6>OrderStatus:  {e.orderstatus}</h6>
                <h5>Price:{e.price}</h5>
                <button className='btn btn-success' onClick={() => setstatus(e.id)}>Update</button>
                <button className='btn btn-danger' onClick={() => handledelete(e.id)}>Delete</button>
              </div>

            </div>
          ))
        }
      </div>

    </>
  )
}

export default Homepage

