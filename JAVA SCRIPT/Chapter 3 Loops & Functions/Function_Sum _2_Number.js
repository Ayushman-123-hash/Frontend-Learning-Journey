function sum(a,b,c=3) {  // c is a default value this is add automaticaly.(c=3 is a Optional Parameter)
    // console.log(a + b)
    return a + b + c   // a + b ki value ko result m print karena k liye return value use krte h.
}

result1 = sum(2,3)
result2 = sum(5,6)
result3 = sum(1,9)

console.log("The Sum of These Numbers is: ", result1)
console.log("The Sum of These Numbers is: ", result2)
console.log("The Sum of These Numbers is: ", result3)