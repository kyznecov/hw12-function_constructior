"use strict"

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.greet = function() {
        alert("Привет, " + firstName );
    };
}

let user = new User("Вася",);

user.greet();

console.log(user);
