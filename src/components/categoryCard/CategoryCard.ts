import type {ICategory} from "../../types.ts";
import router from "../../router.ts";
import './CategoryCard.sass';

export function CategoryCard(category: ICategory) {

    const template = document.createElement('template');

    template.innerHTML = `<div class="category-card"></div>>`

    const categoryCardLink = document.createElement('div');
    //  categoryCardLink.setAttribute('href', `/category/${category.slug}`);
    categoryCardLink.innerText = category.name;

    categoryCardLink.addEventListener('click', () => {
        router.navigate(`/category/${category.slug}`)
    })

    if (template.content.firstElementChild) {
        template.content.firstElementChild.appendChild(categoryCardLink);
    }

    return template.content.firstElementChild as HTMLElement;
}