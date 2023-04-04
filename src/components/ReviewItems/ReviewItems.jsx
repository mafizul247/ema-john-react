import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItems = ({ product, handelRemoveFormCart }) => {
    console.log(product);
    const { id, img, name, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <h4 className='product-title'>{name}</h4>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Shipping Charge: <span className='orange-text'>${shipping}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handelRemoveFormCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItems;