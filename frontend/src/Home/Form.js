
import { useEffect, useState } from "react";
import "../App.css"
import { Addproduct, updatebyid } from "./Productservice";
const Form = ({ show, setshows, setupdate, update, currentproduct, setcurrentproduct }) => {

    const [Product, setProduct] = useState({
        name: "",
        category: "Mobile",
        price: "",
        stock: " ",
        orderstatus: "Available",
    })
    useEffect(() => {
        if (update) {
            setProduct(currentproduct);

        }
    }, [update, currentproduct]);
    const toggle = () => {
        setshows(!show)
        setupdate(false)

    }

    const handlechange = (e) => {
        const { name, value } = e.target;
        setProduct(prevpro => (
            {
                ...prevpro,
                [name]: value
            }
        ))
    }

    const handleevent = (e) => {
        e.preventDefault();
        handleform();

    }
    const handleform = async () => {
        let isvalid = true;
        const { name, price, stock } = Product;
        if (!name || !price || !stock) {
            alert("Please fill out all fields before submitting.");
            isvalid = false;
        }
        if (name.length <= 5) {
            alert("Name should be 5 letters")
            isvalid = false;
        }
        if (parseFloat(price) <= 100) {
            alert("price should be above 100")
            isvalid = false;
        }

        if (parseInt(stock) <= 5) {
            alert("Stock should be above 10")
            isvalid = false;
        }
        if (isvalid) {

            try {
                if (update) {
                    await updatebyid(Product)
                    alert("Product updated successfully")
                }
                else {
                    await Addproduct(Product);
                    alert("product added successfully")
                    setProduct({
                        name: '',
                        category: "Mobile",
                        price: '',
                        stock: "",
                        orderstatus: "Available"
                    })
                }
                toggle();
            }

            catch (error) {
                console.log(error)
            }

        }
    }
    return (
        <>
            <div classname="container">

                <form onSubmit={handleevent}>

                    <div className="mb-3">
                        <label htmlFor="name" > Product Name </label>

                        <input type="text" placeholder="Enter Product name" id="name" className="form-control" onChange={handlechange} value={Product.name} name="name" />

                        <label htmlFor="selection" id="cat">Choose Category</label>
                        <select id="selection" onChange={handlechange} value={Product.category} name="category">
                            <option>Mobile</option>
                            <option>Eelectronics</option>
                            <option>Grocery</option>
                            <option>Fashion</option>
                        </select>
                        <label htmlFor="price">Add Price</label>
                        <input type="number" onChange={handlechange} value={Product.price} placeholder="Enter product price" className="form-control" id="price" name="price" />
                        <label htmlFor="stock"> No of Stocks </label>
                        <input type="number" id="stock" className="form-control" onChange={handlechange} value={Product.stock} name="stock" />
                        <label htmlFor="radioTrue" className="form-check-label " id="orderst">Order Status :</label>
                        <select id="selection" onChange={handlechange} value={Product.orderstatus} name="orderstatus">

                            <option >Available</option>
                            <option >NotAvailable</option>

                        </select>

                        <input type="submit" value={update == true ? "Update Product" : "Add Product"} className='btn btn-primary' id="add" />
                        <h4 id="emoji" onClick={() => toggle()} >❌</h4>
                    </div>

                </form>

            </div>


        </>
    )
}

export default Form;