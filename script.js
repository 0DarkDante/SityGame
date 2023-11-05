let field = document.querySelector('#field');
let message = document.querySelector('#message');
let letterDisplay = document.querySelector('#letter-display');

let cities = [];
let allCities = ["Львів", "Вінниця", "Київ", "Одеса", "Харків", "Дніпро", "Запоріжжя", "Луцьк", "Тернопіль", "Івано-Франківськ"];

function robotMove() {
    let lastCity = cities[cities.length - 1];
    let lastChar = lastCity.charAt(lastCity.length - 1).toLowerCase();

    let validCity = allCities.find(city => {
        return !cities.includes(city) && city.charAt(0).toLowerCase() === lastChar;
    });

    if (validCity) {
        cities.push(validCity);
        message.textContent = `Робот вибрав місто ${validCity}`;
    } else {
        message.textContent = "Робот не може знайти валідне місто. Тобі належить виграти!";
    }
}

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
                robotMove();
            } else {
                message.textContent = 'Город повинен починатися на останню букву попереднього города';
                letterDisplay.textContent = lastChar;
            }
        } else {
            cities.push(inputValue);
            robotMove();
        }

        field.value = '';
    }
});
