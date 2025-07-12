import { getProductsByCategory } from "../api/productsApi.ts";
import { ProductCard } from "../components/productCard/ProductCard.ts";
import { Filters } from "../components/filters/Filters.ts";
import {type IProduct } from "../types.ts";

export function Category(param: string) {

    const main = document.createElement('main');
    main.classList.add('main');

    const slug = param

    main.innerHTML = `
<article>
    <aside></aside>
    <h1>Category Name</h1>
</article>
`

    const brands: string[] = []

    getProductsByCategory(slug).then(({products}: any) => {
        products.forEach((product: IProduct) => {
            const productElement = ProductCard(product)
            if (!brands.includes(product.brand)) {
                brands.push(product.brand);
            }
            main.append(productElement)
        })

        const aside = main.querySelector('aside')
        aside?.append(Filters(brands))
    })

    return main
}
