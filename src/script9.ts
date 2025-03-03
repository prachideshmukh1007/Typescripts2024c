// overloading

// class Printer {
//     print(value:string):void;
//     print(value:number):void;
//     print(value:string|number){
//         if(typeof value == "string"){
//             console.log(`"printing the text"${value}`)
//         }
//         else {
//             console.log(`printing number :${value}`)
//         }
//     }
// }

// let p = new Printer()
// let q = a.print("Hello")
// let r = a.print(34) 


// overriding

class  Animal {
    makesound():void{
        console.log("some generic animal sound ....")
    }

}

class Dog extends Animal {
    makesound():void {
        console.log("woof woof ! ")
    }
}
let an = new Animal()
an.makesound()

let moti = new Dog()
moti.makesound()


// ducktypting

// class ---- same method ---- polymorphism
// same method name
// abstract method
// only signature no body

interface Fylable {
    fly():void
}


class Bird implements Fylable {
    fly():void {
        console.log("Bird if fying")
    }
}

class Airplane implements Fylable {
    fly():void {
        console.log("Aeroplane is fying")
    }
}

class kite implements Fylable {
    fly():void {
        console.log("kite is fying")
    }
}

function startFlying(obj:Fylable){
    obj.fly()
}

let aa = new Airplane()
let bb = new Bird()
let kk = new kite()

startFlying(aa)
startFlying(bb)
startFlying(kk)