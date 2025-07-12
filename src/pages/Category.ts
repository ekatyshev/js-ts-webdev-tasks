import { getProductsByCategory } from "../api/productsApi.ts";
import {Product } from "../components/Product.ts";
import {type IProduct } from "../types.ts";

export function Category(params: { categorySlug: string }) {

    const main = document.createElement('main');
    main.classList.add('main');

    const slug = params.categorySlug

    getProductsByCategory(slug).then(({products}: any) => {
        products.forEach((product: IProduct) => {
            const productElement = Product(product);
            main.append(productElement);
        })
    })
    return main
}
