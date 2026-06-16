// for loop

let a = 1
for(i = 0; i<100; i++){
    console.log(i + a)
}

// for in loop

let obj = {
    name : "rohan",         // name is a key and rohan is a element
    age : 20,
}
for (const key in obj){
    const element = obj[key]
    console.log(key,element)
}

// for of loop

for(const c of "rohan"){
    console.log(c)
}

// while loop

let b = 0
while(b<6){
    console.log(b)
    b++
}

// do while loop

let j = 1
do{
    console.log(j)
    j++
}
while(j<6)