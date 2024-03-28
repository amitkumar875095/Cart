import React from 'react';
const Navbar = (props)=>{

        return(

        <div style={style.nav}>
            <div style = {style.cartContainer}>
                <img src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' style={style.icon} alt = "cart-icon"/>
                <span style={style.cartCount}>{props.count}</span>
            </div>
        </div>
        )
    }

const style = {
    nav : {
    width : '100%',
    height : '10vh',
    backgroundColor : "blue",
    display : 'flex',
 
    justifyContent : "flex-end",
    alignItems : "center",

    },
    icon :{
      marginRight : 10,
      height : '100%',
      width : 30,
    },
    cartContainer : {
      position : 'relative',
    },
    cartCount : {
        position : "absolute",
        height : 20,
      
        padding : '4px 8px',
        backgroundColor : "yellow",
          top : -9,
          right : 0,
          borderRadius : '50%',
    }
    
}
export default Navbar;