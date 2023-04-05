import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const SaveCart = useLoaderData();
    const [cart, setCart] = useState(SaveCart);
    console.log(SaveCart);

    const handelRemoveFormCart = (id) => {
        console.log(id);
        const remainingItem = cart.filter(product => product.id !== id);
        setCart(remainingItem);
        removeFromDb(id);
    }

    const handelRemoveItemsAll = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='reviewItems'>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handelRemoveFormCart={handelRemoveFormCart}
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handelRemoveItemsAll={handelRemoveItemsAll}
                >
                    <Link to='/checkout'>
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;