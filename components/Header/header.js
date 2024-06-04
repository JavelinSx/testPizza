import pizzaLogo from '../../assets/icons/pizza-logo.png';

export const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    header.innerHTML = `
        <div class="header-container">
            <a href="#" class="header-logo-link">
                <img class="header-logo-img wow animate__animated animate__bounce" src="${pizzaLogo}" alt="Pizza Logo">
                PIZZA CHIEFF
            </a>
            <button class="burger-menu">
                <span class="burger-bar"></span>
                <span class="burger-bar"></span>
                <span class="burger-bar"></span>
            </button>
            <nav class="header-nav-container">
                <ul class="header-nav-list">
                    <li class="header-nav-item">Пиццы</li>
                    <li class="header-nav-item">Напитки</li>
                    <li class="header-nav-item">Доставка и оплата</li>
                    <li class="header-nav-item">Контакты</li>
                </ul>
            </nav>
        </div>
    `;

    const burgerMenu = header.querySelector('.burger-menu');
    const navContainer = header.querySelector('.header-nav-container');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navContainer.classList.toggle('active');
    });

    return header;
};
