import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Phone',
            price: 999,
            qty: 1,
            img: ''
        }
    }
    increaseQty = () =>{
        //setSate form 1
        // this.setState({
        //     qty: this.state.qty +1
        // });

        //setState form 2 - when prevState is required
        this.setState((prevState) => {
            return {
                qty: this.state.qty + 1
            }
        });
    }
    decreaseQty = () =>{
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return {
                qty: this.state.qty - 1
            }
        });
    }
    render(){
        const {title,price,qty} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs. {price}</div>
                    <div style={ {color: '#777'} }>Qty : {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img
                         alt='increase' 
                         className='action-icons'
                         src='https://cdn-icons-png.flaticon.com/128/992/992651.png'
                         onClick={this.increaseQty}
                        />
                        <img 
                         alt='decrease' 
                         className='action-icons' 
                         src='https://cdn-icons-png.flaticon.com/128/3478/3478534.png'
                         onClick={this.decreaseQty}
                        />
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