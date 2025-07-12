import { type CartItem } from "../types.ts";

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
        const cartItem = {
            id: id,
            quantity: quantity,
        }

        this.items.push(cartItem);
        recalculateCart();
    }

    getCart(): void {
        return {
            items: this.items,
            subtotal: this.subtotal,
            discount: this.discount,
            discountPercentage: this.discountPercentage,
            total: this.total,
        }
    }

    recalculateCart() {

    }
}

const cart = new Cart()