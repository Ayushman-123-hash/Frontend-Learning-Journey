/* SCOPE ~ area where variables and functions are accessible , there are 4 types of scope        :           global scope , function scope , block scope & function scope.*/

// var is a global scoped variable
// let is a blocked scoped variable
// const is a blocked scoped variable



 const a = 10 // global variable
 function test(){
    const b = 20 // function scope variable
    console.log("Here is :", a,b) // can access global variable and function scope variable
 }
 test()
 console.log(a) // can access global variable
//  console.log(b) // cannot access function scope variable


    // 1.  Global Scope ~ variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

        var globalVar = "10";
        {
            var globalVar = "20"; //this is a global scope variable with the same name as the var variable, but it is only accessible within this block.
            const globalVar1 = "30"; //this is a block scope variable with the same name as the var variable, but it is only accessible within this block.
            let globalVar2 = "30"; //this is a block scope variable with the same name as the var variable, but it is only accessible within this block.
        }
        console.log(globalVar); // Output: I am a global variable
        // console.log(globalVar1); // this will cause an error because globalVar1 is not accessible outside of the block
        // console.log(globalVar2); // this is also will cause an error because globalVar2 is not accessible outside of the block


    // 2. Function Scope ~ variables declared within a function are in the function scope and can only be accessed within that function.

    function myFunction() {
        const functionVar = "I am a function variable in the function scope";
        console.log(functionVar); // Output: I am a function variable
    }
    myFunction()
      // console.log(functionVar); // this will cause an error because functionVar is not accessible outside of the function


    // 3. Block Scope ~ variables declared within a block (e.g., inside curly braces {}) are in the block scope and can only be accessed within that block.

    if (true) {
        const blockVar = "I am a block variable in the block scope";
        console.log(blockVar); // Output: I am a block variable
    }
      // console.log(blockVar); // this will cause an error because blockVar is not accessible outside of the block


    // 4. Lexical Scope ~ variables declared in an outer scope are accessible in an inner scope, but not vice versa.

    function outerFunction() {
        const outerVar = "I am an outer variable in the lexical scope";
        function innerFunction() {
            console.log(outerVar); // Output: I am an outer variable
        }

    }


    // 5. Module Scope ~ variables and functions declared in a module are in the module scope and can only be accessed within that module.

    // In JavaScript, when you use the `import` and `export` statements to create modules, the variables and functions declared in those modules are only accessible within that module unless they are explicitly exported. This helps to prevent naming conflicts and keeps the code organized.


    

    // Example of scope in JavaScript

    function example() {
        const c = 20; // function scope variable
        if (true) {
            const c = 30;
            console.log(c); // Output: 30 (block scope variable)
        }
        console.log(c); // Output: 20 (function scope variable)
    }   
    example()