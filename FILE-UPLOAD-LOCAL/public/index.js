document.querySelector('button').addEventListener('click', function() {
    const nameInput = document.querySelector('#name-input').value;
    const ratingInput = document.querySelector('#rating-input').value;
    const imageInput = document.querySelector('#image-input').files[0];

    const imageForm = new FormData();
    imageForm.append('image', imageInput);

    fetch('/api/v1/games/uploads', {
        method: 'POST',
        body: imageForm
    }).then(res => {
        return res.json();
    }).then(data => {
        const src = data.imageSource;
        fetch('/api/v1/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: nameInput, rating: ratingInput, image: src})
        }).then(res => {
            return res.json();
        }).then(data => {
            const game = data.game;
            const result = `
                <div class="game">
                    <h1>Name: ${game.name}</h1>
                    <h2>Rating: ${game.rating}</h2>
                    <img src="${game.image}" alt="This text will appear if the image fails to load (alt = alternative)">
                </div>
            `;
            document.querySelector('.games').insertAdjacentHTML('beforeend', result);
        }).catch(error => {
            document.querySelector('.alert').textContent = 'Failed to fetch';
            setTimeout(() => {
                document.querySelector('.alert').textContent = '';
            }, 1000);
        });
    }).catch(error => {
        document.querySelector('.alert').textContent = 'Failed to fetch';
        setTimeout(() => {
            document.querySelector('.alert').textContent = '';
        }, 1000);
    });
});

fetch('/api/v1/games').then(res => {
    return res.json();
}).then(data => {
    const games = data.games;
    for (let i = 0; i < games.length; i++) {
        const result = `
            <div class="game">
                <h1>Name: ${games[i].name}</h1>
                <h2>Rating: ${games[i].rating}</h2>
                <img src="${games[i].image}" alt="This text will appear if the image fails to load (alt = alternative)">
            </div>
        `;
        document.querySelector('.games').insertAdjacentHTML('beforeend', result);
    }
}).catch(error => {
    console.log(error);
});