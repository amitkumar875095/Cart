
import React from 'react'
import Cart from "./cart"
import Navbar  from "./Navbar";
class App extends React.Component
 {
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
  increase = (product) =>{
      console.log("increse the qty",product)
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;
      this.setState ({
        products : products,
      })
  }
   decrease = (product) =>{
    console.log("decrease the qty",product);
     const {products} = this.state;
     const index = products.indexOf(product);
     {if(products[index].qty==0){
          return 
     }}
     products[index].qty -=1;
     this.setState({
        products
     })
}
delete = (id)=>{
    console.log("delete" , id)
    const {products} = this.state;
   
    const items = products.filter((item)=>item.id != id);
    this.setState({
        products : items,
    })
}
 getCartCount =()=>{
    const {products} = this.state;
    let count =0;
    products.forEach((product)=>{
      count += product.qty;
    })
    return count;

}

render(){
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar
         count = {this.getCartCount()}
      />
     <Cart
     products = {products}
     increase = {this.increase}
     decrease = {this.decrease}
     delete = {this.delete}/>
    </div>
  );
}
 }
export default App;
