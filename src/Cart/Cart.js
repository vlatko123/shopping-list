import React from "react";
import ProductCard from "../Components/ProductCard";
import "../Cart/Cart.css";

const Cart = ({ cartProducts, removeHandler }) => {

  let sumOfProducts = cartProducts.map((product, index) =>{
    return(
      product.price
    )
  })


  
  return (
    <div>
      <div className="checkout-wrapper">
      <div className="amount">
        
        {sumOfProducts.reduce((acc, current) => {
          return(
            acc + current
          )
        }, 0)+ " MKD" 
        }

      </div>
      <div className = "checkout" >
        <button className="btn-checkout" disabled>Checkout</button>
      </div>
        </div> 
      
      
      <div className="product-wrapper">
        {cartProducts.map((product, index) => {
          return (
            <ProductCard key={index}>
              <div className="card">
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
                <p className="price">
                  {product.price} {product.text}
                </p>

                <button className="btn" onClick={() => removeHandler(index)}>
                  Remove
                </button>
              </div>
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
