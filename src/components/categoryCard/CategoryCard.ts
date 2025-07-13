import type { ICategory } from "../../types.ts";
import router from "../../router.ts";
import "./CategoryCard.sass";

export function CategoryCard(category: ICategory) {
  const template = document.createElement('template');
  const categoryCard = document.createElement('div');
  categoryCard.classList.add('category-card');
  categoryCard.innerHTML = `<div class="category-card__title">${category.name}</div>`;

  categoryCard.addEventListener("click", () => {
    router.navigate(`/category/${category.slug}`);
  });

  if (template.content) {
    template.content.append(categoryCard);
  }

  console.log(template);

  return template.content.firstElementChild as HTMLElement;
}
