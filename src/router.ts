import Navigo from "navigo"
import {ProductsPage} from "./pages/ProductsPage.ts"
import {ProductDetailPage} from "./pages/ProductDetailPage.ts"
import {CategoriesPage} from "./pages/CategoriesPage.ts"
import {NavPanel} from "./components/NavPanel.ts";
import {Footer} from "./components/Footer.ts";

const router = new Navigo('/');

function handleRouteChange(renderPage: (params?: unknown) => HTMLElement, url: string, params?: unknown) : void {
    router.navigate(url)

    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = ''
        app.append(NavPanel())
        const page = renderPage(params)

        app.append(page)
        app.append(Footer())
    }
}

router.on({
    "/": () => {
        return handleRouteChange(CategoriesPage, '/')
    },
    "/products": () => {
        return handleRouteChange(ProductsPage, '/products')
    },
    "/products/:postId": (params: { data: { postId: string } }) => {
        return handleRouteChange(ProductDetailPage, '/products/:postId', params)
    },
});

export default router;