// async function getData() {
//     // Simulate getting data from a server               // Real Code
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

                                // Settle means resolve or reject
                                // resolve means promise has settled successfully
                                // reject means promise has not settled successfully

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
    
    let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    let data = await x.json() 
    console.log(data) 
    return 455              
}

async function main() {
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("Process data")

    console.log("Task 2")
}

main()

// data.then((v) => {
//     console.log("data")

//     console.log("Process data")

//     console.log("Task 2")
// })