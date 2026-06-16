let arr = [1, 55, "Ayushman", 22.2, true, null, undefined, { name: "Ayushman" }, [1, 2, 3]]

console.log(arr) // [1, 55, "Ayushman", 22.2, true, null, undefined, {name: "Ayushman"}, [1, 2, 3

// console.log(typeof(arr));
console.log(typeof (arr[0]));
console.log(typeof (arr[1]));
console.log(typeof (arr[2]));
console.log(typeof (arr[3]));
console.log(typeof (arr[4]));
console.log(typeof (arr[5]));
console.log(typeof (arr[6]));
console.log(typeof (arr[7]));
console.log(typeof (arr[8]));

let arr2 = [1, 2, 3, 4, 5]
let arr3 = [6, 7, 8, 9, 10]
let arr4 = [3, 25, 363, 563, 226, 886, 8, 0]
console.log(arr2);

// Push , Pop , Shift , Unshift
arr2.push(6) // add 6 at the end of the array
console.log(arr2);
arr2.unshift(0) // add 0 at the beginning of the array
console.log(arr2);
arr2.pop() // remove the last element of the array
console.log(arr2);
arr2.shift() // remove the first element of the array
console.log(arr2);

// join
console.log(arr2.join(" - ")); // convert the array into a string with " - " as a separator

// delete
delete (arr2[0]); // delete the first element of the array
console.log(arr2); // [undefined, 2, 3, 4, 5]

// Concat
let mergedArray = arr2.concat(arr3); // merge arr2 and arr3 into a new array
console.log(mergedArray);

// sort
arr4.sort(); // sort the array in ascending order
console.log(arr4); // [0, 3, 8, 25, 226, 363, 563, 64456, 6436, 886]

// splice
arr2.splice(1, 0, 1) // add 1 at index 1
console.log(arr2); // [undefined, 1, 2, 3, 4, 5]
arr2.splice(1, 1) // remove the element at index 1 
console.log(arr2); // [undefined, 2, 3, 4, 5]

// slice
const sliceArr = [1, 2, 3, 4, 5]
let newArr = sliceArr.slice(1, 4) // extract elements from index 1 to index 3 (4 is not included)
console.log(newArr) // [2, 3, 4]

// Reverse
arr2.reverse() // reverse the order of the elements in the array
console.log(arr2) // [5, 4, 3, 2, undefined]

// flatArray
const flatarr = [1, 2, [3, 4, [5]], 6]
const newflatarr = flatarr.flat(Infinity) // flatten the array to any depth
console.log(newflatarr) // [1, 2, 3, 4, 5, 6]

// Array.from
let name = "Ayushman"
let no = 1234567890
let str = Array.from(name) // convert a string into an array of characters
console.log(str) // ["A", "y", "u", "s", "h", "m", "a", "n"]
let int = Array.from(no) // convert a string into an array of characters
console.log(int) // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]


// filter - all matching items
const items = [
    { name: "Ayushman", ID: "BCA", Fee: 50000 },
    { name: "Damini", ID: "BBA", Fee: 45000 },
    { name: "Manshu", ID: "BCA", Fee: 50000 },
    { name: "Jatin", ID: "BBA", Fee: 45000 },
    { name: "Tushar", ID: "BCA", Fee: 50000 }
]
let filterItems = items.filter((items) => {
    return items.ID == "BCA"
})
console.log(filterItems);

let filterItems2 = items.filter((items) => {
    return items.ID == "BBA"
})
console.log(filterItems2);

console.log(items) // original array is not modified

// Map
let calculator = [1, 2, 3, 4, 5]
let calculator2 = calculator.map((a) => {
    return a + 2
    return a - 2
    return a * 2
    return a / 2
})
console.log(calculator2) // [3, 4, 5, 6, 7]
//  map use with filter code
const Itemsnames = items.map((items) => {
    return items.name
})

console.log(Itemsnames);

// Find - first matching item
let finditems = items.find((items) => {
    return items.Fee == 50000
})
console.log(finditems);

// foreach
items.forEach((items) => {
    console.log(items.name)
    console.log(items.ID)
    console.log(items.Fee)
})

// some - at least one matching item
const cheapItem = items.some((items) => {
    return items.Fee <= 45000
})
console.log(cheapItem);

// every - all matching items
const expensiveItems = items.every((items) => {
    return items.Fee >= 50000
})
console.log(expensiveItems);

// reduce - reduce the array to a single value

let reduce = [1, 2, 3, 4, 5]
let newreduce = reduce.reduce((acc, curr) => {
    return acc + curr
    return acc - curr
    return acc / curr
    return acc * curr
}, 0)
console.log(newreduce) // 15

// Includes - check if an array includes a certain value

