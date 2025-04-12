const PRODUCTS = [
    {
        name: 'Slub jersey T-shirt',
        price: 12.99,
        photo: '1.jpg',
        category: 't-shirts-n-vests',
    },
    {
        name: 'Printed T-shirt',
        price: 12.99,
        photo: '2.jpg',
        category: 't-shirts-n-vests',
    },
    {
        name: 'Cotton T-shirt',
        price: 12.99,
        photo: '3.jpg',
        category: 't-shirts-n-vests',
    },
    {
        name: 'T-shirt with a motif',
        price: 12.99,
        photo: '4.jpg',
        category: 't-shirts-n-vests',
    },
    {
        name: 'Cotton T-shirt Regular Fit',
        price: 12.99,
        photo: '5.jpg',
        category: 'shirts',
    },
    {
        name: 'Slub jersey T-shirt',
        price: 12.99,
        photo: '6.jpg',
        category: 'shirts',
    },
]
const CATEGORIES = [
    {
        id: 'jackets-n-coats',
        label: 'Jackets & Coats',
    },
    {
        id: 'hoodies',
        label: 'Hoodies',
    },
    {
        id: 't-shirts-n-vests',
        label: 'T-shirts & Vests',
    },
    {
        id: 'shirts',
        label: 'Shirts',
    },
    {
        id: 'blazers-n-suits',
        label: 'Blazers & Suits',
    },
    {
        id: 'jeans',
        label: 'Jeans',
    },
    {
        id: 'trousers',
        label: 'Trousers',
    },
    {
        id: 'shorts',
        label: 'Shorts',
    },
    {
        id: 'underwear',
        label: 'Underwear',
    },
    {
        id: 'gift-sets',
        label: 'Gift Sets',
    },
];

const main = document.getElementsByClassName('main')[0];
const fragment = document.createDocumentFragment();

const menu = document.createElement('nav');
menu.classList.add('menu');
menu.append(document.createElement('ul'));

menu.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('menu__item')) {
        e.target.classList.add('menu__item_active');

        renderGallery(e.target.getAttribute('data-category'));

        for (item of document.getElementsByClassName('menu__item')) {
            if (item !== e.target) {
                item.classList.remove('menu__item_active');
            }
        }
    }
});

CATEGORIES.forEach(category => {
    const item = document.createElement('li');
    item.classList.add('menu__item');
    item.textContent = category.label;
    item.setAttribute('data-category', category.id);
    menu.append(item);
});

const section = document.createElement('section');

const galleryHeader = document.createElement('div');
galleryHeader.classList.add('gallery-header');

galleryCounter = document.createElement('span');
galleryCounter.classList.add('gallery-counter');
galleryCounterNumber = document.createElement('span');
galleryCounterNumber.classList.add('gallery-counter__number');
galleryCounterNumber.innerText = '0';
galleryCounter.append(galleryCounterNumber, ' items');

gallerySorting = document.createElement('span');
gallerySorting.classList.add('gallery-sorting');
gallerySorting.innerHTML = `
<span>Sort by</span>
<span class="sorting-select">Recommended</span>
<span class="chevron"></span>`;

galleryHeader.append(galleryCounter, gallerySorting);

const gallery = document.createElement('div');
gallery.classList.add('gallery');

section.append(galleryHeader, gallery);

renderGallery();

function renderGallery(category = 'all') {
    let counter = 0;
    const productList = document.createDocumentFragment();
    PRODUCTS.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img class="card__cover" src="./assets/img/${product.photo}" alt="${product.name}">
            <h3 class="card__title">${product.name}</h3>
            <p class="card__price">$ ${product.price}</p>
            <button class="card__button">Add to bag</button>
        `;
        if (category === 'all' || product.category === category) {
            productList.append(card);
            counter++;
        }
    });
    gallery.innerHTML = '';
    gallery.append(productList);
    galleryCounterNumber.innerText = `${counter}`;
}

fragment.append(menu, section);

main.append(fragment);