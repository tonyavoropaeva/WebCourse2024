class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        alert(this.name + "издает звук");
    }

}


// • Сделайте классы-наследники “Собака” и “Кошка”, в них
// нужно переопределить метод, чтобы вместо “издает звук”
// было “лает”/“мяукает”
// • Задачу нужно сделать в двух вариантах:
// • Через функции-конструкторы и прототипы
// • Через классы ES6 (нужно изучить самостоятельно)