import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Phone',
            price: 999,
            qyt: 1,
            img: ''
        }
    }
    increaseQty = () =>{
        //this.state.qyt
        let qty = this.state.qyt + 1;
        this.state.qyt = qty;
        console.log(this.state.qyt);
    }
    render(){
        const {title,price,qyt} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs. {price}</div>
                    <div style={ {color: '#777'} }>Qty : {qyt}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img
                         alt='increase' 
                         className='action-icons'
                         src='https://cdn-icons-png.flaticon.com/128/992/992651.png'
                         onClick={this.increaseQty}
                        />
                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/3478/3478534.png'/>
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/3405/3405244.png'/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;