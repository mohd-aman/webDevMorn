import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:'success'
    },
    reducers:{
        setProducts(state,action){
            return {...state, data: action.payload}
        },
        setStatus(state,action){
            return {...state, status:action.payload}
        }
    }
})

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer

//thunk -> a fxn which wraps another function
export function fetchProducts(){
    return async function(dispatch){
        dispatch(setStatus("loading"))
        try{
            let res = await axios.get('https://fakestoreapi.com/products');
            dispatch(setProducts(res.data));
            dispatch(setStatus("success"));
        }catch(error){
            dispatch(setStatus("error"));
        }
    }
}