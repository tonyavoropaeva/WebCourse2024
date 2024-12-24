document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const celsiusInputField = document.getElementById("text-field");
    const kelvinOutputField = document.getElementById("kelvin-output");
    const fahrenheitOutputField = document.getElementById("fahrenheit-output");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const celsiusTemperatureString = celsiusInputField.value.trim();

        if (celsiusTemperatureString.length === 0) {
            alert("Введите число");
            return;
        }

        const celsiusTemperatureNumber = Number(celsiusTemperatureString);

        kelvinOutputField.value = celsiusTemperatureNumber + 273.15;
        fahrenheitOutputField.value = celsiusTemperatureNumber * 9 / 5 + 32;
    });
});