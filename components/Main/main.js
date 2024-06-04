
import imgDough from '../../assets/icons/icon_best_dough.png'
import imgCook from '../../assets/icons/icon_best_cook.png'
import imgQuality from '../../assets/icons/icon_best_quality.png'
import imgReception from '../../assets/icons/icon_best_reception.png'
import bigPizza from '../../assets/images/pizza_big.png'

export const createMainSection = () => {
    const section = document.createElement('section');
    section.classList.add('main');

    section.innerHTML = `

        <h1 class="main-title">
        Самая вкусная пицца в мире
        <span class="main-title_color">только в Pizza Chieff</span>
        </h1>
        <ul class="main-service">
            <li class="main-service__item">
                <img class="main-service__item-img" src="${imgDough}">
                <div class="main-service__item-container">
                    <p class="main-service__item-title">Лучшее тесто</p>
                    <p class="main-service__item-text">Мы создаём тесто только из отборной итальянской муки наивысшего качества</p>
                </div>
            </li>
            <li class="main-service__item">
                <img class="main-service__item-img" src="${imgCook}">
                <div class="main-service__item-container">
                    <p class="main-service__item-title">Лучшие повара</p>
                    <p class="main-service__item-text">Пиццы готовят самые профессиональные итальянские повара</p>
                </div>

            </li>
            <li class="main-service__item">
                <img class="main-service__item-img" src="${imgQuality}">
                <div class="main-service__item-container">
                    <p class="main-service__item-title">Гарантия качества</p>
                    <p class="main-service__item-text">Наша пиццерия получила множество наград и признаний по всему миру</p>
                </div>

            </li>
            <li class="main-service__item">
                <img class="main-service__item-img" src="${imgReception}">
                <div class="main-service__item-container">
                    <p class="main-service__item-title">Отборные рецепты</p>
                    <p class="main-service__item-text">Мы используем рецепты от мировых лидеров в изготовлении пиццы</p>
                </div>

            </li>
        </ul>
        <button class="main-service__btn-select" type="button">Выбрать пиццу</button>
        <img class="main-service-img" src="${bigPizza}">

    `;

    return section;
};
