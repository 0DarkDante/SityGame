let field = document.querySelector('#field');
let message = document.querySelector('#message');
let letterDisplay = document.querySelector('#letter-display');
let successMessage = document.querySelector('#success-message');

let cities = [];

field.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        let inputValue = field.value;

        if (cities.includes(inputValue)) {
            message.textContent = 'Дане місто називав опонент';
        } else if (cities.length > 0) {
            let lastCity = cities[cities.length - 1];
            let lastChar = lastCity.charAt(lastCity.length - 1).toLowerCase();
            if (lastChar === inputValue.charAt(0).toLowerCase()) {
                cities.push(inputValue);
                letterDisplay.textContent = '';
                successMessage.textContent = 'Гарно! Тепер ваш хід';
                message.textContent = '';
            } else {
                message.textContent = 'Місто повинно починатися на останню букву попереднього міста';
                letterDisplay.textContent = lastChar;
                successMessage.textContent = '';
            }
        } else {
            cities.push(inputValue);
            successMessage.textContent = 'Початковий хід. Тепер хід опонента';
        }

        field.value = '';
    }
});
