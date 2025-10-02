"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const inputName = document.getElementById("input-name");
    const inputSurname = document.getElementById("input-surname");
    const inputNumber = document.getElementById("input-number");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = inputName.value.trim();
        let surname = inputSurname.value.trim();
        let number = inputNumber.value.trim();

        if (!isValid(contactForm)) {
            return;
        }

        const tableRow = document.createElement("tr");

        const columnName = document.createElement("td");
        const columnSurname = document.createElement("td");
        const columnNumber = document.createElement("td");
        const columnEdit = document.createElement("td");

        tableRow.appendChild(columnName);
        tableRow.appendChild(columnSurname);
        tableRow.appendChild(columnNumber);
        tableRow.appendChild(columnEdit);

        const contactTable = document.getElementById("body-table");
        contactTable.append(tableRow);

        function setViewMode() {
            columnName.innerHTML = name;
            columnSurname.innerHTML = surname;
            columnNumber.innerHTML = number;
            columnEdit.innerHTML = '<button class="delete-button" type="button"></button>' +
                '<button class="edit-button" type="button"></button>';

            tableRow.querySelector(".delete-button").addEventListener("click", function () {
                tableRow.remove();
            });

            columnEdit.querySelector(".edit-button").addEventListener("click", function () {
                columnName.innerHTML = '<input type="text" class="edit-name" id="edit-name" minlength="2" maxlength="15" pattern="[A-Za-zА-Яа-яЁё\\s]+">';
                columnSurname.innerHTML = '<input type="text" class="edit-surname" maxlength="20" pattern="[A-Za-zА-Яа-яЁё\\s]+">';
                columnNumber.innerHTML = '<input type="tel" class="edit-number" pattern="^\\+?\\d{10,15}$">';
                columnEdit.innerHTML = '<button class="cancel-button" type="button"></button>' +
                    '<button class="save-button" type="button"></button>';

                const editName = columnName.querySelector(".edit-name");
                editName.value = name;

                const editSurname = columnSurname.querySelector(".edit-surname");
                editSurname.value = surname;

                const editNumber = columnNumber.querySelector(".edit-number");
                editNumber.value = number;

                columnEdit.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });

                columnEdit.querySelector(".save-button").addEventListener("click", function () {
                    const changedName = editName.value.trim();
                    const changedSurname = editSurname.value.trim();
                    const changedNumber = editNumber.value.trim();

                    if (!isValid(tableRow)) {
                        return;
                    }

                    name = changedName;
                    surname = changedSurname;
                    number = changedNumber;

                    setViewMode();
                })
            });
        }

        setViewMode();

        inputName.value = "";
        inputSurname.value = "";
        inputNumber.value = "";
    });
});

function isValid(form) {
    const allInputs = form.querySelectorAll("input");
    let result = true;

    for (const input of allInputs) {
        input.classList.remove("invalid");

        if (input.value.trim() === "") {
            input.classList.add("invalid");
            result = false;
        }
    }

    return result;
}

// Порядковые номера
// CSS формы