const includeArr = [1, 2, 3, 4, 5]
console.log(includeArr.includes(3)); // true
console.log(includeArr.includes(6)); // false

// Arrow function -is a shorter syntax of way to write a function in javascript.

const arrowFunc = (a, b) => {
    return a + b
}
arrowFunc(5, 10) // 15

// Template Literals ~ is a way to create strings in JavaScript that allows for easier string interpolation and multi-line strings. It uses backticks (`) instead of single or double quotes.

let Myname = "Ayushman"
console.log(`My name is ${Myname}`)

let a = {
    naam: "Ayushman",
    age: 20,
    city: "New Delhi"
}
console.log(`My name is ${a.naam}, I am ${a.age} years old & I live in ${a.city}`)

// Destructuring
const b = [1, 2, 3, 4, 5]
const [x, y, z, m, n] = b
console.log(x) // 1
console.log(y) // 2
console.log(z) // 3
console.log(m) // 4
console.log(n) // 5

// Rest Operator
const c = [1, 2, 3, 4, 5]
const [p, q, ...rest] = c
console.log(p) // 1
console.log(q) // 2
console.log(rest) // [3, 4, 5]
console.log(p, q, rest) // 1, 2, [3, 4, 5]

// spreead operator
function sum(a, b, c) {  // Normal Function
    return a + b + c
}
console.log(sum(...arr3))

let sum1 = (a, b, c) => {  // Arrow Function
    return a + b + c
}
console.log(sum1(...arr3))


// DOM Manipulation
// classes
let abox = document.getElementsByClassName("box")
console.log(abox)
abox[1].style.backgroundColor = "orange"
abox[3].style.backgroundColor = "red"
abox[4].style.backgroundColor = "green"
abox[5].style.backgroundColor = "blue"

// Id
document.getElementById("daba").style.border = "10px solid black"
document.getElementById("daba").style.color = "white"
document.getElementById("daba").style.backgroundColor = "black"

// CSS Selector
document.querySelector(".box").style.backgroundColor = "cyan" // querySelector method se hum kisi bhi element ko access kr skte h, ye method CSS selector ke basis pr element ko access krta h, ye method sirf pehla element ko access krta h
console.log(document.querySelectorAll(".box")) // querySelectorAll method se hum kisi bhi element ko access kr skte h, ye method CSS selector ke basis pr element ko access krta h, ye method sare element ko access krta h, isliye hum index ke basis pr element ko access krte h

document.querySelectorAll(".box1").forEach(e =>{
    e.style.backgroundColor = "yellow"
})

// TAG Names
document.getElementsByTagName("p")[0].style.border = "2px solid blue"
document.getElementsByTagName("p")[0].style.backgroundColor = "lightblue"


// EventListener
let boxes = document.getElementById("btn");
boxes.addEventListener("click", ()=>{
    document.querySelector(".box2").innerHTML = "<b> Yes Baby I am horny </b> Enjoy your porn!"
})

boxes.addEventListener("dblclick", ()=>{
    document.querySelector(".box2").innerHTML = "<b> Yes Baby I am double horny </b> Enjoy Your Porn!"
})

boxes.addEventListener("contextmenu",()=>{
    alert("Yes Baby Lick My Pussy Right Now!")
})


// Event Bubbling

    // child
document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation() // stop the event from bubbling up to the parent elements
    alert("Child was Clicked")
})

    // childContainer
document.querySelector(".childcontainer").addEventListener("click",()=>{
    alert("Child Container was Clicked")
})

    // container
document.querySelector(".container2").addEventListener("click",()=>{
    alert("Container was Clicked")
})


// set interval & set timeout

const getRandomcolor =()=>{
    let letters = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// set interval
let setInt = setInterval(()=>{
    document.querySelector(".child").style.backgroundColor = getRandomcolor()
}, 1000)

let setInt2 = setInterval(()=>{
    document.querySelector(".childcontainer").style.backgroundColor = getRandomcolor()
}, 1000)

let setInt3 = setInterval(()=>{
    document.querySelector(".container2").style.backgroundColor = getRandomcolor()
}, 1000)

console.log(setInt);
console.log(setInt2);
console.log(setInt3);

// set timeout
setTimeout(()=>{
    document.querySelector(".container3").style.backgroundColor = getRandomcolor()
}, 3000)

// Synchromous & Asynchronous Function
     
    // Synchronous Programming  ~  is the normal programing which perform task one by one means runs a code one by one.

    // Asynchronous Programming ~  is the programing you write/initate the code now and they run later,eg.., SetTimeout.
    console.log("start")
    setTimeout(()=>{
        console.log("Hey I am Asynchronous Programming")
    }, 3000)
    console.log("End")

    let o = [1,2,3,4,5]
    let newo = o.map((a)=>{
        setTimeout(()=>{
            console.log(a)
        }, 2000)
    })