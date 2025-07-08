import './Footer.sass';

export function Footer(): HTMLElement {
    const footer = document.createElement('footer')

    footer.innerHTML = `
<div class="subscription">
    <form>
        <h4>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h4>
        <input class="email" type="email" placeholder="Enter your email address">
        <button>Subscribe to Newsletter</button>    
    </form>
</div>

<nav class="footer-navigation">
    <div class="footer__about">
        <h5>Shop.co</h5>
        <div class="slogan">We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
        <ul class="social-links">
            <li class="social-link social-link_twitter"></li>
            <li class="social-link social-link_facebook"></li>
            <li class="social-link social-link_instagram"></li>
            <li class="social-link social-link_github"></li>
        </ul>
    </div>
    <ul>
        <h5>Company</h5>
        <li>About</li>
        <li>Features</li>
        <li>Works</li>
        <li>Career</li>
    </ul>
    <ul>
        <h5>Help</h5>
        <li>Customer Support</li>
        <li>Delivery Details</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
    </ul>
    <ul>
        <h5>FAQ</h5>
        <li>Account</li>
        <li>Manage Deliveries</li>
        <li>Orders</li>
        <li>Payments</li>
    </ul>
    <ul>
        <h5>Resources</h5>
        <li>Free eBooks</li>
        <li>Development Tutorial</li>
        <li>How to - Blog</li>
        <li>Youtube Playlist</li>
    </ul>
</nav>

<div class="bottom-line">
    <div class="copyright">Shop.co © 2000-2023, All Rights Reserved</div>
    <ul class="payment-options">
        <li class="payment-option payment-option_visa"></li>
        <li class="payment-option payment-option_mastercard"></li>
        <li class="payment-option payment-option_paypal"></li>
        <li class="payment-option payment-option_apple"></li>
        <li class="payment-option payment-option_google"></li>
    </ul>
</div>

`

    return footer
}