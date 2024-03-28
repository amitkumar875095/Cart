import React from 'react';
import CartItem from "./CartItem";
 import "./index"
const Cart = (props)=>{
   
   
        const {products} = props;
        return (
            <div className='cart'>
         
       {     products.map((items) => {
              return    <CartItem 
            
              items = {items}
              increase = {props.increase}
              decrease = {props.decrease}
              delete = {props.delete}
              />
            })}
            </div>
        )
    }

export default Cart;