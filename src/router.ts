import Navigo from "navigo"
import {type Match} from "navigo"
import {Category} from "./pages/category/Category.ts"
import {ProductDetailPage} from "./pages/ProductDetailPage.ts"
import {CategoriesPage} from "./pages/categoriesPage/CategoriesPage.ts"
import {CartPage} from "./pages/CartPage.ts";
import {CheckoutPage} from "./pages/CheckoutPage.ts";
import {Footer} from "./components/footer/Footer.ts";
import {Header} from "./components/header/Header.ts";
import {Cart} from "./components/Cart.ts";

const cart = new Cart()
const router = new Navigo('/');

function handleRouteChange(renderPage: (param?: string, cart?: Cart) => HTMLElement, param?: string): void {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = ''
        app.append(Header())
        // app.append(NavPanel())
        const page = renderPage(param, cart)
        console.log(cart.getItems());
        app.append(page)
        app.append(Footer())
    }
}

router.on({
    "/": () => {
        return handleRouteChange(CategoriesPage)
    },
    "/category/:categorySlug": ({data}: Match) => {
        let categorySlug: string = 'none';
        if (data) {
            categorySlug = data.categorySlug
        }
        return handleRouteChange(Category, categorySlug)
    },
    "/product/:productId": ({data}: Match) => {
        let productId: string = 'none'
        if (data) {
            productId = data.productId
        }
        return handleRouteChange(ProductDetailPage, productId)
    },
    "/cart": () => {
        return handleRouteChange(CartPage)
    },
    "/checkout": () => {
        return handleRouteChange(CheckoutPage)
    },
});

export default router;