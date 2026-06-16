// Common JS module ~~~~~~~~~~~~~~~

const { hello, ahello } = require("./14.1_Common_modules1.js")  // {hello,ahello} - this is called destructuring assignment. It allows us to extract values from objects and arrays and assign them to variables. Here we are extracting the hello and ahello functions from the module.exports object in modules1.js and assigning them to the variables hello and ahello respectively.
hello()
ahello(" Rohan")
ahello(" Sam")
ahello(" Tushar")
ahello(" Manshu")

    


// ES6 Modules ~~~~~~~~~~~~~~~

    import {hello1, ahello1} from "./14.2_ES6_modules2.js" // {hello1,ahello1} - this is called destructuring assignment. It allows us to extract values from objects and arrays and assign them to variables. Here we are extracting the hello and ahello functions from the module.exports object in modules1.js and assigning them to the variables hello1 and ahello1 respectively.
    hello1()
    ahello1(" Rohan")
    ahello1(" Sam")
    ahello1(" Tushar")
    ahello1(" Manshu") 