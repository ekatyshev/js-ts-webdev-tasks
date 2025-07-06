import { getProductById } from "../api/productsApi.ts";
import { Product } from "../components/Product.ts";
import {type IProduct } from "../types.ts";

export function ProductDetailPage(params: { data: { postId: string } }) {

    const main = document.createElement('main');
    main.classList.add('main');

    const id = params.data.postId

    getProductById(id).then((value: IProduct) => {
        const productElement = Product(value)
        main.append(productElement)
    })
    return main
}
