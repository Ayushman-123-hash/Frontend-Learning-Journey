console.log("Hey I am Ayushman Thakur")

// Var ~~~~~     Var is Globally Scoped variable.
//                               &
//               Var can be Updated and Re-Declared within its Scoped.

var a = 5
a = a + 1
var b = 6.8
var c = "Ayush"  
// var 55a = "Shubham"  Thats Not Allowed
 console.log(a+b)
 console.log(typeof a, typeof b,typeof c)


// Const (Constant) ~~~~~   Const is a Block Scoped Variable.
//                                          &
//                          Const can not be Changed/Update and Re-Declared.
const d = 5
// d = d + 2 Thats Not Allowed
console.log(d)


// Let ~~~~~   Let is also a Block Scoped Variable.
//                             &
//             Let can be Updated but not Re-Declared.
let e = 6
e = e + 2

{
    let e = 66
    console.log(e)
}
console.log(e)