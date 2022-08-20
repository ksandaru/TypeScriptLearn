"use strict";
//basic types
let id = 3;
let company = 'mycompany';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
ids.push(6);
let arr = [1, true, 'hello'];
//tuple
let person = [1, 'Hello', true];
//tuple array
let employee;
employee = [
    [1, 'kanishka'],
    [2, 'bradmn'],
    [3, 'nagomi'],
];
//union
let pid;
pid = 'hell';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
const user = {
    id: 1,
    name: 'kanishka',
};
//type assertion
let message = 'Hello';
//let text = <number>message
let text = message;
text = 1234;
// functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 3));
//void
function log(message) {
    console.log(message);
}
log('MyData');
const user1 = {
    id: 1,
    name: 'john',
    age: 23
};
const add = (x, y) => x + y;
console.log(add(2, 4));
const subtract = (x, y) => x - y;
console.log(subtract(4, 2));
//classes---------------------------------------------
class Person {
    constructor(regId, street) {
        this.regId = regId;
        this.street = street;
    }
    register() {
        return `The person registered with ${this.regId} lives in ${this.street}`;
    }
}
const person1 = new Person(1, "London");
const person2 = new Person(2, "Paris");
const person3 = new Person(3, "Amsterdam");
console.log(person1, person2, person3);
console.log(person1.regId);
console.log(person1.register());
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    manufacture() {
        return `The ${this.model} of ${this.brand} has been manufactured in ${this.year} `;
    }
}
const vehicle1 = new Vehicle("BMW", "S100", 2017);
console.log(vehicle1.manufacture());
//----------------------------------------------------
//extend vehicle class by car sub-class
class Car extends Vehicle {
    constructor(brand, model, year, suspension, color) {
        super(brand, model, year);
        this.suspension = suspension;
        this.color = color;
    }
    manufacture() {
        return `${this.brand} has ${this.model} and it has ${this.suspension} suspension`;
    }
}
const car1 = new Car("Audi", "A8", 2015, "auto", "black");
console.log(car1.suspension);
console.log(car1.brand);
console.log(car1.manufacture());
//generics>> used to make reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6]);
let nameArray = getArray(['don', 'brad', 'kan']);
console.log(numArray);
console.log(nameArray);
numArray.push(7);
console.log(numArray);
