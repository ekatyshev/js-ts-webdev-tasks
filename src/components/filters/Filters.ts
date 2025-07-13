import "./Filters.sass";

export function Filters(existingBrands?: string[]): HTMLElement {
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
    <div class="filter-buttons">
        <button class="apply-filter">Apply Filter</button>
        <button class="reset-filter">Reset Filter</button>
    </div>
</div>

`;

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
