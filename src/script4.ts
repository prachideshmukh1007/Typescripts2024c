// program 

// simple  function declaration and invocation

// function greet2(name: string):void{
//     console.log(`hello ,${name}`)
// }
// greet2("chinmay")


// // program

// // function with type annoatation , parameter and
// // return type

// function add(a:number,b:number):number{
//     return a + b
// }
// let q = add(12,3)
//console.log(q)


// program

// arrow and function expression

// let addB = function(x:number,y:number):number{
//     return x + y
// }
// add(12,4)


// let addC = (x:number,y:number):number=>{
//     return x + y
// }
// addC(23,4)


// program

function getTotal(...number:number[]):number{
   return numbers.reduce(function(acc,el){
    return acc + el
   },0)
}
getTotal(2,33,44,55,66,77)


// program

// Default parameter

function greetUser(name:string = "Guest"):void{
    console.log(`Hello ${name}`)
}
greetUser("chinmay")
greetUser();


// optional parameter

function showDetails(name:string, age?:number):void{
    if(age){
        console.log(`${name}  ${age}`);
    }
    else {
        console.log(`${name} has no age provided`)
    }
}
showDetails("chinmay")
showDetails("chinmay",12)




