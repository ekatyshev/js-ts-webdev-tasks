import { type IProduct } from '../types'

export function getProducts(){
    const url = 'https://dummyjson.com/products';

    return new Promise((resolve) => {
        fetch(url).then(response => response.json()).then(data => resolve(data));
    })
}

export function getProductById(id: string){
    const url = `https://dummyjson.com/products/${id}`;

    return new Promise((resolve: (product: IProduct) => void) => {
        fetch(url).then(response => response.json()).then(data => resolve(data));
    })
}