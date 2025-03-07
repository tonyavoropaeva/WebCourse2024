"use strict";

(function () {
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.speak = function () {
        console.log(this.name + " издает звук");
    };

    new Animal("Бедирхан").speak();

    function Cat(name) {
        Animal.call(this, name);
    }

    Cat.prototype = Object.create(Animal.prototype);

    Cat.prototype.speak = function () {
        console.log(this.name + " мяукает");
    };

    new Cat("Мурочка").speak();

    function Dog(name) {
        Animal.call(this, name);
    }

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.speak = function () {
        console.log(this.name + " гавкает");
    };

    new Dog("Кузенька").speak();
})();