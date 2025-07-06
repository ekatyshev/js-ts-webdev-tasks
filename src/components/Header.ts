export function Header(): HTMLElement {
    const header = document.createElement('header')

    header.innerHTML = `
<div class="offer">Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a></div>

<div class="top-menu">
    <div class="logo"></div>
    <div class="user">
        <a href="#" class="user-item user-item_cart"></a>
        <a href="#" class="user-item user-item_account"></a>
    </div>
</div>

<div class="cover">
    <div class="cover__slogan">FIND ANYTHING THAT MATCHES YOUR STYLE</div>
    <div class="cover__description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
    <a href="#">Shop Now</a>
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
    <ul class="brand-band">
        <li class="brand-band brand-band_versace"></li>
        <li class="brand-band brand-band_zara"></li>
        <li class="brand-band brand-band_gucci"></li>
        <li class="brand-band brand-band_prada"></li>
        <li class="brand-band brand-band_calvin-klein"></li>
    </ul>
</div>
`

    return header
}