import type {IProduct} from "../types.ts";
import router from "../router.ts";

export function Product(product: IProduct) {


    const template = document.createElement('template');
    template.innerHTML = `
    <div>
        <h4 class="title">${product.title}</h4>
        <h5 class="category">${product.category}</h5>
        <div class="thumbnail-container">
            <img src="${product.thumbnail}" alt="thumbnail">
        </div>
        <p class="description">${product.description}</p>
        <h5 class="price">${product.price} $</h5>
    </div>
    
    `

    const detailsButton = document.createElement('button');
    detailsButton.innerText = 'See Details'
    detailsButton.addEventListener('click', () => {
        router.navigate(`/products/${product.id}`)
    })
    if (template.content.firstElementChild) {
        template.content.firstElementChild.append(detailsButton)
    }

    return template.content.firstElementChild as HTMLElement;
}