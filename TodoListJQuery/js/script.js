"use strict";

$(function () {
    const addTodoForm = $("#add-todo-form");
    const todoList = $("#todo-list");
    const newTodoTextField = $("#new-todo-text-field");

    addTodoForm.submit(function (e) {
        e.preventDefault();

        if (!validateInput(newTodoTextField)) {
            return;
        }

        let newTodoText = newTodoTextField.val().trim();

        const newTodo = $("<li>").addClass("todo-item");

        function setViewMode() {
            newTodo.html(`
                <output class="todo-item-text input-output-style"></output>
                <div class="buttons-group">
                    <button title="Удалить" class="delete-button" type="button"></button>
                    <button title="Изменить" class="edit-button" type="button"></button>
                </div>
            `);

            newTodo.find(".todo-item-text").text(newTodoText);

            newTodo.find(".delete-button").click(function () {
                newTodo.remove();
            });

            newTodo.find(".edit-button").click(function () {
                newTodo.html(`
                    <input type="text" id="edit-text-field" class="edit-text-field input-output-style">
                    <div class="buttons-group">
                        <button title="Отменить" class="cancel-button" type="button"></button>
                        <button title="Сохранить изменения" class="save-button" type="button"></button>
                    </div>
                    <div class="error-message">Необходимо указать текст</div>
                `);

                const editTextField = newTodo.find(".edit-text-field");
                editTextField.val(newTodoText);

                newTodo.find(".cancel-button").click(function () {
                    setViewMode();
                });

                newTodo.find(".edit-text-field").keypress(function (event) {
                    if (event.keyCode === 13) {
                        event.preventDefault();
                        newTodo.find(".save-button").click();
                    }
                });

                newTodo.find(".save-button").click(function () {
                    if (!validateInput(editTextField)) {
                        return;
                    }

                    newTodoText = editTextField.val().trim();
                    setViewMode();
                });
            });
        }

        setViewMode();

        todoList.append(newTodo);

        newTodoTextField.val("");
    });

    function validateInput(input) {
        input.removeClass("invalid");

        if (input.val().trim().length === 0) {
            input.addClass("invalid");

            return false;
        }

        return true;
    }
});