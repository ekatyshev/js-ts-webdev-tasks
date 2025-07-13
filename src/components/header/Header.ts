import './Header.sass';
import router from "../../router.ts";

export function Header(): HTMLElement {
    const header = document.createElement('header')

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

    const logo = header.querySelector('#logo');
    const linkToCart = header.querySelector('.user-item_cart');

    logo?.addEventListener('click', () => {
        router.navigate('/')
    })

    linkToCart?.addEventListener('click', () => {
        router.navigate('/cart')
    })

    return header
}