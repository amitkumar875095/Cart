
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
      title : 'Watch',
      qty : 1,
      img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id : 1,},
      { price : 999,
        title : 'Laptop',
        qty : 1,
        img : 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        id : 3,},
        { price : 999,
            title : 'Phone',
            qty : 1,
            img : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
getCartTotal = ()=>{
  let count =0;
   const {products} = this.state;
   products.forEach((product)=>{
    count += product.qty*product.price;
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
     <div style={{fontSize : 40, fontWeight : "700"}}>
       Total : {this.getCartTotal()}
     </div>
    </div>
  );
}
 }
export default App;
