// variable
let a = 1 // variable is a container for storing one value
a = 2 // we can change the value of a variable

// array
let arr = [1,2,3,"Ayush",2.5,true,undefined,null]; //array is a container for storing multiple values
console.log(arr) // [1, 2, 3, 'Ayush', 2.5, true, undefined, null]
console.log(arr[0]) // 1
console.log(arr[3]) // Ayush
console.log(arr.length) // 7
console.log(typeof arr) // object
console.log(typeof arr[0]) // number
console.log(typeof arr[3]) // string
console.log(typeof arr[4]) // number
console.log(typeof arr[5]) // boolean
console.log(typeof arr[6]) // undefined
console.log(typeof arr[7]) // null = object

arr[3] = 5 // we can change the value of an array element
console.log(arr) // [1, 2, 3, 5, 2.5, true, undefined, null]