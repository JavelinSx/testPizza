export const createCard = ({ name, description, img }) => {
    const card = document.createElement('div');
    card.classList.add('card', 'wow', 'animate__animated');

    card.innerHTML = `
        <div class="card-info">
            <img class="card-info__img" src="${img}" alt="${name}">
            <h3 class="card-info__title">${name}</h3>
            <p class="card-info__description">${description}</p>
        </div>
        <button class="card-btn">В корзину</button>
    `;

    const openModal = () => {
        const modal = document.getElementById('card-modal');
        const modalContent = modal.querySelector('.modal-card-content');

        modalContent.innerHTML = `
            <div class="card-info">
                <img class="card-info__img" src="${img}" alt="${name}">
                <h3 class="card-info__title">${name}</h3>
                <p class="card-info__description">${description}</p>
            </div>
            <button class="card-btn">В корзину</button>
        `;

        modal.style.display = "block";
    };

    card.querySelector('.card-info__img').addEventListener('click', openModal);
    card.querySelector('.card-btn').addEventListener('click', openModal);

    return card;
};
