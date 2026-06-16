// 1.  Arrow Funtion

// 2.  Template Literals

// 3.  Destructuring  & Rest Operator
    // Example 1        ~    Destructuring hai y
        const arr = [1, 2, 3, 4, 5]
        const [a, b, c, d, e] = arr
        console.log(a) // 1
        console.log(b) // 2
        console.log(c) // 3
        console.log(d) // 4
        console.log(e) // 5

    // Example 2       ~    Destructuring hai x + rest opreators
        const arr1 = [1, 2, 3, 4, 5]
        const [x, , , ...rest] = arr
        console.log(x,rest)

    // Example 3       ~    Destructuring hai y,u + rest opreators
        const arr2 = [1, 2, 3, 4, 5]
        const [y, , u, ...rest1] = arr
        console.log(y,u,rest1)

    // Example 4       ~    Object destructuring
        let {q,r} = {q:1, r:2}
        console.log(q,r)

// 4.  Spread Operator ~ is used to expand an iterable (like an array or string) into individual elements. It can be used in various contexts, such as function calls, array literals, and object literals.

const arr3 = [1, 2, 3]
const obj = {...arr3}
console.log(obj)

function sum(a,b,c){  // Normal Function
     return a + b + c
}
console.log(sum(...arr3))

let sum1 = (a, b, c) => {  // Arrow Function
    return a + b + c
}
console.log(sum1(...arr3))

    // Example of Spread Operator in Object Literals
        let obj1 = {name: 'John', age: 30}
        let obj2 = {...obj1, city: 'New York'} // obj2 is upadted version of obj1 with new property city
        let obj3 = {...obj1, ...obj2, name: 'Ayush'} // obj3 is overwrited version of obj1 with new value of name property
        console.log(obj1)
        console.log(obj2)
        console.log(obj3)


// Default Parameters ~  is a feature in JavaScript that allows you to set default values for function parameters. If a parameter is not provided when the function is called, it will take on the default value specified in the function definition.

function multiply(a, b = 1) { // b is default parameter with value 1
    return a * b
}
console.log(multiply(5)) // Output: 5 (b takes the default value of 1)
console.log(multiply(5, 2)) // Output: 10 (b takes the provided value of 2)

    // Example of Default Parameters with Arrow Function and we do with normal function also.
        let roolaDice = (sides = 6) => { // sides is default parameter with value 6
            return Math.floor(Math.random() * sides) + 1 // but if we want to roll a dice with different number of sides, we can pass the own value of dice sides as an argument.
        }
        console.log(roolaDice()) // Output: A random number between 1 and 6 (default)
        console.log(roolaDice(20)) // Output: A random number between 1 and 20 (custom)
    
    // Example of before default parameters, we have to check if the parameter is undefined and assign a default value manually.
        function rollaDiceOld(sides) {
            if (sides === undefined) {
                sides = 6 // Manually assigning default value
            }
            return Math.floor(Math.random() * sides) + 1
        }
        console.log(rollaDiceOld()) // Output: A random number between 1 and 6 (default)
        console.log(rollaDiceOld(20)) // Output: A random number between 1 and 20 (custom)


// Modules ~  is a way to organize and reuse code in JavaScript. It allows you to break your code into smaller, manageable pieces, and import/export functionality between different files.
  // in another file ~
