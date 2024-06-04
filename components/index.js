import { createHeader } from './Header/header.js';
import { createMainSection } from './Main/main.js';
import { createGallerySection } from './Gallery/gallery.js';
import { createFormSection } from './Form/formSection.js';
import { createModal } from './Modal/modal.js';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';
import '../css/style.scss';  // Импортируем SCSS файл
import WOW from 'wowjs';
// Инициализация Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('.app');

    const header = createHeader();
    const mainSection = createMainSection();
    const gallerySection = createGallerySection();
    const formSection = createFormSection();

    app.appendChild(header);
    app.appendChild(mainSection);
    app.appendChild(gallerySection);
    app.appendChild(formSection);

    createModal()

    // Инициализация WOW.js
    const wow = new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
    wow.sync();

});
