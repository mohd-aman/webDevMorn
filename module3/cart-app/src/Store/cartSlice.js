import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart(state,action){ // actions
            return [...state, action.payload]
        },
        removeFromCart(state, action){ //actions
            return state.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;