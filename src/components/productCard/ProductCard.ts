import type { IProduct } from "../../types.ts";
import router from "../../router.ts";
import "./ProductCard.sass";

export function ProductCard(product: IProduct) {
  const template = document.createElement("template");
  template.innerHTML = `
    <div class="product-card">
        <div class="thumbnail-container">
            <img src="${product.thumbnail}" alt="Image of ${product.title}">
        </div>
        <h4 class="product-card__title">${product.title}</h4>
        <div class="rating">
            <span class="rating__stars" style="width: ${Math.floor(product.rating) * (15.5 + 4.5) + ( 15.5 * ( product.rating % 1 ))}px">
                <div class="rating__all-stars">
                    <span class="rating__star"></span>
                    <span class="rating__star"></span>
                    <span class="rating__star"></span>
                    <span class="rating__star"></span>
                    <span class="rating__star"></span>
                </div>
            </span>
            <span class="rating__value">${product.rating}<span class="rating__max-rating">/5</span></span>
        </div>
        <div class="price">
            <h5 class="actual-price">$${product.price}</h5>
        </div>
    </div>
    `;

  if (template.content.firstElementChild) {
    if (product.discountPercentage > 5) {
      const price = template.content.firstElementChild.querySelector(".price");

      if (price) {
        const discountPercentage = Math.floor(product.discountPercentage);
        const oldPrice = Number(
          (product.price * (1 + discountPercentage / 100)).toFixed(2),
        );
        const discount = document.createElement("template");
        discount.innerHTML = `
<div class="discount">
    <div class="old-price">$${oldPrice}</div>
    <div class="discount-percentage">-${discountPercentage}%</div>
</div>
`;
        price.appendChild(discount.content);
      }
    }
  }

  const productCard = template.content.firstElementChild;
  if (productCard) {
    productCard.addEventListener("click", () => {
      router.navigate(`/product/${product.id}`);
    });
  }

  return template.content.firstElementChild as HTMLElement;
}
