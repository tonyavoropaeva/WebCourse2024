"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const addTodoForm = document.getElementById("add-todo-form");
    const todoList = document.getElementById("todo-list");
    const newTodoTextField = document.getElementById("new-todo-text-field");

    addTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!validateInput(newTodoTextField)) {
            return;
        }

        let newTodoText = newTodoTextField.value.trim();

        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item");

        function setViewMode() {
            newTodo.innerHTML = `
                <output class="todo-item-text input-output-style"></output>
                <div class="buttons-group">
                    <button title="Удалить" class="delete-button" type="button"></button>
                    <button title="Изменить" class="edit-button" type="button"></button>
                </div>
            `;

            newTodo.querySelector(".todo-item-text").textContent = newTodoText;

            newTodo.querySelector(".delete-button").addEventListener("click", function () {
                newTodo.remove();
            });

            newTodo.querySelector(".edit-button").addEventListener("click", function () {
                newTodo.innerHTML = `
                    <input type="text" id="edit-text-field" class="edit-text-field input-output-style">
                    <div class="buttons-group">
                        <button title="Отменить" class="cancel-button" type="button"></button>
                        <button title="Сохранить изменения" class="save-button" type="button"></button>
                    </div>
                    <div class="error-message">Необходимо указать текст</div>
                `;

                const editTextField = newTodo.querySelector(".edit-text-field");

                editTextField.value = newTodoText;

                newTodo.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });

                newTodo.querySelector(".edit-text-field").addEventListener("keypress", function (event) {
                    if (event.keyCode === 13) {
                        event.preventDefault();

                        newTodo.querySelector(".save-button").dispatchEvent(new Event("click", {
                            cancelable: true
                        }));
                    }
                });

                newTodo.querySelector(".save-button").addEventListener("click", function () {
                    if (!validateInput(editTextField)) {
                        return;
                    }

                    newTodoText = editTextField.value.trim();
                    setViewMode();
                });
            });
        }

        setViewMode();

        todoList.append(newTodo);

        newTodoTextField.value = "";
    });

    function validateInput(input) {
        input.classList.remove("invalid");

        if (input.value.trim().length === 0) {
            input.classList.add("invalid");

            return false;
        }

        return true;
    }
});