import React, { Component } from "react";
import "../Home/Home.css";
import { products } from "../list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import ProductList from "../Components/ProductList";

class Home extends Component {
  state = {
    products: [],
    cart: [],
    isLoaded: false
  };

  componentDidMount() {
    this.setState({
      products: products,
      isLoaded: true
    });
  }

  
  addClickHandler = (itemIndex) => {
    let product = this.state.products.filter(
      (item, index) => index === itemIndex
    );
       
    this.setState({
      cart: this.state.cart.concat(product)
    })
    console.log(this.state.cart);

    //
    // let product = this.state.products.find((item, index) => itemIndex === index);
    // this.setState({cart: this.state.cart.push(product)})
    // console.log(this.state.cart)
  };

  removeItemHandler = (itemIndex) => {
    let removedItem = this.state.cart.filter(
      (item, index) => index !== itemIndex
    );
   
    this.setState({
      cart: removedItem
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <ProductList
                  products={this.state.products}
                  addToCart={(itemIndex) => this.addClickHandler(itemIndex)}
                  loading = {this.state.isLoaded}
                />
              )}
            />
            <Route
              path="/cart/"
              render={() => <Cart cartProducts={this.state.cart} removeHandler={(itemIndex) => this.removeItemHandler(itemIndex)}></Cart>}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
