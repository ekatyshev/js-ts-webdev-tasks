import Navigo from "navigo"
import { type Match } from "navigo"
import {Category} from "./pages/Category.ts"
import {ProductDetailPage} from "./pages/ProductDetailPage.ts"
import {CategoriesPage} from "./pages/CategoriesPage.ts"
import {NavPanel} from "./components/NavPanel.ts";
import {Footer} from "./components/footer/Footer.ts";
import {Header} from "./components/header/Header.ts";

const router = new Navigo('/');

function handleRouteChange(renderPage: (params?: unknown) => HTMLElement, params?: unknown) : void {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = ''
        app.append(Header())
        // app.append(NavPanel())
        const page = renderPage(params)
        app.append(page)
        app.append(Footer())
    }
}

router.on({
    "/": () => {
        return handleRouteChange(CategoriesPage)
    },
    "/category/:categorySlug": ({ data }: Match) => {
        let categorySlug: string = 'none'
        if (data) {
            categorySlug = data.categorySlug
        }
        return handleRouteChange(Category, { categorySlug: categorySlug } )
    },
    "/product/:productId": ({ data }: Match) => {
        let productId: string = 'none'
        if (data) {
            productId = data.productId
        }
        return handleRouteChange(ProductDetailPage, { productId: productId })
    },
});

export default router;