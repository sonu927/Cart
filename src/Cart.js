import React from 'react';
import CartItem from './CartItem';

const Cart = (props)=>{
   
   
        const {products} = props;
        return (
            <div className='cart'>
                {products.map((product)=>{
                    return <CartItem product = {product} 
                    key={product.id}
                    onIncreaseQuantity = {props.handleIncreaseQuantity} 
                    onDecreaseQuantity = {props.handleDecreaseQuantity} 
                    onDeleteProduct = {props.handleDeleteProduct}
                    />
                })}
                
            </div>
        );
    
}



export default Cart;