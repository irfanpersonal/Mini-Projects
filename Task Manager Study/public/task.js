const id = new URL(window.location.href).searchParams.get("id");
const editID = document.querySelector('.edit-id');
const nameInput = document.querySelector('#name-input');
const completedInput = document.querySelector('#completed-input');
const editButton = document.querySelector('#edit');
const messageElement = document.querySelector('.message');

fetch(`/api/v1/task/${id}`).then(res => {
    return res.json();
}).then(data => {
    if (data.code) {
        editID.textContent = data.data._id;
        nameInput.value = data.data.name;
        if (data.data.completed) {
            completedInput.checked = true;
        }
        else {
            completedInput.checked = false;
        }
    }
}).catch(error => {
    console.log(error);
});

editButton.addEventListener('click', function() {
    const nameValue = document.querySelector('#name-input').value;
    const completedValue = document.querySelector('#completed-input').checked;
    fetch(`/api/v1/task/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: `${nameValue}`, completed: `${completedValue}`})
    }).then(res => {
        return res.json();
    }).then(data => {
        if (data.code) {
            messageElement.style.display = 'block';
            messageElement.textContent = 'Edit Successful';
            setTimeout(() => {
                messageElement.style.display = 'none';
                messageElement.textContent = '';
                document.location = 'index.html';
            }, 500);
        }
    }).catch(error => {
        console.log(error);
    });
});