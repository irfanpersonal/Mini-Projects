const menuButton = document.querySelector('#menu');
const hiddenLinks = document.querySelector('.hidden-links');

window.addEventListener('resize', function() {
    const windowWith = window.innerWidth;
    if (windowWith <= 1000) {
        hiddenLinks.style.display = 'none';
    }
});

menuButton.addEventListener('click', function() {
    if (window.getComputedStyle(hiddenLinks).getPropertyValue('display') === 'block') {
        hiddenLinks.style.display = 'none';    
    }
    else {
        hiddenLinks.style.display = 'block';
    }
});