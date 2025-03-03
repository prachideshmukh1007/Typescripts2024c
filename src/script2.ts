// defining variables with different types

let namee:string = "John";
let age:number = 10
let isStudent:boolean = true 
console.log(`nName:$ {name}  Age:${age}IsStudent:${isStudent}`)


// program

let city = "newyork" // inferred as string


// program 

// define various arry using typescript

let numbers:number [] = [1,2,3,4,5];
let names:string [] = ["chinmay","deshpande"]
console.log(`${numbers}`)
console.log(`${names}`)


// program

// tuple examples

let person :[string,number]= ["chinmay",1]
let phone:[number,number]= [7788959056,7890653478]


// program

// enum
// roles - admin customer supportmanger developer

enum Color {
    Red = 1,
    Green ,
    Blue
}

// enum Roles {
// Admin,
// support,
// Customer
// }
// let chinmay:Roles = Roles.Admin

let favColor:Color = Color.Blue
// console.log(Color.Blue)


// program

// union type

let password:string|number = 123
password = "ABCD"


// program

// convert type using type assertion

let somevalue:unknown = "this in unknow value"
let val:number = (somevalue as string).length
console.log(`String length: ${val}`)


// program

// unknow -  checked will happen for type
// any - check will not happen


let fruit : any = true
let fruit2: unknown = "banana"
let fruit3: string = fruit2 as string


// program

let nulvalue:string | null = null
nulvalue = "chinmay"
let undefinedval:string | undefined
