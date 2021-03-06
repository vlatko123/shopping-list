import React from "react";
import ProductCard from "./ProductCard";
import "../Components/ProductList.css";

const ProductList = ({ products, addToCart, loading }) => {

  return (
    <div className="products-wrapper">
      {products.map((product, index) => {
        return (
          <ProductCard key={index}>
            <div className="card">
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">
                {product.price} {product.text}
              </p>
              <button className="btn" onClick={() => addToCart(index)}>Add to cart</button>
            </div>
          </ProductCard>
        );
      })}
    </div>
  );
};

export default ProductList;
