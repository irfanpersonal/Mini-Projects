const menuButton = document.querySelector('#menu');
const closeButton = document.querySelector('#close');
const sidebar = document.querySelector('header');

menuButton.addEventListener('click', function() {
    if (window.getComputedStyle(sidebar).getPropertyValue('display') === 'none') {
        sidebar.style.display = 'block';    
    }
    else {
        sidebar.style.display = 'none';
    }
});

closeButton.addEventListener('click', function() {
    if (window.getComputedStyle(sidebar).getPropertyValue('display') === 'none') {
        sidebar.style.display = 'block';    
    }
    else {
        sidebar.style.display = 'none';
    }
});