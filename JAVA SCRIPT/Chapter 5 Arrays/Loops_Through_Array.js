let a = [1, 93, 5, 2, 88]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

// 1.       For each loop:-
a.forEach((value,index,arr) => {        
        console.log(value,index,arr)
})

// 2.       for in loop:-
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue
    const element = obj[key]
    console.log(key,element)
}

// 3.       for of loop:-
for (const element of a) {
    console.log(element)
}

// 4.       Map():-
let arr = [1, 13, 5, 7, 11]
// let newArr = []
// for (let index = 0; index < arr.length; index++) {     // This the old and slow method.                 
//     const element = arr[index];
//     newArr.push(element**2)
// }
let newArr = arr.map((e)=>{                               // This the map and fast method.
    return e**2
})
console.log(newArr)

// 5.       Filter():-
const Ayushman = (e)=>{                      // This is a Function
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(Ayushman))

// 6.       Reduce():-
let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b
 // return a+b
 // return a-b
 // return a/b
}
console.log(arr2.reduce(red))

// 7.       Array.From():-                      // Convert any Object in Array with this method.
console.log(Array.from("Ayushman")) 