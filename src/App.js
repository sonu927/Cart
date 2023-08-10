import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
   constructor(){
        super();
        this.state = {
            products: [
                {
                    title: 'Phone',
                    price: 999,
                    qty: 2,
                    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                    id: 1
                },
                {
                    title: 'Watch',
                    price: 99,
                    qty: 10,
                    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                    id: 2
                },
                {
                    title: 'Laptop',
                    price: 9999,
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products
        });
    }
    handleDecreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;

        this.setState({
            products
        });
    }
    handleDeleteProduct = (id)=>{
        const {products} = this.state;
        const items = products.filter((item)=> item.id !== id);

        this.setState({
            products: items
        });
    }
    getCount = ()=>{
      const {products} = this.state;
      let count = 0;

      products.forEach((product)=>{
        count += product.qty;
      })

      return count;
    }
    getTotal = ()=>{
      const {products} = this.state;
      let total = 0;

      products.forEach((product)=>{
        total += product.qty*product.price;
      });

      return total;
    }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCount()}
        />
        <Cart 
          products = {products}
          handleIncreaseQuantity = {this.handleIncreaseQuantity} 
          handleDecreaseQuantity = {this.handleDecreaseQuantity} 
          handleDeleteProduct = {this.handleDeleteProduct}
        />
        <div>TOTAL: {this.getTotal()}</div>
      </div>
      
    );
  }
  
}

export default App;
