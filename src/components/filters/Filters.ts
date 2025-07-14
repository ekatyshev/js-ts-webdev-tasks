import "./Filters.sass";
import type { IProduct } from "../../types.ts";
import { ProductCard } from "../productCard/ProductCard.ts";

export function filterProducts(
  productList: Element,
  productsArray: IProduct[],
  sortingOrder: string = "ascending",
  brands?: string[],
) {
  productList.innerHTML = "";

  productsArray.sort((a, b) => {
    if (a.price > b.price) {
      return sortingOrder === "ascending" ? 1 : -1;
    } else if (a.price < b.price) {
      return sortingOrder === "ascending" ? -1 : 1;
    } else return 0;
  });

  productsArray.forEach((product) => {
    if ((brands && brands.includes(product.brand)) || !brands) {
      const productElement = ProductCard(product);
      productList.append(productElement);
    }
  });
}

export function Filters(
  productList: Element,
  productsArray: IProduct[],
  existingBrands?: string[],
): HTMLElement {
  const filters = document.createElement("div");

  filters.innerHTML = `
<div class="filters-panel">
    <h4>Filters</h4>
    <div class="filter-group filter-group_sort">
        <h5>Sort</h5>
        <ul>
        <li>
            <input type="radio" name="sorting" value="ascending" >
            <label>Ascending</label>
        </li>
        <li>
            <input type="radio" name="sorting" value="descending" >
            <label>Descending</label>
        </li>
        </ul>
    </div>
    <div class="filter-group filter-group_brand">
        <h5>Brand</h5>
        <ul>
        </ul>
    </div>
    <div class="filter-group filter-group_price">
        <h5>Price</h5>
        <div class="price-inputs">
          <input type="number" value="10" placeholder="10" name="min-price">
          <input type="number" value="2000" placeholder="2000" name="max-price">
        </div>
    </div>
    <div class="filter-buttons"></div>
</div>
`;

  const applyFiltersButton = document.createElement("button");
  applyFiltersButton.classList.add("apply-filter");
  applyFiltersButton.innerText = "Apply Filters";
  applyFiltersButton.addEventListener("click", () => {
    filterProducts(productList, productsArray, 'descending');
  });

  const resetFiltersButton = document.createElement("button");
  resetFiltersButton.classList.add("reset-filter");
  resetFiltersButton.innerText = "Reset Filters";
  resetFiltersButton.addEventListener("click", () => {
    filterProducts(productList, productsArray, 'ascending');
  });

  const filterButtons = filters.querySelector(".filter-buttons");
  if (filterButtons) {
    filterButtons.append(applyFiltersButton, resetFiltersButton);
  }

  const brandGroup = filters.querySelector(".filter-group_brand");
  const brandList = filters.querySelector(".filter-group_brand ul");

  if (existingBrands && existingBrands.length > 1 && brandList) {
    existingBrands.forEach((brand) => {
      const brandItem = document.createElement("li");
      brandItem.innerHTML = `
            <input type="checkbox" value="${brand}" name="brand">
            <label>${brand}</label>
            `;
      brandList.append(brandItem);
    });
  } else if (brandGroup) {
    brandGroup.remove();
  }

  return filters;
}
