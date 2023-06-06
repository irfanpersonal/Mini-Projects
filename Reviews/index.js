const reviews = [
    {
        name: 'Elon Musk',
        occupation: 'Chief Engineer of SpaceX',
        img: 'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg',
        description: 'Visionary entrepreneur changing the world'
    },
    {
        name: 'Muhammad Ali',
        occupation: 'Professional Boxer',
        img: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/347861985_648158493318632_2985709440815324952_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0bGZhiibdtQAX8POHa3&_nc_ht=scontent-lga3-2.xx&oh=00_AfArnGzETz_fVEuc9AqHOo9RWJMSmrK_ZGhAyXf6yYmuVQ&oe=646E928F',
        description: 'Iconic boxing legend embodied greatness'
    },
    {
        name: 'Jon Jones',
        occupation: 'Professional Cage Fighter',
        img: 'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/jonescropped_1jil846d402euzix4oxq9obbj.jpg?itok=zYTc95xL',
        description: 'A dominant mixed martial artist'
    },
    {
        name: 'Donald J Trump',
        occupation: 'Saving Earth',
        img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQWYdIbh-TvG2L6LgCFdob50Tn_3I00EK-N0URDea0oJfwf9A9e3sCeqRsjxkhdFK6VPMQBNegfK-PtT7w',
        description: 'Assertive leader who prioritized America',
    },
    {
        name: 'Jake Paul',
        occupation: 'Godless',
        img: 'https://i2-prod.mirror.co.uk/incoming/article24059738.ece/ALTERNATES/s1200c/0_Floyd-Mayweather-Jake-Paul.jpg',
        description: 'A man with no morality'
    }
];

const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentID = 0;
const personImage = document.querySelector('img');
const personName = document.querySelector('.name');
const personOccupation = document.querySelector('.occupation');
const personDescription = document.querySelector('.description');
const personPreviousButton = document.querySelector('#previous');
const personNextButton = document.querySelector('#next');
const randomPerson = document.querySelector('.random');

personName.textContent = reviews[currentID].name;
personOccupation.textContent = reviews[currentID].occupation;
personDescription.textContent = reviews[currentID].description;
personImage.src = reviews[currentID].img;

personPreviousButton.addEventListener('click', () => {
    currentID--;
    if (currentID === -1) {
        currentID = reviews.length - 1;
    }
    personName.textContent = reviews[currentID].name;
    personOccupation.textContent = reviews[currentID].occupation;
    personDescription.textContent = reviews[currentID].description;
    personImage.src = reviews[currentID].img;
});

personNextButton.addEventListener('click', () => {
    currentID++;
    if (currentID === reviews.length) {
        currentID = 0;
    }
    personName.textContent = reviews[currentID].name;
    personOccupation.textContent = reviews[currentID].occupation;
    personDescription.textContent = reviews[currentID].description;
    personImage.src = reviews[currentID].img;
});

randomPerson.addEventListener('click', () => {
    currentID = getRandomNumberBetween(0, reviews.length - 1);
    personName.textContent = reviews[currentID].name;
    personOccupation.textContent = reviews[currentID].occupation;
    personDescription.textContent = reviews[currentID].description;
    personImage.src = reviews[currentID].img;
});