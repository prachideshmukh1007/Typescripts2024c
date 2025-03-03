// interface

interface Person {
    name: string
    age:number
}

let amol: Person = {
    name:"chinmay",
    age:34,
}


// program 

// optional

interface Car  {
    model:string,
    year:number,
    color?:string

}

let myCar:Car = {
    model:"Audi Q4",
    year:2023,
    
}

let myCarB:Car = {
    model:"AudiQ4",
    year:2023,
    color:"red"
}



// program 

// Read only

interface Book  {
    readonly title: string
    author: string
}

let mahabharat: Book = {
    title:"mahabharat",
    author:"vyas"
}

// mahabharat.title = "mahabharat"
mahabharat.author = "P vyas"


// program

interface Calculator {
    add(a:number,b:number):number;
    subtraction(a:number,b:number):number
}

let calC:Calculator = {
    add:(a,b) => a+b,
    subtraction:(a,b) => a- b

}
calC.add(13,4)
calC.subtraction(23,4)


// program

// function type

interface  Greet {
    (name:string):string // ==> rule for function
}

// arrow function

let greete:Greet = (name:string) =>"Hello"

let gr:Greet = function(name:string):string{
    return "hello"
}
gr("chinmay")




//  interface Body {
//data :{
//         id:number,
//         email:string
//         first_name: string
//         last_name: string
//         avatar:string
//    }
//    support: {
//          url:string ,
//           text : "To keep ReqRes free ,contributions towards servsr costs are appreciated !"
//    }
//}