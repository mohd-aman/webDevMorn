import { useEffect, useState } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { fetchProducts } from "../Store/productSlice";

export default function Product(){
    const {data,status} = useSelector((state)=>state.product)
    const dispatch = useDispatch();

    function handleAddtoCart(product){
        dispatch(addToCart(product)); // payload being the product
    }

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

    if(status == 'loading'){
        return(
            <h2>...Loading</h2>
        )
    }else if(status == 'error'){
        return(
            <h2>OOPs, something went wrong!</h2>
        )
    }
    return(
        <div className="productsWrapper">
            {data.map((product)=>{
                return <div className="card">
                        <img src={product.image} alt="product"/>
                        <h6>{product.title}</h6>
                        <h5>{product.price}</h5>
                        <button onClick={()=>handleAddtoCart(product)} className="btn"> Add to Cart</button>
                    </div>
            })}
        </div>
    )
}