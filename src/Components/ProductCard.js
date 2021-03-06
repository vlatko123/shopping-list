import React from 'react';
import '../Components/ProductCard.css';

const ProductCard = (props) => {
    return(
        <div className="card-size">
            {props.children}
        </div>
    )
}

export default ProductCard;