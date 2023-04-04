import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // console.log(products);

    const storedCart = getShoppingCart();
    // console.log(storedCart);
    const saveCart = [];

    for (const id in storedCart) {
        const addProduct = products.find(product => product.id === id);
        if (addProduct) {
            const quantity = storedCart[id];
            addProduct.quantity = quantity;
            saveCart.push(addProduct);
        }
    }

    // if need to send tow return
    // return [products, saveCart];
    // return { products, cart: saveCart }
    return saveCart;
}

export { cartProductsLoader };