"use strict";

(function () {
    const persons = [
        {
            name: "Andrey",
            age: 23
        },
        {
            name: "Nisa",
            age: 14
        },
        {
            name: "Jenny",
            age: 27
        },
        {
            name: "Jenny",
            age: 27
        },
        {
            name: "Jenny",
            age: 26
        },
        {
            name: "Lida",
            age: 32
        },
        {
            name: "Can",
            age: 24
        },
        {
            name: "Joe",
            age: 24
        },
        {
            name: "Burcu",
            age: 23
        },
        {
            name: "Tony",
            age: 26
        },
        {
            name: "Alex",
            age: 47
        },
        {
            name: "Flor",
            age: 35
        }
    ];

    function getAverageAge(persons) {
        return _.chain(persons)
            .map("age")
            .mean()
            .value();
    }

    console.log("Средний возраст: ");
    console.log(getAverageAge(persons));

    function getPersonsFromTwentyToThirtyAgeSortedInAscending(persons) {
        return _.chain(persons)
            .filter(person => person.age >= 20 && person.age <= 30)
            .sortBy("age")
            .value();
    }

    console.log("Люди от 20 до 30 отсортированные по возрастанию: ");
    console.log(getPersonsFromTwentyToThirtyAgeSortedInAscending(persons));

    function getUniqueNamesFromTwentyToThirtyAgeSortedInDescending(persons) {
        return _.chain(persons)
            .filter(person => person.age >= 20 && person.age <= 30)
            .map("name")
            .uniq()
            .sortBy("name")
            .reverse()
            .value();
    }

    console.log("Люди от 20 до 30 отсортированные по убыванию: ");
    console.log(getUniqueNamesFromTwentyToThirtyAgeSortedInDescending(persons));

    function getNamesCounts(persons) {
        return _.countBy(persons, "name");
    }

    console.log("Имена и количество их вхождений в список: ");
    console.log(getNamesCounts(persons));
})();