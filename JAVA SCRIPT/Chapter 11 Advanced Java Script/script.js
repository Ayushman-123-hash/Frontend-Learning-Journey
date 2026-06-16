// IIFE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
function sum(a,b,c){    
    return a+b+c
}

(async function main(){
    let a = await sleep()
    console.log(a)
    
    let b = await sleep()
    console.log(b)  
})()

// Destructuring ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(async function main(){

    let [x,y,...rest] = [1,5,7,8,9,10]  
    console.log(x,y,rest)

    // Solve with Object ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    
    // let {a,b,...rest} = obj
    // console.log(a,b,rest);
    
})()

// Spread Syntax ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(async function main(){

    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    
    let {a,b} = obj
    console.log(a,b);
    
    let arr = [1,4,6]
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr));
})()