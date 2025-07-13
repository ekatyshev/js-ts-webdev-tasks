import "./Header.sass";
import router from "../../router.ts";

export function Header(): HTMLElement {
  const header = document.createElement("header");

  header.innerHTML = `
<div class="offer__wrapper">
    <div class="offer content-max-width">Sign up and get 20% off to your first order. <a class="offer__link" href="#">Sign Up Now</a></div>
</div>

<div class="top-menu__wrapper">
    <div class="top-menu content-max-width">
        <div class="logo" id="logo">SHOP.CO</div>
        <div class="user">
            <span class="user-item user-item_cart"></span>
            <span class="user-item user-item_account"></span>
        </div>
    </div>
</div>
`;

  const logo = header.querySelector("#logo");
  const linkToCart = header.querySelector(".user-item_cart");

  logo?.addEventListener("click", () => {
    router.navigate("/");
  });

  linkToCart?.addEventListener("click", () => {
    router.navigate("/cart");
  });

  return header;
}
