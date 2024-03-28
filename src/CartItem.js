import React from 'react'

class CartItem extends React.Component{
  
   // this.increase = this.increase.bind(this);
  //  this.testing();
  
 
  // testing=  ()=>{
  // var promise = new Promise((resolve,reject)=>{
  //   setTimeout(()=>{
      
  //     resolve('done');
  //   },5000);
  // })
  // promise.then(()=>{
     

  //  this.setState({qty : this.state.qty+10});

  //   this.setState({qty : this.state.qty+10});
  //   console.log('state',this.state);
  // })

  // }
  
  
  increase = ()=>{
    // this.state.qty += 1;\\
             /// set state also have another call back function ans it is a asynchronous 

    //set state form 1 
    // shallow mergin change state qty and react render automatically
    //if preState not required use this
    //  this.setState({
    //    qty : this.state.qty + 1,
    //  })

     //set state form 2
    // pass a call back function and pass a previous state to call back funtion
    // when previous state required to increase
      this.setState((preState)=>{
           return {
            //shallow mergin

            qty : preState.qty + 1,
           }
      },()=>{
        console.log(this.state);
      })

    console.log("test",this.state);
  }

  
  //Arrow function bind this value to the class
  // increase(){
  //    console.log("test",this.state);
  // }



  // decrease arrow function to bind to the class
   decrease = ()=>{
    const {qty} = this.state;
   {if(qty==0){
       return ;
    }}
   this.setState (
     //prestate used,
     (preState)=>{
      return {
        qty : preState.qty-1,
      }
     }
   )
   }
render(){
  {console.log("this props",this.props)};
  const {price,title,qty} = this.props.items;
    return(
     
        <div className='cart-item'>
           <div className='left-block'> 
              <img style={styles.image} />
           </div>
           <div className='right-block'>
             <div style={{fontSize : 25}}> {title}</div>
             <div style={{color: 'grey'}}>Rs :{price}</div>
             <div style={{color: 'grey'}}>qty :{qty}</div>
             <div className='cart-items-actions'>
            {
            // button
            }
           
             <img alt = "increase" className = "action-icons" src = "https://cdn-icons-png.flaticon.com/512/2997/2997933.png" onClick = {this.increase.bind(this)} />
             <img alt = "decrease" className = "action-icons" src = "https://cdn-icons-png.flaticon.com/512/1828/1828899.png" onClick = {this.decrease}/>
             <img alt = "delete" className = "action-icons" src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
             </div>
           </div>
        </div>
    )
}

}
 const styles = {
  image : {
    height : 110,
    width : 110,
    borderRadius :4, 
  }
 }
export default CartItem;