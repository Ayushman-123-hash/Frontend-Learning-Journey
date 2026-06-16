// Arrow Function - A concise way to write functions in JavaScript. They do not have their own 'this' context and are often used for shorter functions.

() => {} // This is an arrow function with no parameters and an empty body.
            // Aur arrow function mai hum function keyword ka use nhi karte hai, aur isme 'this' keyword ka behavior alag hota hai, yeh apne surrounding context se 'this' value ko inherit karta hai. like parent function ya global scope se. Arrow functions are often used for callbacks.
 // There are two ways to write arrow Function ~~~
    // First---
    const add = (a,b) => {
        return(a + b)
    }
    console.log(add(5,5))

    // Second---
    const sub = (a,b) => (a - b)
    console.log(sub(10,5))

// Example of an arrow function with parameters and a return value
const chai = (a,b) =>{ // jb curly braces honge toh huma return keyword use krna hoga
    return a + b
}
console.log(chai(2,3)) // 5


// If the function body has only one expression, you can comit the curly braces and the 'return' keyword ~~~ Aur y wla tarika Arrow function ka React mai jyada use hota hai.
const add1 = (a,b) => a + b // jb curly braces nhi honge toh huma return keyword nhi use krna hoga
console.log(add(5,10)) // 15


// Aur agr huma Arrow funtion mai object return krna hai toh hume usko parentheses mai wrap krna hoga
const person = (name,age) =>{  // object return krne ke liye parentheses ka use kiya gaya hai
    return {name:name, age:age}
} 

const person2 = (name,age) => ({name:name, age:age}) // object return krne ke liye parentheses ka use kiya gaya hai
console.log(person("Ayush",20)) // { name: 'Ayush', age: 20 }
console.log(person2("Rohan",23)) // { name: 'Rohan', age: 23 }


