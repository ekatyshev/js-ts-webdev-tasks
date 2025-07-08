import type {ICategory} from "../types.ts";
import router from "../router.ts";

export function Category(category: ICategory) {


    const template = document.createElement('template');

    const categoryCard = document.createElement('a');

    categoryCard.innerHTML = `${category.name}`

    categoryCard.addEventListener('click', () => {
        router.navigate(`/products/${category.slug}`)
    })

    return template.content.firstElementChild as HTMLElement;
}