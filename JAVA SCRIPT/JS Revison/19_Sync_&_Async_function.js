// Synchronous Programming  ~  is the normal programing which perform task one by one means runs a code one by one.

let a = ("Ayushman")
let b = ("20")
let c = ("BCA")

console.log("I am " + a + " & i am " + b + " years old " + "& i am pursuing " + c)


// Asynchronous Programming ~  is the programing you write/initate the code now and they run later,eg.., SetTimeout.

console.log("Start")
setTimeout(function(){
    console.log("Hey I am Ayushman")
}, 3000)

console.log("End")
