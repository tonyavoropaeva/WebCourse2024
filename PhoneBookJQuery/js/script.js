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

        if (!validateInputs(contactForm)) {
            return;
        }

        if (!isNumberUnique(number)) {
            return;
        }

        const tableRow = $("<tr>");

        const columnIndex = $("<td>").addClass("row-number");
        tableRow.append(columnIndex);

        const columnName = $("<td>");
        const columnSurname = $("<td>");
        const columnNumber = $("<td>").addClass("phone");
        const columnEdit = $("<td>");

        tableRow.append(columnName, columnSurname, columnNumber, columnEdit);

        const contactTable = $("#table-body");
        contactTable.append(tableRow);

        reindexContacts();

        function setViewMode() {
            columnName.html(name);
            columnSurname.html(surname);
            columnNumber.html(number);
            columnEdit.html(`<button class="delete-button" type="button" title="Удалить"></button>
                <button class="edit-button" type="button" title="Редактировать"></button>`);

            tableRow.find(".delete-button").click(function () {
                tableRow.remove();
                reindexContacts();
            });

            columnEdit.find(".edit-button").click(function () {
                columnName.html(`<input type="text" class="edit-name" name="edit-name" minlength="2" maxlength="15" pattern="[A-Za-zА-Яа-яЁё\\\\s]+">`);
                columnSurname.html(`<input type="text" class="edit-surname" name="edit-surname" maxlength="20" pattern="[A-Za-zА-Яа-яЁё\\s]+">`);
                columnNumber.html(`<input type="tel" class="edit-number" name="edit-number" pattern="^\\+?\\d{10,15}$">`);
                columnEdit.html(`
                    <button class="cancel-button" type="button" title="Отминить"></button>
                    <button class="save-button" type="button" title="Ок"></button>
                `);

                const editName = columnName.find(".edit-name");
                editName.val(name);

                const editSurname = columnSurname.find(".edit-surname");
                editSurname.val(surname);

                const editNumber = columnNumber.find(".edit-number");
                editNumber.val(number);

                columnEdit.find(".cancel-button").click(function () {
                    setViewMode();
                });

                columnEdit.find(".save-button").click(function () {
                    const changedName = editName.val().trim();
                    const changedSurname = editSurname.val().trim();
                    const changedNumber = editNumber.val().trim();

                    if (!validateInputs(tableRow)) {
                        return;
                    }

                  /*  if (!isNumberUnique(changedNumber)) {
                        return;
                    }*/

                    name = changedName;
                    surname = changedSurname;
                    number = changedNumber;

                    setViewMode();
                });
            });
        }

        setViewMode();

        inputName.val("");
        inputSurname.val("");
        inputNumber.val("");
    });

    function validateInputs(form) {
        const inputs = form.find("input");
        let isFormValid = true;

        inputs.each(function () {
            const input = $(this);
            input.removeClass("invalid");

            if (input.val().trim() === "") {
                input.addClass("invalid");
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    function reindexContacts() {
        $("#table-body tr").each(function (index) {
            $(this).find(".row-number").text(index + 1);
        });
    }

    function isNumberUnique(number) {
        let isUnique = true;

        $(".phone").each(function () {
            if ($(this).text() === number) {
                isUnique = false;
                return false;
            }
        });

        return isUnique;
    }
})