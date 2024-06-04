import { createInput } from "../Input/input"
// Фейковый AJAX-запрос
const fakeAjaxRequest = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success');
        }, 1000);
    });
};

const showPopup = (message) => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <p>${message}</p>
            <button class="popup-close">Закрыть</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Обработчик закрытия попапа
    popup.querySelector('.popup-close').addEventListener('click', () => {
        document.body.removeChild(popup);
    });
};

export const createFormInput = () => {
    const form = document.createElement('form')
    form.classList.add('form')
    const nameInput = createInput('input-name', {
        type: 'text',
        name: 'name',
        placeholder: 'Ваше имя',
        required: 'required'
    });
    nameInput.addEventListener('input', (e) => {
        nameInput.value = nameInput.value.replace(/\./g, '')
    })

    const addressInput = createInput('input-address', {
        type: 'text',
        name: 'address',
        placeholder: 'Адрес доставки',
        required: 'required'
    });

    const phoneInput = createInput('input-phone', {
        type: 'tel',
        name: 'phone',
        placeholder: 'Телефон',
        required: 'required',
        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}' // Пример шаблона для валидации номера телефона
    });
    phoneInput.addEventListener('input', (e) => {
        let value = phoneInput.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
        if (value.length > 3) value = value.slice(0, 3) + '-' + value.slice(3);
        if (value.length > 7) value = value.slice(0, 7) + '-' + value.slice(7);
        phoneInput.value = value.slice(0, 12); // Обрезаем строку до нужного формата
    });

    form.appendChild(nameInput);
    form.appendChild(addressInput);
    form.appendChild(phoneInput);

    // Добавляем кнопку для отправки формы
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Оформить заказ';
    submitButton.classList.add('form-submit');

    form.appendChild(submitButton);

    // Обработчик отправки формы с валидацией
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (form.checkValidity()) {
            const formData = {
                name: nameInput.value,
                address: addressInput.value,
                phone: phoneInput.value
            }
            fakeAjaxRequest(formData)
                .then(response => {
                    showPopup('Спасибо за заказ')
                    nameInput.value = ''
                    addressInput.value = ''
                    phoneInput.value = ''
                })
                .catch(error => {
                    showPopup('Ошибка при отправке формы')
                })

            form.reportValidity(); // Отображаем встроенные сообщения о ошибках валидации
        } else {
            form.reportValidity()
        }
    });

    return form;
}
