"use strict";

$(function () {
    const addTodoForm = $("#add-todo-form");
    const todoList = $("#todo-list");
    const newTodoTextField = $("#new-todo-text-field");

    addTodoForm.submit(function (e) {
        e.preventDefault();

        if (!isInputValid(newTodoTextField)) {
            return;
        }

        let newTodoText = newTodoTextField.val().trim();

        const newTodo = $("<li>").addClass("todo-item");

        function setViewMode() {
            newTodo.html(
                '<output class="todo-item-text"></output>' +
                '<div class="buttons-group">' +
                '<button title="Удалить" class="delete-button" type="button"></button>' +
                '<button title="Изменить" class="edit-button" type="button"></button>' +
                '</div>'
            );

            newTodo.find(".todo-item-text").text(newTodoText);

            newTodo.find(".delete-button").click(function () {
                newTodo.remove();
            });

            newTodo.find(".edit-button").click(function () {
                newTodo.html(
                    '<input type="text" id="edit-text-field" class="edit-text-field">' +
                    '<div class="buttons-group">' +
                    '<button title="Отменить" class="cancel-button" type="button"></button>' +
                    '<button title="Сохранить изменения" class="save-button" type="button"></button>' +
                    '</div>' +
                    '<div class="error-message-for-todo-input">Необходимо указать текст</div>'
                );

                const editTextField = newTodo.find(".edit-text-field");
                editTextField.val(newTodoText);

                newTodo.find(".cancel-button").click(function () {
                    setViewMode();
                });

                newTodo.find(".edit-text-field").keypress(function (enter) {
                    if (enter.keyCode === 13) {
                        enter.preventDefault();
                        newTodo.find(".save-button").click();
                    }
                });

                newTodo.find(".save-button").click(function () {
                    if (!isInputValid(editTextField)) {
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

    function isInputValid(input) {
        input.removeClass("invalid");

        if (input.val().trim().length === 0) {
            input.addClass("invalid");

            return false;
        }

        return true;
    }
});