import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let total = 0
    let shippingCharge = 0
    for(const product of cart){
        total = total + product.price
        shippingCharge = shippingCharge + product.shipping
    }
    const tax = total*7/100
    const GrandTotal = total + shippingCharge + tax
    return (
        <div className='orderSummery'>
            <h2>Order Summery</h2>
            <h3>Select Items : {cart.length} </h3>
            <h3>Total Price : ${total}</h3>
            <h3>Total Shipping Charge : ${shippingCharge}</h3>
            <h3>Tax : ${tax.toFixed(2)}</h3>
            <h2>Grand Total :${GrandTotal.toFixed(2)}</h2>

        </div>
    );
};

export default Cart;