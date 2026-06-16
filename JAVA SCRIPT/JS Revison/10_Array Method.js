let arr = [22 , 33, 44, 55, 66]

// push()       ~ method is used to add an element at the end of an array
arr.push(77)
console.log(arr) // [22, 33, 44, 55, 66, 77]


// pop()        ~ method is used to remove the last element of an array
arr.pop()
console.log(arr) // [22, 33, 44, 55, 66]

// unshift()     ~ method is used to add an element at the beginning of an array
arr.unshift(11)
console.log(arr) // [11, 22, 33, 44, 55, 66]

// shift()       ~ method is used to remove the first element of an array
arr.shift()
console.log(arr) // [22, 33, 44, 55, 66]

// join()        ~ method is used to convert all the elements of an array into a string
let str = arr.join(" - ")
console.log(str) // "22 - 33 - 44 - 55 - 66"

// delete()      ~ operator is used to delete an element from an array, but it does not change the length of the array
delete(arr[2]) // delete the element at index 2
console.log(arr) // [22, 33, empty, 55, 66]
console.log(arr.length) // 5

// concat()       ~ method is used to merge two or more arrays into a new array
let arr1 = [77, 88, 99]
let arr2 = [110, 120, 130]
let mergedArr = arr.concat(arr1,arr2)
console.log(mergedArr) // [22, 33, empty, 55, 66, 77, 88, 99, 110, 120, 130]

// sort()         ~ method is used to sort the elements of an array in ascending order
let sortArr = [4,89,5,8,4,5,9,2,81,6]
console.log(sortArr.sort()) // [2, 4, 4, 5, 5, 6, 8, 9, 81, 89]
console.log(arr.sort()) // [22, 33, empty, 55, 66]   ~ sort() method does not work properly when there are empty elements in the array
console.log(arr.sort((a,b) => a - b)) // sort in ascending order
console.log(arr.sort((a,b) => b - a)) // sort in descending order

// Splice()        ~ method is used to add or remove elements from an array at a specific index
const spliceArr = [1, 2, 3, 4, 5]
spliceArr.splice(2, 0, 6) // add 6 at index 2
console.log(spliceArr)
spliceArr.splice(2, 1) // remove 1 element at index 2
console.log(spliceArr)

// slice()         ~ method is used to extract a portion of an array and return it as a new array
const sliceArr = [1, 2, 3, 4, 5]
let newArr = sliceArr.slice(1, 4) // extract elements from index 1 to index 3 (4 is not included)
console.log(newArr)

// reverse()       ~ method is used to reverse the order of the elements in an array
let a = [1, 2, 3, 4, 5]
a.reverse()
console.log(a)

// indexof()       ~ method is used to find the index of the first occurrence of an element in an array
let index = a.indexOf(3)
console.log(index) // 2

// flat()        ~ method is used to flatten a nested array into a single-level array
const flatArr = [1, [2, [3], [4], [5], 6]]
let result = flatArr.flat(5) // flatten the array up to 5 levels deep
console.log(result)

// Array.from()     ~ method is used to create a new array from an array-like or iterable object
let name = "Ayushman"
let numbers = "1234567890"
let Str = Array.from(name)
let Str1 = Array.from(numbers)
console.log(Str) // ["A", "Y", "U", "S", "H", "M", "A", "N"]
console.log(Str1) // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

