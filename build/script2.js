"use strict";
// defining variables with different types
let namee = "John";
let age = 10;
let isStudent = true;
console.log(`nName:$ {name}  Age:${age}IsStudent:${isStudent}`);
// program
let city = "newyork"; // inferred as string
// program 
// define various arry using typescript
let numbers = [1, 2, 3, 4, 5];
let names = ["chinmay", "deshpande"];
console.log(`${numbers}`);
console.log(`${names}`);
// program
// tuple examples
let person = ["chinmay", 1];
let phone = [7788959056, 7890653478];
// program
// enum
// roles - admin customer supportmanger developer
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// enum Roles {
// Admin,
// support,
// Customer
// }
// let chinmay:Roles = Roles.Admin
let favColor = Color.Blue;
// console.log(Color.Blue)
// program
// union type
let password = 123;
password = "ABCD";
// program
// convert type using type assertion
let somevalue = "this in unknow value";
let val = somevalue.length;
console.log(`String length: ${val}`);
// program
// unknow -  checked will happen for type
// any - check will not happen
let fruit = true;
let fruit2 = "banana";
let fruit3 = fruit2;
// program
let nulvalue = null;
nulvalue = "chinmay";
let undefinedval;
