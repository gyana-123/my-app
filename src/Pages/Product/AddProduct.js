import React from 'react'
import { useState } from 'react';
import { Link, useNavigate,useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {

  const location = useLocation()
React.useEffect(()=>{
console.log("props",location)

},[])
var [name, namechange] = useState("");
 var [category, categorychange] = useState("");
 var [price, pricechange] = useState("");
 var [quantity, quantitychange] = useState("");
 var [description, descriptionchange] = useState("");

    // if(location.state != null){
    //   name= location.state.username.name;
    //   category= location.state.username.category;
    //   price= location.state.username.price;
    //   quantity= location.state.username.quantity;
    //   description= location.state.username.description;
    // }


    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        let obj ={name, category, sku:"ghh", quantity, price, description, image:"random.jpg"}
       
       
        let token = sessionStorage.getItem('jwttoken'); // let token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTFlODU5NDBiYjRkMDU4MDc4ZjcyYyIsImlhdCI6MTY3NTg1MTk5M30.QiWftgiLjueZ16ZoPAarkOCMmaPeL354Gi8AX15CZq0";
        fetch("https://inventory-api-hn6i.onrender.com/api/products", {
            method: "POST",
             
            headers: {
                        'Authorization': 'bearer ' + token,
                        'content-type': "application/json",
                    },
            // headers: { 'content-type': 'application/json' },    
            body: JSON.stringify(obj)
        }).then((res) => {
            if(res.status===201){
            console.log(res)
            toast.success('product added successfully.')
            navigate('/');}
            else{
                toast.error("something missing");
            }
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        });

    }
  return (<>
    <div className="d-flex justify-content-center"><form onSubmit={handlesubmit}>
    <div className="form-row">
      <div className="form-group col-md">
        <label >Product Name</label>
        <input value={name} onChange={e => namechange(e.target.value)} className="form-control" ></input>
      </div>
      <div className="form-group col-md">
        <label >Product Category</label>
        <input value={category} onChange={e => categorychange(e.target.value)} className="form-control" ></input>
      </div>
    </div>
    <div className="form-group col-md">
      <label >Product Price</label>
      <input value={price} onChange={e => pricechange(e.target.value)} className="form-control" ></input>
    </div>
    <div className="form-group col-md">
      <label >Product Quantity</label>
      <input value={quantity} onChange={e => quantitychange(e.target.value)} className="form-control" ></input>
    </div>
    
      <div className="form-group col-md">
        <label >Description</label>
        <input value={description} onChange={e => descriptionchange(e.target.value)} className="form-control" ></input>
      </div>
     
      <br></br>
   <div><button type="submit" className="btn btn-primary">Add Product</button></div>
  </form></div>
  </>
  )
}

export default AddProduct