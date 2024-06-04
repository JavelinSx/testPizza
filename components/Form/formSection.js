import { createFormInput } from "./form"
import piecePizza from '../../assets/images/pizzzzza.png'
export const createFormSection = () => {
    const formSection = document.createElement('section')
    formSection.classList.add('form-section')
    formSection.innerHTML = `
    <div class="form-text">
        <h3 class="form-text__title">
            Хватит думать!
            <span class="form-text__subtitle">
                Доставим заказ за 30 минут!
            </span>
        </h3>
        <p class="form-text__description">
            Мы  гарантированно доставим вашу пиццу за 30 минут с момента оформления заказа. Если мы опоздаем даже на 1 минуту - вы получаете весь заказ бесплатно и ваучер на скидку на следующий заказ. Мы гордимся нашим сервисом и сделаем всё, чтобы наш клиент был доволен и не остался голодный!
        </p>
    </div>
    <img class="form-img" src="${piecePizza}">
    `
    const formContainer = document.createElement('div')
    formContainer.classList.add('form-container')

    const form = createFormInput()
    formContainer.appendChild(form)
    formSection.appendChild(formContainer)

    return formSection;
}