import {getCategories} from "../api/productsApi.ts";
import type {ICategory} from "../types.ts";
import {CategoryCard} from "../components/CategoryCard.ts";

export function CategoriesPage() {

    const main = document.createElement('main');
    main.classList.add('main');

    main.innerHTML = '<h2>Categories</h2>'

    getCategories().then((categories: any) => {
        categories.forEach((category: ICategory) => {
            const categoryElement = CategoryCard(category);
            main.append(categoryElement);
        })
    })

    return main
}