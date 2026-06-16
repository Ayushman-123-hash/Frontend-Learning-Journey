// Array are Mutabel ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let arr = [1,6,2,8,3]
let srr = [2,4,4,2,6]
let drr = [8,2,9,5,4]

// console.log(arr, typeof arr)
// console.log(arr.length)

// arr[0] = 555
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// console.log(arr)

// Array's Methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1.
console.log(arr.toString())  // This method devlop arr to string.
// 2.
console.log(arr.join(" and "))  // this method add (and) replace to ,(coma).
// 3.
console.log(arr.pop())  // this method pop out (remove) the last element of arr.
console.log(arr)
// 4.
console.log(arr.push("harry"))  // this method add a new value in arr variable.
console.log(arr)
// 5.
console.log(arr.shift())  // this method shift (remove) the first element of arr.
console.log(arr)
// 6.
console.log(arr.unshift(222))  // this method unshift (Add) a value in the first element of arr.
console.log(arr)
// 7.
console.log(delete arr[4])  // Delete the element in the arr and show empty.
console.log(arr)
// 8.
console.log(arr.concat(srr,drr)) // this method concat (merged) the elements in one line.
// 9.
console.log(arr.sort())
console.log(srr.sort())
console.log(drr.sort())
// 10.
console.log(arr.splice(2,222,6,8,111,323))// this method splice add a new items to an array.
console.log(arr)
// 11.
console.log(arr.slice(1,4))// this method slice out a piece from an array,it creats a new array.
console.log(arr)
// 12.
console.log(arr.reverse())



