"use strict";
// Basic Types
let id = 5;
let company = 'Microsoft';
let isPublished = true;
let x = 'Hello';
let age;
x = 10;
age = 30;
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hai'];
// Tuple - array with specified different types
let person = [1, "Hello", false];
// Tuple array
let employee;
employee = [
    [1, 'Adi'],
    [2, 'Arun'],
    [3, 'Arjun']
];
// Union (can be either)
let pid;
pid = '22';
pid = 22;
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);
const user = {
    id: 1,
    name: 'Akhil'
};
// Type Assertion 
// - explicitly telling the complier that we want to treat an entity as a different type
let cid = 1;
// let customerId = <number>cid; // adding type assertion - Method 1
let customerId = cid; // adding type assertion - Method 2
