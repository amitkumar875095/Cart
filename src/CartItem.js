import React from 'react'

class CartItem extends React.Component{
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
           
             <img alt = "increase" className = "action-icons" src = "https://cdn-icons-png.flaticon.com/512/2997/2997933.png" onClick = {()=>this.props.increase(this.props.items)} />
             <img alt = "decrease" className = "action-icons" src = "https://cdn-icons-png.flaticon.com/512/1828/1828899.png" onClick = {()=>this.props.decrease(this.props.items)}/>
             <img alt = "delete" className = "action-icons" src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png"  onClick = {()=>this.props.delete(this.props.items.id)}  />
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