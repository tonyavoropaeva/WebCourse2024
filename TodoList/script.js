document.addEventListener("DOMContentLoaded", function () {
    const addTodoForm = document.getElementById("add-todo-form");
    const todoList = document.getElementById("todo-list");
    const newTodoTextField = document.getElementById("new-todo-text-field");

    addTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let newTodoText = newTodoTextField.value.trim();
        newTodoTextField.classList.remove("invalid");

        if (newTodoText.length === 0) {
            newTodoTextField.classList.add("invalid");
            return;
        }

        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item");

        function setViewMode() {
            newTodo.innerHTML = '<output class="todo-item-text"></output>' +
                '<div class="buttons-group"><button class="delete-button" type="button"></button>' +
                '<button class="edit-button" type="button"></button></div>';

            newTodo.querySelector(".todo-item-text").textContent = newTodoText;

            newTodo.querySelector(".delete-button").addEventListener("click", function () {
                newTodo.remove();
            });

            newTodo.querySelector(".edit-button").addEventListener("click", function () {
                newTodo.innerHTML = '<input type="text" class="edit-text-field">' +
                    '<div>Необходимо указать текст</div>' +
                    '<div class="buttons-group"><button class="cancel-button" type="button"></button>' +
                    '<button class="save-button" type="button"></button></div>';

                const editTextField = newTodo.querySelector(".edit-text-field");

                editTextField.value = newTodoText;

                newTodo.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });

                newTodo.querySelector(".edit-text-field").addEventListener("keypress", function (f) {
                    if (f.keyCode === 13) {
                        f.preventDefault();

                        newTodo.querySelector(".save-button").dispatchEvent(new Event("click", {
                            cancelable: true
                        }));
                    }
                });

                newTodo.querySelector(".save-button").addEventListener("click", function () {
                    const changedTodoText = editTextField.value.trim();

                    if (changedTodoText.length === 0) {
                        const errorMessage = document.createElement("div");
                     //   document.getElementById("edit-text-field").classList.add("invalid");
                        errorMessage.textContent = "Необходимо указать текст";
                        errorMessage.className = "error-message-for-todo-input";

                        if (newTodo.childNodes.length === 3) {
                            newTodo.appendChild(errorMessage);
                        }

                        return;
                    }

                    newTodoText = changedTodoText;
                    setViewMode();
                });
            });
        }

        setViewMode();

        todoList.append(newTodo);

        newTodoTextField.value = "";
    });
});