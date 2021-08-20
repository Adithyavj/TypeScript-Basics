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
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);


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
