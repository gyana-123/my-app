import React from 'react'
import { useState } from 'react';
import { Link, useNavigate,useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {

  const location = useLocation()
React.useEffect(()=>{
console.log("props",location)

},[])

    const [name, namechange] = useState(location.state.username.name);
    const [category, categorychange] = useState(location.state.username.category);
    const [price, pricechange] = useState(location.state.username.price);
    const [quantity, quantitychange] = useState(location.state.username.quantity);
    const [description, descriptionchange] = useState(location.state.username.description);
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        let obj ={name, category, sku:"ghh", quantity, price, description, image:"random.jpg"}
       
       
        let token = sessionStorage.getItem('jwttoken'); // let token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTFlODU5NDBiYjRkMDU4MDc4ZjcyYyIsImlhdCI6MTY3NTg1MTk5M30.QiWftgiLjueZ16ZoPAarkOCMmaPeL354Gi8AX15CZq0";
        fetch(`https://inventory-api-hn6i.onrender.com/api/products/${location.state.username._id}`, {
            method: "PATCH",
              headers: {
                        'Authorization': 'bearer ' + token,
                        'content-type': "application/json"
                    },
            // headers: { 'content-type': 'application/json' },    
            body: JSON.stringify(obj)
        }).then((res) => {
            if(res.status===200){
            console.log(res)
            toast.success('product updated successfully.')
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
   <div><button type="submit" className="btn btn-primary">Update Product</button></div>
  </form></div>
  </>
  )
}

export default UpdateProduct