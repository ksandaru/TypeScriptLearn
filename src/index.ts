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
user1.id = 6
