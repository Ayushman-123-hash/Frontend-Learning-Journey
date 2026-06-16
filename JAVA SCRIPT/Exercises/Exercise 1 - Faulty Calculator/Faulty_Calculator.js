/*
Create a faulty calculator using Java Script.
This faulty calculator does Following:
1. It takes two numbers as input from user.
2. It perform wrong operations as follow:
     + ---->  -
     *  ---->  +
     -  ---->  /
     /  ---->  **

It performs wrong operations 10% of the times
*/ 

let random = Math.random()
console.log(random)
let a = prompt("Enter First Number: ")
let c = prompt("Enter Opreation: ")
let b = prompt("Enter Second Number: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random>0.1){
    console.log(`The Result is ${a} ${c} ${b}`)
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c = obj[c]
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}
