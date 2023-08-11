import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


class App extends React.Component {
   constructor(){
        super();
        this.state = {
            products: [],
            loading: true
        }
        this.db = firebase.firestore()
    }

    componentDidMount(){
      // firebase
      //       .firestore()
      //       .collection('products')
      //       .get()
      //       .then((snapshot) => {
      //         console.log(snapshot);

      //         snapshot.docs.forEach((doc) => {
      //             console.log(doc.data());
      //         })

      //         const products = snapshot.docs.map((doc) => {
      //           const data = doc.data();
      //           data['id'] = doc.id;
      //           return data;
      //         })

      //         this.setState({
      //           products,
      //           loading: false
      //         });
      //       })

      this.db
            .collection('products')
            .onSnapshot((snapshot) => {
              console.log(snapshot);

              snapshot.docs.forEach((doc) => {
                  console.log(doc.data());
              })

              const products = snapshot.docs.map((doc) => {
                const data = doc.data();
                data['id'] = doc.id;
                return data;
              })

              this.setState({
                products,
                loading: false
              });
            });
    }

    handleIncreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        // products[index].qty += 1;

        // this.setState({
        //     products
        // });

        const docRef = this.db.collection('products').doc(products[index].id);

        docRef
            .update({
              qty: products[index].qty+1
            })
            .then(()=>{
              console.log('Updated Sucessfully');
            })
            .catch((error) => {
              console.log('ERROR : ',error);
            })
    }
    handleDecreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        // products[index].qty -= 1;

        // this.setState({
        //     products
        // });
        const docRef = this.db.collection('products').doc(products[index].id);

        docRef
            .update({
              qty: products[index].qty-1
            })
            .then(()=>{
              console.log('Updated Sucessfully');
            })
            .catch((error) => {
              console.log('ERROR : ',error);
            })
    }
    handleDeleteProduct = (id)=>{
        //const {products} = this.state;
        // const items = products.filter((item)=> item.id !== id);

        // this.setState({
        //     products: items
        // });
        const docRef = this.db.collection('products').doc(id);

        docRef
          .delete()
          .then(()=>{
              console.log('Deleted Sucessfully');
            })
            .catch((error) => {
              console.log('ERROR : ',error);
            })

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

    addProduct = () => {
      this.db
      .collection('products')
      .add({
        img: '',
        price: 9000,
        qty: 2,
        title: 'Washing Machine'
      })
      .then((docRef) => {
        console.log('Product has been added ', docRef);
      })
      .catch((error)=>{
        console.error('Error : ',error);
      })
    }


  render(){
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCount()}
        />
        {/* <button onClick={this.addProduct} style={{ padding:15 ,fontSize:15 }}>Add Product</button> */}
        <Cart 
          products = {products}
          handleIncreaseQuantity = {this.handleIncreaseQuantity} 
          handleDecreaseQuantity = {this.handleDecreaseQuantity} 
          handleDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading....</h1>}
        <div>TOTAL: {this.getTotal()}</div>
      </div>
      
    );
  }
  
}

export default App;
