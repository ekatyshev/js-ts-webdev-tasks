import {getProducts} from "../api/productsApi.ts";
import {Product } from "../components/Product.ts";
import {type IProduct } from "../types.ts";
export function Category() {

    const main = document.createElement('main');
    main.classList.add('main');

    getProducts().then(({products}: any) => {
        products.forEach((product: IProduct) => {
            const productElement = Product(product);
            main.append(productElement);
        })
    })
    return main
}
