// VAR ~~~~~~~~~
var a = 22          // var is globally scoped

a = 33                // var can be updated
var a = 44         // var can be re-declared
console.log(a)

// LET ~~~~~~~~~
let b = 22          // let is block scoped

b = 33                // let can be updated but not re-declared
console.log(b)

// CONST ~~~~~~~~~
const c = 22         // const is block scoped

console.log(c)       // const cannot be updated or re-declared
