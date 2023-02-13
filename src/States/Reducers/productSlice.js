import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


let token = sessionStorage.getItem('jwttoken');
export const getProduct = 
createAsyncThunk("api/products",async ()=>{
  return fetch("https://inventory-api-hn6i.onrender.com/api/products",{
    headers: {
                   'Authorization': 'bearer ' + token
               }
           }).then((res) => {
       return res.json()
     
            } 
            
        )
       
          }  )
      

export const productSlice= createSlice(({
    name: "product",
    initialState:{
        product :[],
        loading: false
            },
    extraReducers:
    {
        [getProduct.pending] : (state, action)=>{
            state.loading=true
        },
        [getProduct.fulfilled] :(state, action)=>{
            state.loading=false;
            state.product = action.payload
        },
        [getProduct.rejected]:(state,action)=>{
            state.loading =false;
        }
    }

}))

export default productSlice.reducer;