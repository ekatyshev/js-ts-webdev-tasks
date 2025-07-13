import "./Footer.sass";

export function Footer(): HTMLElement {
  const footer = document.createElement("footer");
  footer.classList.add("footer__wrapper");

  footer.innerHTML = `
<div class="footer content-max-width">
    <form class="subscription">
        <h4>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h4>
        <div class="right-block">
          <div class="email__wrapper">
            <input class="email" type="email" placeholder="Enter your email address">
          </div>
          <button>Subscribe to Newsletter</button>
        </div>    
    </form>
  
  <nav class="footer-navigation">
      <div class="footer__about">
          <h4>Shop.co</h4>
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
          <li class="footer-navigation__list-item">About</li>
          <li class="footer-navigation__list-item">Features</li>
          <li class="footer-navigation__list-item">Works</li>
          <li class="footer-navigation__list-item">Career</li>
      </ul>
      <ul>
          <h5>Help</h5>
          <li class="footer-navigation__list-item">Customer Support</li>
          <li class="footer-navigation__list-item">Delivery Details</li>
          <li class="footer-navigation__list-item">Terms & Conditions</li>
          <li class="footer-navigation__list-item">Privacy Policy</li>
      </ul>
      <ul>
          <h5>FAQ</h5>
          <li class="footer-navigation__list-item">Account</li>
          <li class="footer-navigation__list-item">Manage Deliveries</li>
          <li class="footer-navigation__list-item">Orders</li>
          <li class="footer-navigation__list-item">Payments</li>
      </ul>
      <ul>
          <h5>Resources</h5>
          <li class="footer-navigation__list-item">Free eBooks</li>
          <li class="footer-navigation__list-item">Development Tutorial</li>
          <li class="footer-navigation__list-item">How to - Blog</li>
          <li class="footer-navigation__list-item">Youtube Playlist</li>
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
</div>

`;

  return footer;
}
