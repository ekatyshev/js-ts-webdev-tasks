import Navigo from "navigo"
import {Category} from "./pages/Category.ts"
import {ProductDetailPage} from "./pages/ProductDetailPage.ts"
import {CategoriesPage} from "./pages/CategoriesPage.ts"
import {NavPanel} from "./components/NavPanel.ts";
import {Footer} from "./components/footer/Footer.ts";
import {Header} from "./components/header/Header.ts";

const router = new Navigo('/');

function handleRouteChange(renderPage: (params?: unknown) => HTMLElement, url: string, params?: unknown) : void {
    router.navigate(url)

    const app = document.getElementById("app");
    if (app) {
        app.append(Header())
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
    "/category/:postId": (params: { data: { postId: string } }) => {
        return handleRouteChange(Category, '/products', params)
    },
    "/product/:postId": (params: { data: { postId: string } }) => {
        return handleRouteChange(ProductDetailPage, '/products/:postId', params)
    },
});

export default router;