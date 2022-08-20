//basic types
let id: number = 3;
let company: string = 'mycompany';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1,2,3,4,5]

ids.push(6)
let arr: any[] = [1,true, 'hello'];

//tuple
let person: [number, string, boolean] = [1,'Hello', true]
//tuple array
let employee:[number, string][]
employee = [
    [1, 'kanishka'],
    [2,'bradmn'],
    [3,'nagomi'],
]
//union
let pid: string | number
pid ='hell'

//Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Down)


//objects

// const user:{
//     id: number,
//     name: string
// } = {
//     id:1,
//     name: 'kan',
// }

type User ={
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'kanishka',
}

//type assertion
let message:any = 'Hello'
//let text = <number>message
let text = message as number
text = 1234

// functions
function addNum(x:number,y:number): number {
    return x+y
}
console.log(addNum(2,3))

//void
function log(message: string | number): void {
    console.log(message)
}
log('MyData')

//interfaces
interface UserInterface {
   readonly id: number,
    name: string,
    age: number
}
const user1: UserInterface ={
    id: 1,
    name: 'john',
    age: 23
}
//impossible to assign for Read only properties
// user1.id = 6

//Interfaces for functions
interface MathFunc{
    (x: number, y: number): number
}
const add: MathFunc = (x, y): number => x+y;
console.log(add(2,4))


const subtract: MathFunc = (x, y): number => x-y;
console.log(subtract(4,2))


//classes---------------------------------------------
class Person{
    regId: number
    street: string

    constructor(regId: number, street: string) {
       this.regId =regId
        this.street=street
    }
    register(){
        return `The person registered with ${this.regId} lives in ${this.street}`
    }
}
const person1 = new Person(1, "London")
const person2 = new Person(2,"Paris")
const person3 = new Person(3,"Amsterdam")
console.log(person1,person2,person3)
console.log(person1.regId)
console.log(person1.register())
//---------------------------------------------------

//implements an interface with a class--------------------
interface VehicleInterface {
    brand: string
    model:string
    year:number
    manufacture(): string
}
class Vehicle implements VehicleInterface{
    brand: string
    model:string
    year:number

    constructor(brand: string, model:string, year: number) {
        this.brand =brand
        this.model= model
        this.year =year
    }
    manufacture(): string {
        return `The ${this.model} of ${this.brand} has been manufactured in ${this.year} `
    }
}
const vehicle1 = new Vehicle("BMW", "S100", 2017)
console.log(vehicle1.manufacture())
//----------------------------------------------------
//extend vehicle class by car sub-class
class Car extends Vehicle{
    suspension: string
    color: string

    constructor(brand: string, model:string, year: number, suspension: string, color: string) {
        super(brand, model,year);
        this.suspension =suspension
        this.color =color
    }
    manufacture(): string {
        return `${this.brand} has ${this.model} and it has ${this.suspension} suspension`;
    }
}
const car1 = new Car("Audi", "A8", 2015, "auto", "black")
console.log(car1.suspension)
console.log(car1.brand)
console.log(car1.manufacture())

//generics>> used to make reusable components

function getArray<T>(items: T[]):T[] {
    return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4,5,6])
let nameArray = getArray<string>(['don','brad','kan'])
console.log(numArray)
console.log(nameArray)
numArray.push(7)
console.log(numArray)