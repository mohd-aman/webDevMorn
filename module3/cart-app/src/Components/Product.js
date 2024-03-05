import { useEffect, useState } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";

export default function Product(){
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();

    function handleAddtoCart(product){
        dispatch(addToCart(product)); // payload being the product
    }

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            console.log(res);
            setProducts(res.data);
        })
    },[])
    
    return(
        <div className="productsWrapper">
            {products.map((product)=>{
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