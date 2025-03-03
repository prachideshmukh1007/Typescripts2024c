// single inheritance
// multi- level
// herarchical

// class Animal {
//   species:string
//   constructor(species:string){
//        this.species = species
//  }

// makesound():void {
//      console.log(`${this.species} makes a sound !`)
//  }
//}
//
// class Dog extends Animal{
//   bark(): {
//       console.log("Woof Woof ...!")
//   }

//}

// let moti = new Dog("Dog")
// console.log(moti.species)
// moti.bark()
// moti.makeSound()

// class -
//  object literal
// using constructor
// get and set method
// using get and set keyword

// class PersonG {

//    private _name:string

//    constructor(name:string){
//        this._name = name
//  }

// set name(newName:string){
//   this._name = newName
//  }
//  get name(){
//     return this._name
//  }

//  setName(newName:string){
//      this._name = newName
//  }
//}

// let chinmayG = new PersonG(("chinmay")

// chinmayG.name = "chinmay"
// console.log(chinmayG.name)
// console.log(chinmayG.getName)
// chinmayG.setName("chinmay")


// program

// static belongs to the class itself ,
// we don't need instance of class to call same
// Generally static =====> properties information


class Calculator {
    // pi2:number = 3.14; // instance variable
    static pi:number = 3.14; // static - class variable
    static CalculateAreaOfCircle(radius:number){
        return Calculator.pi * radius * radius
    }

}
console.log(Calculator.pi)
console.log(Calculator.CalculateAreaOfCircle(2))



