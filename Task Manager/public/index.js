const tasksContainer = document.querySelector('.tasks-container');
const submitButton = document.querySelector('button');

fetch('/api/v1/task').then(res => {
    return res.json();
}).then(data => {
    if (data.code) {
        if (data.msg === 'No Tasks In Database') {
            tasksContainer.innerHTML = 'No Tasks';
        }
        else {
            const fruits = data.data;
            for (let i = 0; i < fruits.length; i++) {
                if (!fruits[i].completed) {
                    const result = `
                        <div _id="${fruits[i]._id}" class="task">
                            <div>${fruits[i].name}</div>
                            <div class="options">
                                <a href="task.html?id=${fruits[i]._id}"><img _id="${fruits[i]._id}" id="edit" src="edit.png" alt="This text will appear if the image fails to load (alt = alternative)"></a>
                                <img _id="${fruits[i]._id}" id="delete" src="delete.png" alt="This text will appear if the image fails to load (alt = alternative)">
                            </div>
                        </div>
                    `;
                    tasksContainer.insertAdjacentHTML('beforeend', result);
                }
                else {
                    const result = `
                        <div _id="${fruits[i]._id}" class="task">
                            <div class="line">${fruits[i].name}</div>
                            <div class="options">
                                <a href="task.html?id=${fruits[i]._id}"><img _id="${fruits[i]._id}" id="edit" src="edit.png" alt="This text will appear if the image fails to load (alt = alternative)"></a>
                                <img _id="${fruits[i]._id}" id="delete" src="delete.png" alt="This text will appear if the image fails to load (alt = alternative)">
                            </div>
                        </div>
                    `;
                    tasksContainer.insertAdjacentHTML('beforeend', result);
                }
            }
        }
    }
    else {
        tasksContainer.innerHTML = 'No Tasks';
    }
}).catch(error => {
    console.log('Failed to fetch all tasks');
});

submitButton.addEventListener('click', function() {
    const taskName = document.querySelector('input').value;
    if (taskName.length > 0) {
        fetch('/api/v1/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: taskName})
        }).then(res => {
            return res.json();
        }).then(data => {
            if (tasksContainer.textContent === 'No Tasks') {
                tasksContainer.innerHTML = '';
            }
            if (data.code) {
                const result = `
                    <div _id="${data.data._id}" class="task">
                        <div>${data.data.name}</div>
                        <div class="options">
                            <a href="task.html?id=${data.data._id}"><img _id="${data.data._id}" id="edit" src="edit.png" alt="This text will appear if the image fails to load (alt = alternative)"></a>
                            <img _id="${data.data._id}" id="delete" src="delete.png" alt="This text will appear if the image fails to load (alt = alternative)">
                        </div>
                    </div>
                `;
                tasksContainer.insertAdjacentHTML('beforeend', result);
            }
            document.querySelector('input').value = '';
        }).catch(error => {
            console.log('Failed to Add a Task');
        });
    }
});

document.addEventListener('click', function(event) {
    if (event.target.hasAttribute('_id')) {
        const _id = event.target.getAttribute('_id');
        if (event.target.id === 'delete') {
            fetch(`/api/v1/task/${event.target.getAttribute('_id')}`, {
                method: 'DELETE'
            }).then(res => {
                return res.json();
            }).then(data => {
                if (data.code) {
                    document.querySelector(`[_id="${_id}"]`).remove();
                }
                if (tasksContainer.children.length === 0) {
                    tasksContainer.innerHTML = 'No Tasks';
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
});