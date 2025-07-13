import {getCategories} from "../../api/productsApi.ts";
import type {ICategory} from "../../types.ts";
import {CategoryCard} from "../../components/categoryCard/CategoryCard.ts";
import './CategoriesPage.sass'

export function CategoriesPage() {

    const main = document.createElement('main');
    main.classList.add('main');

    main.innerHTML = `


<div class="cover__wrapper">
    <div class="cover content-max-width">
        <div class="cover__slogan">FIND <u>ANYTHING</u> THAT MATCHES YOUR STYLE</div>
        <div class="cover__description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
        <a class="show-now" href="#">Shop Now</a>
        <ul class="numbers">
            <li>
                <div>200+</div>
                <p>International Brands</p>
            </li>
            <li>
                <div>2,000+</div>
                <p>High-Quality Products</p>
            </li>
            <li>
                <div>30,000+</div>
                <p>Happy Customers</p>
            </li>
        </ul>
    </div>
</div>

<div class="brand-band__wrapper">
  <ul class="brand-band content-max-width">
      <li class="brand-band__item brand-band__item_versace"></li>
      <li class="brand-band__item brand-band__item_zara"></li>
      <li class="brand-band__item brand-band__item_gucci"></li>
      <li class="brand-band__item brand-band__item_prada"></li>
      <li class="brand-band__item brand-band__item_calvin-klein"></li>
  </ul>
</div>
`

    const categoryListWrapper = document.createElement('article');
    categoryListWrapper.classList.add('categories__wrapper');
    categoryListWrapper.innerHTML = `<h2 class="content-max-width">Categories</h2>`
    const categoryList = document.createElement('div');
    categoryList.classList.add('categories', 'content-max-width');

    getCategories().then((categories: any) => {
        categories.forEach((category: ICategory) => {
            const categoryElement = CategoryCard(category);
          categoryList.append(categoryElement);
        })
    })

    categoryListWrapper.appendChild(categoryList);
    main.appendChild(categoryListWrapper);

    return main
}