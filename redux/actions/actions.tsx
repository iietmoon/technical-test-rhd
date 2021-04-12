import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from "./types";

export function addToCart(productInfo:any, quantity:any){
    return {
        type: ADD_TO_CART,
        productInfo, 
        quantity
    }
}
export function removeFromCart(index:any){
    return {
        type: REMOVE_FROM_CART,
        index
    }
}
export function clearCart(){
    return {
        type: CLEAR_CART,
    }
}