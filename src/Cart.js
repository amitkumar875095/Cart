import React from 'react';
 import CartItem from "./CartItem";
 import "./index"
class Cart extends  React.Component{
    constructor(){
        super();
        this.state = {
            products : [
         { price : 999,
          title : 'Phone',
          qty : 1,
          img : '',
          id : 1,},
          { price : 999,
            title : 'Laptop',
            qty : 1,
            img : '',
            id : 3,},
            { price : 999,
                title : 'Watch',
                qty : 1,
                img : '',
                id : 2,}
          
        ]
        }
       // this.increase = this.increase.bind(this);
      //  this.testing();
      }
    render(){
        const {products} = this.state;
        return (
            <div className='cart'>
         
       {     products.map((items) => {
              return    <CartItem items = {items} key={items.id}/>
            })}
            </div>
        )
    }
}
export default Cart;