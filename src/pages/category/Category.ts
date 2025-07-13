import { getCategories, getProductsByCategory } from "../../api/productsApi.ts";
import { ProductCard } from "../../components/productCard/ProductCard.ts";
import { Filters } from "../../components/filters/Filters.ts";
import { type ICategory, type IProduct } from "../../types.ts";
import "./Category.sass";

export function Category(param: string) {
  const main = document.createElement("main");
  main.classList.add("main");

  const slug = param;
  let name = `Category hasn't found`;

  const brands: string[] = [];

  getCategories().then((categories: any) => {
    const index = categories.findIndex((item) => item.slug === slug);

    if (index !== -1) {
      name = categories[index].name;
    }

    main.innerHTML = `
<article>
    <aside></aside>
    <h1>${name}</h1>
</article>
`;

    getProductsByCategory(slug).then(({ products }: any) => {
      products.forEach((product: IProduct) => {
        const productElement = ProductCard(product);
        if (!brands.includes(product.brand)) {
          brands.push(product.brand);
        }
        main.append(productElement);
      });

      const aside = main.querySelector("aside");
      aside?.append(Filters(brands));
    });
  });

  return main;
}
