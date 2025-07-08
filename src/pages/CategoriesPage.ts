import {getCategories} from "../api/productsApi.ts";
import type {ICategory} from "../types.ts";
import {Category} from "../components/Category.ts";

export function CategoriesPage() {

    const main = document.createElement('main');
    main.classList.add('main');

    getCategories().then((categories: any) => {
        console.log(categories);
        categories.forEach((category: ICategory) => {
            const categoryElement = Category(category);
            main.append(categoryElement);
        })
    })

    return main
}