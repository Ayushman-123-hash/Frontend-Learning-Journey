message = "Good Evening"

function greet() {
    let message = "Good Afternoon"
    
    {
        let message = "Good Morning"
        console.log("Hello :" + message)
    }

    let c = function greet2(){
        console.log("I am a c :" + message)
    }
    return c
}
c = greet()
c()
console.log("Hello :" + message)