const color = document.querySelector('.color');
const button = document.querySelector('.button');
const body = document.querySelector('body');

const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomHexColor = () => {
    const letters = '0123456789ABCDEF';
    let result = '#';
    for (let i = 0; i < 6; i++) {
        result += letters[getRandomNumberBetween(0, letters.length - 1)];
    }
    return result;
}

button.addEventListener('click', () => {
    const randomHexColor = getRandomHexColor();
    body.style.backgroundColor = randomHexColor;
    color.textContent = `Background Color : ${randomHexColor}`;
});