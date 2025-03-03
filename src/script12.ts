// generics

// function identity<T>(value: T): T {
//       return value
// }

// console.log(identity<string>("hello"))
// console.log(identity<number>(12))


// program

function reverseArray<T>(arr: T[]): T[] {
    return  arr.reverse()
}
reverseArray([1,2,3,4])
reverseArray(["chinmay","sarika","poorva","mayuri"])


// program

interface keyValue<k,v> {
    key:k,
    value:v
}
const kvp1:keyValue<number,string> ={ key:12,value:"chinmay"}
const kvp2:keyValue<number,number> ={ key:12,value:12}
const kvp3:keyValue<string,number> ={ key:"chinmay",value:12}
const kvp4:keyValue<string,string> ={ key:"fn",value:"chinmay"}

// program

// Generics with class

class Container<T> {
    private value: T;
    constructor(value:T) {
        this.value = value
    }
    getValue():T {
        return this.value;
    }
}
let string = new Container<string>("Hello")
let numberContainer = new Container<number>(12)


// program

// contraints with generics

function logLength<T extends {length:number}>(item:T):void{
    console.log(item.length)
}

logLength("Hello")
logLength([11,22,33,44,55])

// logLength(123)
//// logLength(true)
//// logLength({fn:"chinmay",ln:"deshpande"})


// program

function processData<T = string>(data:T){
    return data
}

processData<number>(42)
processData<boolean>(true)
processData("234")

// keyof Generics

function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
       return obj[key]
}

let info = {
    namee:"chinmy",
    lastname:"deshpande"
}

let info3 = {
    firstName : "chinmay",
    lastName:"deshpande",
    age : 23
}

getProperty(info,"namee")
getProperty(info,"lastname")

getProperty(info3,"firstName")
getProperty(info3,"lastName")
getProperty(info3,"age")


// let info = {
//     name:"chinmay" 
//    lastname:"deshpande"
//}

// ley info2 = {
//     firstName:"chinmay",
//     lastName:"deshpande"
//}