// Template Literals - A way to create strings in JavaScript that allows for embedded expressions and multi-line strings. They are enclosed by backticks (`) instead of single or double quotes.

// normal string
      // "" , '', thisse are used to create normal strings in JavaScript. They do not allow for embedded expressions or multi-line strings.

let str1 = "Hello, \n World!"
let str2 = 'Hello,\n  World!'
console.log(str1) // Hello,
console.log(str2) // Hello,

const name = "Ayush"
const age = 20
console.log("My name is " + name + " and I am " + age + " years old.") // My name is Ayush and I am 20 years old.


// Template literals
    // Template literals allow for embedded expressions using the ${} syntax. This means that you can include variables and expressions inside a template literal, and they will be evaluated and included in the resulting string.
let str3 = `Hello, World!`  // backticks are used to create template literals in JavaScript. They allow for embedded expressions and multi-line strings.

const name1 = "Rohan"
const age1 = 25
console.log(`My name is ${name1} and I am ${age1} years old.`) // My name is Rohan and I am 25 years old.

// Template literals also allow for multi-line strings without the need for escape characters. You can simply press enter to create a new line within the template literal.

let str4 = `This      is a      multi-line        
                          string.
It can span multiple lines without the need for escape characters.`
console.log(str4)