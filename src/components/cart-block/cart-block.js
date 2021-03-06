import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';
import './cart-block.css';
import { CartMenu } from '../cart-menu'; 
import { calcTotalPrice } from '../utils';
import { ItemsInCart} from '../items-in-cart';
import { useNavigate } from 'react-router-dom';

export const CartBlock = () => {
  const [isCartMenuVisible,setIsCartMenuVisible] = useState(false);
  const items =useSelector(state=>state.cart.itemsInCart);
  const totalPrice=calcTotalPrice(items);
  const navigate=useNavigate();


  const  handleClick=()=>{
    setIsCartMenuVisible(false);
    navigate(`/order`,{replace: true});
  
  }
  return (
        <div className="cart-block">
        <ItemsInCart quantity={items.length}/>
        <BiCartAlt size={30} className="cart-block__icon" onClick={()=> setIsCartMenuVisible(!isCartMenuVisible)} />  
        { totalPrice > 0 ?<span className="cart-block__total-price">{totalPrice}</span> :null}
       {isCartMenuVisible && <CartMenu items = {items} onClick={handleClick} />}
    </div>
  )
}
