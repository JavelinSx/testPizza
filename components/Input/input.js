export const createInput = (classInput, attrs) => {
    const input = document.createElement('input')
    input.classList.add('form-input', classInput)
    // Устанавливаем атрибуты
    Object.keys(attrs).forEach(key => {
        input.setAttribute(key, attrs[key]);
    });

    return input;
}