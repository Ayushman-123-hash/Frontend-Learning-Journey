// Asyncronous in Java Script ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("Harry is a hacker")
console.log("Rohan is a hacker")

setTimeout(() => {
    console.log("I am inside settimeout")
})
setTimeout(() => {
    console.log("I am inside settimeout 2")
})

console.log("The End")

// CallBack Function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fn = () => {
  console.log("Nothing")
}

const CallBack = (arg) => {
    console.log(arg)
    fn()
}

const loadScript = (src, CallBack) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = CallBack("Harry")
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", CallBack)
