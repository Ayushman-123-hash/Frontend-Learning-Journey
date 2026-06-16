// Callback function ~ is a function are passed in a another function as an argument, which is then invoked inside the outer function to complete an action.

        // ek function jo hum kisi dusre function ke andar argument ke form me bhejte hain, aur baad me usse call (run) kiya jata hai.

        // Callback function vo function hota hai jo baad me kaam karne ke liye kisi aur function ko diya jata hai.

        // “Function ke andar diya gaya function = callback function”

        /*😄 Real life example:
        Soch tu pizza order karta hai 🍕
        Aur bolta hai:
        “Pizza banne ke baad mujhe call kar dena”
        👉 yahan:
        Pizza banana = main function
        Call karna = callback function */

// Example 1:

function greet(name) {
    console.log("Hello " + name);
}                                                       
function processUserInput(callback) {
    var name = "John";
    callback(name);
}
processUserInput(greet); // Output: Hello John

// Example 2:

const fn = ()=>{
    console.log("Thakur")
}

const callback = (arg , fn) =>{
    console.log(arg);
    fn()
}

const loadscript = (src , callback , fn) => {
    let sc = document.createElement('script')
    sc.src = src
    sc.onload = () => callback("Ayushman" , fn)
    document.body.append(sc)
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" , callback , fn)




