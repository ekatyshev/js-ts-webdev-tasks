import { getProductById } from "../../api/productsApi.ts";
import { type IProduct } from "../../types.ts";
import { Cart } from "../../components/Cart.ts";
import "./ProductDetailsPage.sass";

export function ProductDetailsPage(param: string, cart: Cart) {
  const main = document.createElement("main");
  main.classList.add("main");

  function zoomPhoto(url: string, thumbnail: HTMLImageElement): void {
    const zoomedPhoto = document.querySelector(
      ".gallery__photo img",
    ) as HTMLImageElement;
    if (zoomedPhoto) {
      zoomedPhoto.src = url;
    }

    const allThumbnails = document.querySelectorAll(".gallery__thumbnail");
    if (allThumbnails[0]) {
      console.log('thumbnails');
      console.log(allThumbnails);
      allThumbnails.forEach((item) => {
        item.classList.remove("gallery__thumbnail_selected");
      });
    }

    thumbnail.classList.add("gallery__thumbnail_selected");
  }

  const id = param;
  let piecesToBuy: number = 1;

  getProductById(id).then((product: IProduct) => {
    console.log(product);

    const template = document.createElement("template");
    template.innerHTML = `
    <div class="product-details__wrapper">
      <div class="product-details content-max-width">
        <div class="gallery">
          <div class="gallery__thumbnails"></div>
          <div class="gallery__photo">
            <img src="${product.thumbnail}" alt="Image of ${product.title}">
          </div>
        </div>
        <h4 class="title">${product.title}</h4>
        <div class="rating">
          <span class="rating__stars"></span>
          <span class="rating__value">${product.rating}<span class="rating__max-rating">/5</span></span>
        </div>
        <div class="price">
          <h5 class="actual-price">$${product.price}</h5>
        </div>
      </div>
    </div>
    `;

    if (template.content.firstElementChild) {
      if (product.discountPercentage) {
        const price =
          template.content.firstElementChild.querySelector(".price");

        if (price) {
          const discountPercentage = Math.floor(product.discountPercentage);
          const oldPrice = Number(
            (product.price * (1 + discountPercentage / 100)).toFixed(2),
          );
          const discount = document.createElement("template");
          discount.innerHTML = `
<div class="discount">
    <div class="old-price">$${oldPrice}</div>
    <div class="discount-percentage">${discountPercentage}</div>
</div>
`;
          price.appendChild(discount.content.firstElementChild);
        }
      }

      if (product.images[0]) {
        const gallery =
          template.content.firstElementChild.querySelector(".gallery");
        const thumbnails = template.content.firstElementChild.querySelector(
          ".gallery__thumbnails",
        );

        for(let i = 0; i < 3; i++) {
          if(product.images[i]) {
            const thumbnail = document.createElement("img");
            thumbnail.src = product.images[i];
            thumbnail.classList.add("gallery__thumbnail");
            if(i === 0) {
              thumbnail.classList.add("gallery__thumbnail_selected");
            }
            thumbnail.addEventListener("click", () => {
              zoomPhoto(product.images[i], thumbnail);
            });

            if (thumbnails) {
              thumbnails.appendChild(thumbnail);
            }
          } else {
            break;
          }
        }
      }
    }

    const addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Add to Cart";
    addToCartButton.addEventListener("click", () => {
      cart.addToCart(id, piecesToBuy);
    });

    if (template.content.firstElementChild) {
      template.content.firstElementChild.append(addToCartButton);
      main.append(template.content.firstElementChild);
    }

  });

  return main;
}