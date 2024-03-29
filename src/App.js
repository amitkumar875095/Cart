
import React from 'react'
import Cart from "./cart"
import Navbar  from "./Navbar";
import app from './index'
import {getFirestore,collection,query,where, getDocs, onSnapshot, Firestore,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';

class App extends React.Component
 {
  constructor(){
    super();
    this.state = {
        products : [],
        loading : true,
  };
  this.collectionRef = null;

}




  componentDidMount(){
    const db = getFirestore(app);
     this.collectionRef =   collection(db,'Products');
     console.log(this.collectionRef);
    const q = query(this.collectionRef,where('price','>',0));
     
  onSnapshot(this.collectionRef,(snapshot)=>{
    console.log(snapshot);
    const products = snapshot.docs.map((doc)=>{
     const dataRef  = doc.data();
     dataRef['id'] = doc.id;
     return dataRef;
   })
   console.log(products,"products");
   this.setState({
    products: products,
    loading : false,
  })
})}






  increase = (product) =>{
      console.log("increse the qty",product)
      const {products} = this.state;
      const index = products.indexOf(product);
      console.log(products);
      const productRef = doc(this.collectionRef,products[index].id);
    
    updateDoc(productRef,{
        qty : product.qty+1,
    })
    
        
  }
   decrease = (product) =>{
    console.log("decrease the qty",product);
    if(product.qty==0){
      return ;
    }
     const {products} = this.state;
     const index = products.indexOf(product);
     const productRef = doc(this.collectionRef,products[index].id);
     console.log(productRef,"docReff")
     updateDoc(productRef,{
      qty : product.qty-1,
     })
   }
delete = (id)=>{
    console.log("delete" , id)
    const {products} = this.state;
     const docRef = doc(this.collectionRef,id);
     deleteDoc(docRef);
    // const items = products.filter((item)=>item.id != id);
    // this.setState({
    //     products : items,
    // })

   

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



addProduct = ()=>{
  const items =  addDoc(this.collectionRef,{
    img : '',
    price : 55,
    qty : 2,
    title : 'Washing machine',
   })
  
}




render(){
  const {products , loading} = this.state;
  return (
    
    <div className="App">
      <Navbar
         count = {this.getCartCount()}
      />

      {/* // Add button */}
     <button onClick={this.addProduct} style={{padding : 20 ,fontSize : "1.5rem"}}>Add a Product</button>








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
