"use strict";

$(function () {
    const contactForm = $("#contact-form");
    const inputName = $("#input-name");
    const inputSurname = $("#input-surname");
    const inputNumber = $("#input-number");

    contactForm.submit(function (e) {
        e.preventDefault();

        let name = inputName.val().trim();
        let surname = inputSurname.val().trim();
        let number = inputNumber.val().trim();

        if (!isValid(contactForm)) {
            return;
        }

        const tableRow = $("<tr>");

        const columnCounter = $("<td>").addClass("row-number");
        tableRow.append(columnCounter);

        const columnName = $("<td>");
        const columnSurname = $("<td>");
        const columnNumber = $("<td>");
        const columnEdit = $("<td>");

        tableRow.append(columnName, columnSurname, columnNumber, columnEdit);

        const contactTable = $("#body-table");
        contactTable.append(tableRow);

        updateCountContacts();

        function setViewMode() {
            columnName.html(name);
            columnSurname.html(surname);
            columnNumber.html(number);
            columnEdit.html(`<button class="delete-button" type="button"></button>
                <button class="edit-button" type="button"></button>`);

            tableRow.find(".delete-button").click(function () {
                tableRow.remove();
                updateCountContacts();
            });

            columnEdit.find(".edit-button").click(function () {
                columnName.html(`<input type="text" class="edit-name" id="edit-name" minlength="2" maxlength="15" pattern="[A-Za-zА-Яа-яЁё\\\\s]+">`);
                columnSurname.html(`<input type="text" class="edit-surname" id="edit-surname" maxlength="20" pattern="[A-Za-zА-Яа-яЁё\\s]+">`);
                columnNumber.html(`<input type="tel" class="edit-number" id="edit-number" pattern="^\\+?\\d{10,15}$">`);
                columnEdit.html(`<button class="cancel-button" type="button"></button><button class="save-button" type="button"></button>`);

                const editName = columnName.find("#edit-name");
                editName.val(name);

                const editSurname = columnSurname.find("#edit-surname");
                editSurname.val(surname);

                const editNumber = columnNumber.find("#edit-number");
                editNumber.val(number);

                columnEdit.find(".cancel-button").click(function () {
                    setViewMode();
                });

                columnEdit.find(".save-button").click(function () {
                    const changedName = editName.val().trim();
                    const changedSurname = editSurname.val().trim();
                    const changedNumber = editNumber.val().trim();

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

        inputName.val("");
        inputSurname.val("");
        inputNumber.val("");
    });
});

function isValid(form) {
    const inputs = form.find("input");
    let result = true;

    inputs.each(function () {
        const input = $(this);
        input.removeClass("invalid");

        if (input.val().trim() === "") {
            input.addClass("invalid");
            result = false;
        }
    });

    return result;
}

function updateCountContacts() {
    $("#body-table tr").each(function (index) {
        $(this).find(".row-number").text(index + 1);
    })
}