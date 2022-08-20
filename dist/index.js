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
user1.id = 6;
