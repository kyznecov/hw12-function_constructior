"use strict"

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;

    this.sayMeow = function() {
        alert("Мяу!");
    };
}

let cat = new Cat("Матроскин", "Беспородный");

cat.sayMeow();
