let a = "Ayushman Thakur"
let b = "Damini"

// 1. length ~~~~~~~~~~~
console.log(a.length)

// 2. UpperCase() ~~~~~~~~~~~
console.log(a.toUpperCase())

// 3. LowerCase() ~~~~~~~~~~~
console.log(a.toLowerCase())

// 4. Replace() ~~~~~~~~~~~
console.log(a.replace("Thakur"," "))

// 5. EndsWith() ~~~~~~~~~~~
console.log(a.endsWith("kur"))
console.log(a.endsWith("man"))

// 6. StartsWith() ~~~~~~~~~~~
console.log(a.startsWith("Ayu"))
console.log(a.startsWith("Tha"))

// 7. Slicing() ~~~~~~~~~~~                 # Slicing Method
console.log(a.slice(0,5))
console.log(a.slice(0,8))
console.log(a.slice(0,15))

// 8. Concatenation() ~~~~~~~~~~~
console.log(a.concat(b, "Rohan","Shubham",))

console.log(a,b) /* Itna functions k baad bhi String Change nhi hua kyuki String is Immutable. */