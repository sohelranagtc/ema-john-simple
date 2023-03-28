import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props)
    const {img, name, price, ratings, seller} = props.product
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='product'>
        <div className='product-details'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h4>Price: ${price}</h4>
            <h4>Manufacturer : {seller}</h4>
            <h4>Ratings : {ratings} star</h4>
        </div>
            <button 
            onClick={()=>handleAddToCart(props.product)}>
            Add to Cart element 
            <FontAwesomeIcon icon = {faShoppingCart} /></button>
        </div>
    );
};

export default Product;