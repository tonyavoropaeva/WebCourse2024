"use strict";

(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(this.name + " издает звук");
        };
    }

    new Animal("Бедирхан").speak();

    class Cat extends Animal {
        speak() {
            console.log(this.name + " мяукает");
        };
    }

    new Cat("Мусенька").speak();

    class Dog extends Animal {
        speak() {
            console.log(this.name + " гавкает");
        };
    }

    new Dog("Джесенька").speak();
})();