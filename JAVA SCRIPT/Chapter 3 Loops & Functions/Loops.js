console.log("Hey I am Tutorialn of lopps")

// for Loop ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let a = 1
for (let i = 0; i < 100; i++) {
    console.log(a + i)
}

// for in Loop ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let obj = {
    name: "Ayush",
    role: "Programmer",
    company: "Google"
}

for (const key in obj) { 
    const element = obj[key]; 
    console.log(key,element) 
}

// for of Loop ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
for (const c of "Ayush") {
    console.log(c)
}

// While loop ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let i = 0
while(i<6){
    console.log(i)
    i++
}

// do While Loop ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let j = 0
do {
    console.log(j)
    j++ 
} 
while (j<6);


