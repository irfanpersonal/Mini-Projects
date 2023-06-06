const closeButton = document.querySelector('#close');
const modalButton = document.querySelector('button');
const container = document.querySelector('.container');

modalButton.addEventListener('click', function() {
    if (window.getComputedStyle(container).getPropertyValue('display') === 'none') {
        container.style.display = 'block';    
    }
    else {
        container.style.display = 'none';
    }
});

closeButton.addEventListener('click', function() {
    if (window.getComputedStyle(container).getPropertyValue('display') === 'none') {
        container.style.display = 'block';    
    }
    else {
        container.style.display = 'none';
    }
});