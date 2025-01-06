"use strict";

(function () {
    //  Создайте массив чисел
    const numbersArray = [3, 20, 11, 7, 15, 8, 41, 2, 9, 30, 17, 1];

    //  Отсортируйте его по убыванию
    function sortNumbersArrayInDescendingOrder(numbersArray) {
        numbersArray.sort((e1, e2) => e2 - e1);
    }

    sortNumbersArrayInDescendingOrder(numbersArray);
    console.log("Отсортированный массив: " + numbersArray);

    //  Получите подмассив из первых 5 элементов
    function getFirstElements(array, number) {
        return array.slice(0, number);
    }

    console.log("Первые пять элементов массива: " + getFirstElements(numbersArray, 5));

    //  Подмассив из последних 5 элементов
    function getLastElements(array, number) {
        return array.slice(-number);
    }

    console.log("Последние пять элементов массива: " + getLastElements(numbersArray, 5));

    //  Найдите сумму элементов массива, которые являются
    //  четными числами
    function getEvenNumbers(numbersArray) {
        return numbersArray.filter(number => number % 2 === 0);
    }

    function getEvenNumbersSum(numbersArray) {
        return getEvenNumbers(numbersArray)
            .reduce((sum, evenNumber) => sum + evenNumber, 0);
    }

    console.log("Сумма четных элементов массива: " + getEvenNumbersSum(numbersArray));

    //  Создайте массив чисел от 1 до 100, в таком порядке
    const hundredNumbersArray = [];

    for (let i = 1; i <= 100; ++i) {
        hundredNumbersArray.push(i);
    }

    console.log(hundredNumbersArray);

    //  Получите список квадратов четных чисел из этого массива
    function getEvenNumbersSquares(numbersArray) {
        return getEvenNumbers(numbersArray).map(x => x * x);
    }

    console.log(getEvenNumbersSquares(hundredNumbersArray));
})();