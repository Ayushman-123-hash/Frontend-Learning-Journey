console.log('This is Promises');

let prom1 = new Promise((resolve,reject)=> {
    let a = Math.random()
    if(a<0.5){
        reject("No random number is not supporting you")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done')
            resolve("Harry")
        }, 3000);
    }
})
let prom2 = new Promise((resolve,reject)=> {
    let a = Math.random()
    if(a<0.5){
        reject("No random number is not supporting you 2")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done 2')
            resolve("Harry 2")
        }, 1000);
    }
})
let prom3 = new Promise((resolve,reject)=> {
    let a = Math.random()
    if(a<0.5){
        reject("No random number is not supporting you 3")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done 3')
            resolve("Harry 3")
        }, 1000);
    }
})
let prom4 = new Promise((resolve,reject)=> {
    let a = Math.random()
    if(a<0.5){
        reject("No random number is not supporting you 4")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done 4')
            resolve("Harry 4")
        }, 1000);
    }
})
let prom5 = new Promise((resolve,reject)=> {
    let a = Math.random()
    if(a<0.5){
        reject("No random number is not supporting you 5")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done 5')
            resolve("Harry 5")
        }, 1000);
    }
})

let p3 = Promise.all([prom1,prom2,prom3,prom4,prom5])
p3.then((a) =>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
let p4 = Promise.allSettled([prom1,prom2,prom3,prom4,prom5])
p3.then((a) =>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
let p5 = Promise.race([prom1,prom2,prom3,prom4,prom5])
p3.then((a) =>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
let p6 = Promise.any([prom1,prom2,prom3,prom4,prom5])
p3.then((a) =>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
let p7 = Promise.resolve([prom1,prom2,prom3,prom4,prom5])
p3.then((a) =>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
let p8 = Promise.reject([prom1,prom2,prom3,prom4,prom5])
p3.then((a) =>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

