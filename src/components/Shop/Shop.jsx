import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(products);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addProduct = products.find(product => product.id === id);
            if (addProduct) {
                const quantity = storedCart[id];
                addProduct.quantity = quantity;
                savedCart.push(addProduct);
            }
            // console.log('product', addProduct);
        }
        setCart(savedCart);
    }, [products])

    /*
    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart);
        for (const id in storedCart) {
            // console.log(id);
            const addProduct = products.find(product => product.id === id);
            const quantity = storedCart[id];
            addProduct.quantity = quantity;
            console.log(addProduct);
        }
    }, [products]) */

    const handlerAddToCart = (product) => {
        // console.log(product);
        let newCart = [];
        // const newCart = [...cart, product];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }

    const handelRemoveItemsAll = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handelRemoveItemsAll={handelRemoveItemsAll}
                >
                    <Link to='/orders'>
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;