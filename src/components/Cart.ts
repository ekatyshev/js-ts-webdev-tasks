import {type CartItem, type IProduct} from "../types.ts";
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

    getItems() {
        return this.items
    }

    getSubtotal() {
        return this.subtotal
    }

    getDiscount() {
        return this.discount
    }

    getDiscountPercentage() {
        return this.discountPercentage
    }

    getTotal() {
        return this.total
    }

    recalculateCart() {
        this.subtotal = 0;
        this.discount = 0;
        this.discountPercentage = 0;
        this.total = 0;
        this.items.forEach(item => {
            getProductById(item.id).then((product: IProduct) => {
                this.total += product.price
            })
        })
    }

    addToCart(id: string, quantity: number): void {

        const index = this.items.findIndex(item => item.id === id);

        if (index !== -1) {
            this.items[index].quantity += quantity;
        } else {
            const cartItem = {
                id: id,
                quantity: quantity,
            }

            this.items.push(cartItem);
        }

        this.recalculateCart();
        console.log(this.items);
    }

    removeFromCart(id: string): void {
        const index = this.items.findIndex(item => item.id === id);

        if (index !== -1) {
            this.items.splice(index, 1);
        }

        this.recalculateCart()
    }
}