const color = document.querySelector('.color');
const button = document.querySelector('.button');
const body = document.querySelector('body');

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'beige', 'purple', 'black'];

button.addEventListener('click', function() {
    const randomColor = colors[getRandomNumberBetween(0, colors.length - 1)];
    body.style.backgroundColor = randomColor;
    color.textContent = `Simple Background Color : ${randomColor.toUpperCase()}`;
});