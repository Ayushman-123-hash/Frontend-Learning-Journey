let o = [1,2,3,4,5]
    let newo = o.map((a)=>{
        return a + 2
    })

    console.log(newo) // [3,4,5,6,7]

const items = [
    {name: "Tablet",     price: 30000},
    {name: "Headphones", price: 10000},
    {name: "Smartwatch", price: 15000}
]
let filteritems = items.filter((item)=>{
    return item.price <= 30000
})
console.log(filteritems) // [{name: "Tablet", price: 30000}]