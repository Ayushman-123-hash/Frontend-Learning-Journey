// Variable Hosting in JavaScript ~ 

    // var ~  is a global variable, and it is used to store the current hosting environment. It can be set to 'production', 'development', or 'test' depending on the environment in which the application is running.

            console.log(a) // var hi sirf undefind show krta h kyu ki vo ek globally scoped variable h, aur uska value initialization se pehle hi access kiya ja raha hai, isliye vo undefind show krta h.
            var a = 1;
            console.log(a)

    // let ~ is a block-scoped variable, and it is used to store the current hosting environment. It can be set to 'production', 'development', or 'test' depending on the environment in which the application is running.

            // console.log(c) // ReferenceError: Cannot access 'c' before initialization
            let c = 2;      // let is block-scoped variable h
            console.log(c)

    // const ~ is a block-scoped variable, and it is used to store the current hosting environment. It can be set to 'production', 'development', or 'test' depending on the environment in which the application is running.

            // console.log(d) // ReferenceError: Cannot access 'd' before initialization
            const d = 3;    // const is block-scoped variable h
            console.log(d)


// Function Hosting in JavaScript ~ sirf normal fuctions hi hosting hoti h, arrow functions aur function expressions hosting nahi hoti h.normal fuction ko kahi bhi rkh do console.log se upar y nhiche vo output dega error nhi dega pr arow functions aur function expressions ko hosting nhi hoti h, isliye agar aap unko console.log se niche rkhoge to error dega. toh unhe console.log se upar rkhna hoga taki vo output de sake.

    // Normal Function Hosting ~

            console.log(sum(2, 3)) // 5`
            function sum(a, b) {
                return a + b;
            }

    // Arrow Function Hosting ~

            console.log(multiply(2,3)) // ReferenceError: Cannot access 'multiply' before initialization
            const multiply = (a, b) => {
                return a * b;
            }