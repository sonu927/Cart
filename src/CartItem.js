import React from 'react';

class CartItem extends React.Component{
    render(){
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25} }>Phone</div>
                    <div style={ {color: '#777'} }>Rs. 999</div>
                    <div style={ {color: '#777'} }>Qty</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992651.png'/>
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