let count = 0;
const counter = document.querySelector('.counter');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.textContent === 'DECREASE') {
            count--;
        }
        else if (event.target.textContent === 'RESET') {
            count = 0;
        }
        else {
            count++;
        }
        counter.textContent = count;
        if (count < 0) {
            counter.style.color = 'red';
        }
        else if (count > 0) {
            counter.style.color = 'green';
        }
        else {
            counter.style.color = 'black';
        }
    });
});