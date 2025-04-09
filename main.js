const cardsData = [
    {
        title: 'Startup Framework',
        leading: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        style: 'standard',
        accentButtonColor: false,
    },
    {
        title: 'Web Generator',
        leading: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        style: 'outlined',
        accentButtonColor: true,
    },
    {
        title: 'Slides 4',
        leading: 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.',
        style: 'highlighted',
        accentButtonColor: false,
    },
    {
        title: 'Postcards',
        leading: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
        style: 'background-image',
        backgroundImage: './assets/image.jpg',
        accentButtonColor: false,
    },
]

const main = document.getElementsByClassName("main")[0];
const fragment = document.createDocumentFragment();
const cardGallery = document.createElement('div');
cardGallery.setAttribute('class', 'card-gallery');

fragment.appendChild(cardGallery);

cardsData.forEach((cardData) => {
    let card = document.createElement('div');
    card.className = 'card';

    let description = document.createElement('div');
    description.classList.add('card__description');

    let title = document.createElement('h2');
    title.innerText = cardData.title;

    let leading = document.createElement('p');
    leading.innerText = cardData.leading;

    description.appendChild(title);
    description.appendChild(leading);

    let button = document.createElement('button');
    button.innerText = 'Explore';
    button.classList.add('button');
    button.classList.add('button_middle-size');
    if (cardData.accentButtonColor) {
        button.classList.add('button_accent');
    }

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    if (cardData.style) {
        card.classList.add(`card_${cardData.style}`);
    }

    if (cardData.backgroundImage) {
        card.style.backgroundImage = `url(${cardData.backgroundImage})`;
    }

    cardGallery.appendChild(card);
});

main.appendChild(fragment);