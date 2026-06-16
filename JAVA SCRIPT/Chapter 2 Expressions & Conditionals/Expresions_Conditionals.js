let age = 3
let grace = 2


// Arthematic Operators ~~
console.log(age + grace)
console.log(age - grace)
console.log(age / grace)
console.log(age * grace)
console.log(age ** grace)   //This is a Exponentiation 3 ki Power 2 (3*3).
console.log(age + + grace)
console.log(age + - grace)
console.log(age - + grace)
console.log(age - - grace)
console.log(age % grace)    //Show remender of 3 division 2.


// If & Else Conditions ~~
if((age + grace)>=18){
    console.log("You can drive")
}

else{
    console.log("You can't drive")
}

// Assignment Operators ~~
age = grace         // Equals to Assignment operator
console.log(age) 
age += grace         // Increment Assignment operator
console.log(age) 
age -= grace         // Decrement Assignment operator
console.log(age) 
age *= grace         // Multiplication Assignment operator
console.log(age) 
age /= grace         // Division Assignment operator
console.log(age) 
age %= grace         // Modulas Assignment operator
console.log(age) 
age **= grace         // Exponentiation Assignment operator
console.log(age) 

// Comparision Operators ~~

// And agr mujhe equals to check krna h toh m == equals to lgaunga kyuki single equal to
// Asignment Operator hai.

age == grace         // Compare the age equals to grace.
console.log(age)
age != grace         // Not Equals too
console.log(age)
age === grace         // Equal Value & Type
console.log(age)
age !== grace         // Not Equal Value & Not Equal Type
console.log(age)
age > grace           // Greater than
console.log(age)
age < grace           // Less than
console.log(age)
age >= grace          // Greater than or Equals to
console.log(age)
age <= grace          // Less than or Equals to
console.log(age)


// Termary Operator ~~

let a = 6
let b = 8
c = a>b ? (a-b) : (b-a)   

/*
Translate to~~
if(a>b){
    let c = a - b

else{
    let c = b - a
    }    
}
*/

console.log(c)