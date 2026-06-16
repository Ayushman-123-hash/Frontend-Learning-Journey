console.log("This is Promises");

let prom1 =  new Promise((resolve , reject)=>{
    let a = Math.random()
    if(a < 0.5){
        reject('No random number is less than 0.5')
    }
    else{
        
        setTimeout(()=>{
            console.log('Yes I am done');
            resolve('I am resolved');  
        }, 3000)
    }
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

// promises.all ~~~~~~~~~
let prom2 =  new Promise((resolve , reject)=>{
    let a = Math.random()
    if(a < 0.5){
        reject('No random number is less than 0.5 - 2')
    }
    else{
        
        setTimeout(()=>{
            console.log('Yes I am done 2');
            resolve('I am resolved 2');  
        }, 1000)
    }
})


let p3 = Promise.all([prom1 , prom2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})


// promises.allSettled ~~~~~~~~~
let prom3 =  new Promise((resolve , reject)=>{
    let a = Math.random()
    if(a < 0.5){
        reject('No random number is less than 0.5 - 3')
    }
    else{
        
        setTimeout(()=>{
            console.log('Yes I am done 3');
            resolve('I am resolved 3');  
        }, 1000)
    }
})


let p4 = Promise.allSettled([prom2 , prom3])
p4.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})