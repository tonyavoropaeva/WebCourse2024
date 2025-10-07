"use strict";

import _ from "lodash";

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
    ]

    function getAverageAge(persons) {
        return _
            .chain(persons)
            .map("age")
            .reduce((agesSum, age) => agesSum + age, 0)
            .value() / persons.length;
    }

    console.log(getAverageAge(persons));

    function getPersonsFromTwentyToThirtyAgeInAscending(persons) {
        return _
            .chain(persons)
            .filter(person => person.age >= 20 && person.age <= 30)
            .sortBy("age")
            .value();
    }

    console.log(getPersonsFromTwentyToThirtyAgeInAscending(persons));

    function getUniqueNamesFromTwentyToThirtyAgeInDescending(persons) {
        return _
            .chain(persons)
            .filter(person => person.age >= 20 && person.age <= 30)
            .sortBy("name")
            .map("name")
            .uniq()
            .reverse()
            .value();
    }

    console.log(getUniqueNamesFromTwentyToThirtyAgeInDescending(persons));

    function getCountNames(persons) {
        return _.countBy(persons, "name");
    }

    console.log(getCountNames(persons));
})();