import {Cart} from '../components/Cart'
import {ProductCard} from "../components/productCard/ProductCard.ts";
import {getProductById} from "../api/productsApi.ts";

export function CartPage(param: string, cart: Cart) {

    // // TODO Delete. Mock cart
    // cart = new Cart()
    // cart.addToCart('24', 20)

    const main = document.createElement('main');
    main.classList.add('main');

    const items = cart.getItems()

    const cartItemList = document.createElement('div')
    cartItemList.classList.add('cart-item-list');

    if (items.length > 0) {
        items.forEach((item) => {
            getProductById(item.id).then((product) => {
                const productCard = ProductCard(product)
                cartItemList.append(productCard)
            })
        })
    } else {

    }

    main.append(cartItemList)

    return main
}