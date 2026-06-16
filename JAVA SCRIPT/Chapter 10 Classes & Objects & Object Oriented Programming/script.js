// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal;              // sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name){
        this.name = name
        console.log("Object is Created...");
    }

    eats(){
        console.log('Kha rha hu');
    }
    jumps(){
        console.log('Kood rha hu');
    }
}


class Lion extends Animal{
    constructor(name){
        super(name)             //super key method
        console.log("Object is Created and he is a Lion...");
    }
    eats(){
        super.eats()
        console.log('Kha rha hu roar');             // Method Overwrite
    }
}

let a = new Animal("Bunny")
console.log(a);

let l = new Lion("Shera")
console.log(l);
