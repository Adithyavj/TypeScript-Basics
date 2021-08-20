// Basic Types
let id: number = 5;
let company: string = 'Microsoft';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;

x = 10;
age = 30;

// Arrays
let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hai']

// Tuple - array with specified different types
let person: [number, string, boolean] = [1, "Hello", false]

// Tuple array
let employee: [number, string][];

employee = [
    [1, 'Adi'],
    [2, 'Arun'],
    [3, 'Arjun']
]

// Union (can be either)
let pid: string | number;
pid = '22';
pid = 22;

// enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
// console.log(Direction1.Up);
// console.log(Direction1.Down);
// console.log(Direction1.Left);
// console.log(Direction1.Right);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// console.log(Direction2.Up);
// console.log(Direction2.Down);
// console.log(Direction2.Left);
// console.log(Direction2.Right);


// Objects {} 

// declaring the type of the object
type User = {
    id: number;
    name: string;
}

const user: User = {
    id: 1,
    name: 'Akhil'
}

// Type Assertion 
// - explicitly telling the complier that we want to treat an entity as a different type

let cid: any = 1;
// let customerId = <number>cid; // adding type assertion - Method 1
let customerId = cid as number;  // adding type assertion - Method 2


// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

// function with no return type
function log(message: string | number): void {
    console.log(message);
}

// Interface

interface UserInfo {
    readonly id: number; // readonly property
    name: string;
    age?: number; // optional property
}

const user1: UserInfo = {
    id: 1,
    name: 'Amal'
}


// type can be used with primitives and unions

type Point = string | number
const p1: Point = 1;

// we can user interfaces with functions
interface MathFunc {
    (x: number, y: number): number // interface with a function
}

const add: MathFunc = (x: number, y: number): number => x + y; // define what the function does , here addition
const sub: MathFunc = (x: number, y: number): number => x - y; // define what the function does , here subtraction


// Classes
// classes are used to create objects, we can create multiple person objects with this class
class Person implements PersonInterface {
    id: number; // public by default (Access modifiers)
    name: string;

    // runs when we instantiate the class
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`;
    }
}

interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}

const adithya = new Person(1, 'Adithya'); // create a new object of type person in the const adithya
const mike = new Person(2, 'Mike');


// extending a class (inheritance)
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name); // initialize in Person
        this.position = position;
    }
}

const emp = new Employee(3, 'Vajid', 'Developer');

// console.log(emp.id);
// console.log(emp.name);
// console.log(emp.position);
// console.log(emp.register());


