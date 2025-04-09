const main = document.getElementsByTagName('main')[0];

const fragment = document.createDocumentFragment();

const cardsData = [
    {
        'title': 'Startup Framework',
        'description': 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        'background-color': '#EBEAED',
        'background-image': false,
        'accent-button-color': false,
    },
    {
        'title': 'Web Generator',
        'description': 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        'background-color': '#FFFFFF',
        'background-image': false,
        'accent-button-color': true,
    },
    {
        'title': 'Slides 4',
        'description': 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.',
        'background-color': '#482BE7',
        'background-image': false,
        'accent-button-color': false,
    },
    {
        'title': 'Postcards',
        'description': 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
        'background-color': false,
        'background-image': './assets/image.jpg',
        'accent-button-color': false,
    },
]

const cardGallery = document.createElement('div');
cardGallery.className = 'card-gallery';

cardGallery.appendChild(fragment);

cardsData.forEach((cardData) => {
    let card = document.createElement('div');
    card.className = 'card';
    `<h2>${cardData.title}</h2>`.append(card);
});

fragment.appendChild(main);