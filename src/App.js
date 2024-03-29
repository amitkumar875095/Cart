
import React from 'react'
import Cart from "./cart"
import Navbar  from "./Navbar";
import app from './index'
import {getFirestore,collection, getDocs, onSnapshot} from 'firebase/firestore';

class App extends React.Component
 {
  constructor(){
    super();
    this.state = {
        products : [],
        loading : true,
  }}




  componentDidMount(){
    const db = getFirestore(app);
    const collectionRef =   collection(db,'Products');


    
    onSnapshot(collectionRef,(snapshot)=>{
       console.log(snapshot);

       const products = snapshot.docs.map((doc)=>{
        const data  = doc.data();
        data['id'] = doc.id;
        return doc.data();
      })
      console.log(products);
     this.setState({
      products : products,
      loading  : false,
     })})


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
  const {products , loading} = this.state;
  return (
    
    <div className="App">
      <Navbar
         count = {this.getCartCount()}
      />
      {loading&& <h1>Loading The data ..</h1>}
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
