
import React from 'react'
import { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

const Product = () => {
    const navigate = useNavigate();
    var token = sessionStorage.getItem('jwttoken');

    const [data, setData]= useState([])
    useEffect( ()=> {
    let username = sessionStorage.getItem('username');
    if (username === '' || username === null) {
        navigate('/login')
    }else  { 
      getList();
                      
 }

},[])

function getList(){
  fetch("https://inventory-api-hn6i.onrender.com/api/products",{
    headers: {
                   'Authorization': 'bearer ' + token
               }
           }).then((res) => {
       return res.json();
      }).then((res) => {
          setData(res);
          console.log(res)
              
                   }).catch((err) => {
                       console.log(err.messsage)
                   });
}

     function DeleteProduct(id){
      fetch(`https://inventory-api-hn6i.onrender.com/api/products/${id}`,{
        method: 'DELETE',
      headers: {
        'Authorization': 'bearer ' + token,
     
      }}).then((result)=>{
        result.json()
        console.log(result,"delete")
     if(result.status===200){
        
        toast.success('product delete successfully.');
        getList();
        
      }
        else toast.error(" error")
       
      })

     } 

  return (
    <div>
         <div>List of Products</div> <Link className="btn btn-success" to={'/addProduct'}> Add Product</Link>
         
        <table className="table">
   
    <thead>
      <tr>
        <th scope="col">Serial</th>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col">Price</th>
        <th scope='col'>Quantity</th>
        <th scope='col'>Value</th>
        <th scope='col'>Action</th>
      </tr>
    </thead>
    <tbody>
      


    {
        data.map((item, index) => 
        <tr>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>${item.price}</td>
        <td><Link className="btn btn-success" to={'/updateProduct'} state={{username:item}} > update Product</Link>
        <button className="btn btn-danger" onClick={()=>DeleteProduct(item._id)}>Delete</button></td>
      </tr>)
    }
       
      
    </tbody>
  </table></div>
    
  )
}

export default Product