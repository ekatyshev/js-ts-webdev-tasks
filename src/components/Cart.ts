import {type CartItem, type Cart, type IProduct} from "../types.ts";
import {getProductById} from "../api/productsApi.ts";

export class Cart {
    private items: CartItem[];
    private subtotal: number;
    private discount: number;
    private discountPercentage: number;
    private total: number;

    constructor() {
        this.items = []
        this.subtotal = 0;
        this.discount = 0;
        this.discountPercentage = 0;
        this.total = 0;
    }

    addToCart(id: number, quantity: number): void {
        const cartItem: CartItem = {
            id: id,
            quantity: quantity,
        }

        const product = getProductById(id).then((product: IProduct) => {
            this.subtotal += product.price;
            this.discount += product.discount;
        })

        this.items.push(cartItem);

        const item = getProductById(product.id)

        this.subtotal
    }
}

const cart = new Cart()