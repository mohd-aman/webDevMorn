import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../Store/cartSlice";


export default function Cart(){
    const items = useSelector((state)=>state.cart)
    const dispatch = useDispatch();
    function handleRemove(itemId){
        dispatch(removeFromCart(itemId));
    }
    
    return(
        <div className="cartWrapper">
            {items.map((item)=>{
                return <div className="cartCard">
                    <img src={item.image} alt="product" />
                    <h5>{item.title}</h5>
                    <h5>Price : ${item.price}</h5>
                    <button className="remove-btn"
                        onClick={()=>handleRemove(item.id)}
                    >Remove from Cart</button>
                </div>    
            })}
        </div>
    )
}