import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
     const [cart, setCart] = useState([])
     
    const handleAddToCart = (product) => {
        const  NewCart = [...cart, product]
        setCart(NewCart)
    }
  
    return (
        <div className='Shop-Container'>
            <div className="products-container">
                {
                    products.map(product => 
                    <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;