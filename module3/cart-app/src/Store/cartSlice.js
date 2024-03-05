import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart(state,action){ // actions
            return [...state, action.payload]
        },
        removeFromCart(){ //actions
            
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;