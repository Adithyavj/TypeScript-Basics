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
// console.log(Direction1.Up);
// console.log(Direction1.Down);
// console.log(Direction1.Left);
// console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Akhil'
};
// Type Assertion 
// - explicitly telling the complier that we want to treat an entity as a different type
let cid = 1;
// let customerId = <number>cid; // adding type assertion - Method 1
let customerId = cid; // adding type assertion - Method 2
// Functions
function addNum(x, y) {
    return x + y;
}
// function with no return type
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Amal'
};
const p1 = 1;
const add = (x, y) => x + y; // define what the function does , here addition
const sub = (x, y) => x - y; // define what the function does , here subtraction
// Classes
// classes are used to create objects, we can create multiple person objects with this class
class Person {
    // runs when we instantiate the class
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const adithya = new Person(1, 'Adithya'); // create a new object of type person in the const adithya
const mike = new Person(2, 'Mike');
// extending a class (inheritance)
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // initialize in Person
        this.position = position;
    }
}
const emp = new Employee(3, 'Vajid', 'Developer');
// console.log(emp.id);
// console.log(emp.name);
// console.log(emp.position);
// console.log(emp.register());
