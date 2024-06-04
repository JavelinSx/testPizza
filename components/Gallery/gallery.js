import { galleryInfo } from '../../data/gallery-info.js';
import { createCard } from '../Card/card.js';

export const createGallerySection = () => {
    const section = document.createElement('section');
    section.classList.add('gallery-section');
    section.innerHTML = `<h1 class="gallery-title">Выберите свою любимую пиццу</h1>`

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    galleryInfo.forEach((item, index) => {
        const card = createCard(item);
        if (index % 2 === 0) {
            card.classList.add('animate__bounceInLeft')
        } else {
            card.classList.add('animate__bounceInRight')
        }
        cardContainer.appendChild(card);
    });

    section.appendChild(cardContainer)
    return section;
};
