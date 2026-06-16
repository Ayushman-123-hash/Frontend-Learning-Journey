/* filter()       ~ method is used to create a new array with all elements that pass
                      the test implemented by the provided function */
const items = [
    {name: "Laptop",     price: 50000},
    {name: "Mobile",     price: 20000},
    {name: "Tablet",     price: 30000},
    {name: "Headphones", price: 10000},
    {name: "Smartwatch", price: 15000}
]

let filteredItems = items.filter((items)=>{
    return items.price <= 20000
})
console.log(filteredItems)
console.log(items) // original array remains unchanged

// Map()          ~ method is used to create a new array with the results of calling a provided function on every element in the calling array

let arr = [1, 2, 3, 4, 5]
let newArr = arr.map((e)=>{
    return e + 2
    return e - 2
    return e * 2
    return e / 2
    return e ** 2
    return e % 2
})
console.log(newArr)

    // create a new array with the names of the items check in filter() method
        const Itemsnames = items.map((items)=>{  
            return items.name
        })
        console.log(Itemsnames)


// find()    ~ method is used to find the first element in an array that satisfies the provided testing function 
let findItem = items.find((items)=>{
     return items.price == 20000 
})
console.log(findItem)


// forEach()   ~ method is used to execute a provided function once for each array element
items.forEach((items)=>{
    console.log(items.name)
    console.log(items.price)
})

// some()      ~ method is used to test whether at least one element in the array passes the test implemented by the provided function
const hasCheapItem = items.some((items)=>{
    return items.price <= 20000
})
console.log(hasCheapItem)

// every()     ~ method is used to test whether all elements in the array pass the test implemented by the provided function
const allExpensiveItems = items.every((items)=>{
    return items.price >= 50000
})
console.log(allExpensiveItems)

// reduced()   ~ method is used to apply a function against an accumulator and each element in  the array (from left to right) to reduce it to a single value - Very Important
let arr2 = [1, 2, 3, 4, 5]

    // 1 step to do
let newArr2 = arr2.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
}, 0)
console.log(newArr2) // 15

    // 2 step to do
let newArr3 = ((a,b)=>{
    return a + b
    return a - b
    return a * b
    return a / b
    return a % b
    return a ** b
})
console.log(arr2.reduce(newArr3)) // 15


// include()     ~ method is used to determine whether an array includes a certain value among its entries, returning true or false as appropriate

const arr3 = [1, 2, 3, 4, 5]
console.log(arr3.includes(3)) // true
console.log(arr3.includes(6)) // false
