"use strict"

const submitButton = document.querySelector('.btnSubmit');

submitButton.addEventListener("click", function (e) {
    const inputTitle = document.querySelector('.inputTitle');
    const inputDescription = document.querySelector('.inputDescription');

    e.preventDefault();

    const title = inputTitle.value;
    const description = inputDescription.value;

    let tempTitle = title;
    let tempDescription = description;

    // if (title !== "" && description !== "") {

    const list = document.querySelector('.list');

    // creating container
    const container = document.createElement("div");
    container.classList.add('container');

    // creating to-do-item
    const toDoItem = document.createElement("div");
    toDoItem.innerHTML = `
        <h4> ${title} </h4><p> ${description} </p>
        `;

    // creating buttons
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButton.classList.add('editBtn');
    deleteButton.classList.add('deleteBtn');

    // connecting toDoItem, editBtn, deleteBtn to container
    container.appendChild(toDoItem);
    container.appendChild(editButton);
    container.appendChild(deleteButton);

    list.appendChild(container);

    toDoItem.classList.add('toDoItem');


    deleteButton.addEventListener('click', function () {
        const toDoContainer = this.closest('.container');

        if (toDoContainer) {
            toDoContainer.remove();
        }
    });


    editButton.addEventListener('click', editButtonClickHandler);

    function editButtonClickHandler() {
        editButton.classList.add('confirmBtn');

        const containerTitle = container.querySelector('h4');
        const containerDescription = container.querySelector('p');

        inputTitle.value = containerTitle.textContent;
        inputDescription.value = containerDescription.textContent;

        editButton.removeEventListener('click', editButtonClickHandler);
        editButton.addEventListener('click', confirmButtonClickHandler, { once: true });

        function confirmButtonClickHandler() {
            containerTitle.textContent = inputTitle.value;
            containerDescription.textContent = inputDescription.value;

            editButton.classList.remove('confirmBtn');
            editButton.addEventListener('click', editButtonClickHandler, { once: true });

            inputTitle.value = "";
            inputDescription.value = "";
        }
    }

    inputTitle.value = "";
    inputDescription.value = "";

    // }
});