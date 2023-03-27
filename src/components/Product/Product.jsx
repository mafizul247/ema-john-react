import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock, } = props.product;

    const handlerAddToCart = props.handlerAddToCart;

    return (
        <div className='product'>
            <div className='image'>
                <img src={img ? img : ''} alt="" />
            </div>
            <div className="product-info">
                <h5 className='product-name'>Name: {name}</h5>
                <p className='product-price'>Price: ${price}</p>
                <p className='manufacture'>Manufacturer: {seller}</p>
                <p className='rating'>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handlerAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;