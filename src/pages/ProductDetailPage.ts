import {getProductById} from "../api/productsApi.ts";
import {type IProduct} from "../types.ts";
import {Cart} from "../components/Cart.ts";

export function ProductDetailPage(param: string, cart: Cart) {

    const main = document.createElement('main');
    main.classList.add('main');

    const id = param
    let piecesToBuy: number = 1

    getProductById(id).then((product: IProduct) => {
        const template = document.createElement('template');
        template.innerHTML = `
    <div>
        <div class="thumbnail-container">
            <img src="${product.thumbnail}" alt="Image of ${product.title}">
        </div>
        <h4 class="title">${product.title}</h4>
        <div class="rating">
            <span class="rating__stars"></span>
            <span class="rating__value">${product.rating}<span class="rating__max-rating">/5</span></span>
        </div>
        <div class="price">
            <h5 class="actual-price">$${product.price}</h5>
        </div>
    </div>
    `

        if (template.content.firstElementChild) {
            if (product.discountPercentage) {
                const price = template.content.firstElementChild.querySelector('.price');

                if (price) {
                    const discountPercentage = Math.floor(product.discountPercentage)
                    const oldPrice = Number((product.price * (1 + (discountPercentage / 100))).toFixed(2))
                    const discount = document.createElement('template')
                    discount.innerHTML = `
<div class="discount">
    <div class="old-price">$${oldPrice}</div>
    <div class="discount-percentage">${discountPercentage}</div>
</div>
`
                    price.appendChild(discount.content.firstElementChild)
                }
            }
        }

        const addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to Cart'
        addToCartButton.addEventListener('click', () => {
            cart.addToCart(id, piecesToBuy);
        })

        if (template.content.firstElementChild) {
            template.content.firstElementChild.append(addToCartButton)
            main.append(template.content.firstElementChild)
        }

    })

    return main
}
