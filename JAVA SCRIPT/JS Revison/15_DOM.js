// DOM = Document Object Model is refers to the mapping the entire HTML

// DOM vo hai jise hum HTML page ke JavaScript version jise hum code se control kr sktr h

//                                          DOM TREE
//                                            DOM
//                                             |
//                                            HTML
//                               ______________|______________
//                              |                             |
//                           Element                       Element
//                           <head>                        <body>  
//                              |                     ________|________        
//                           Element                 |                 |
//                           <title>              Element           Element
//                              |                  <h1>               <p>
//                             Text                                         
//                           "My Text"               |                 |
//                                                  Text              Text
//                                               "My Header"     "My Paragraph"

console.log("Hello World")
document.body.firstChild
document.body.firstElementChild
document.body.firstElementChild.childNodes
document.body.firstElementChild.children

// Classes
let boxes = document.getElementsByClassName("box")  // classes ke basis pr element ko access krne k liye getElementsByClassName method ka use krte h
console.log(boxes)

boxes[2].style.backgroundColor = "red"
boxes[3].style.backgroundColor = "blue"
boxes[5].style.backgroundColor = "green"

// ID's
document.getElementById("red").style.backgroundColor = "pink"  // id ke basis pr element ko access krne k liye getElementById method ka use krte h

// CSS Selector
document.querySelector(".box").style.backgroundColor = "cyan"  // querySelector method se hum kisi bhi element ko access kr skte h, ye method CSS selector ke basis pr element ko access krta h, ye method sirf pehla element ko access krta h

console.log(document.querySelectorAll(".box")) // querySelectorAll method se hum kisi bhi element ko access kr skte h, ye method CSS selector ke basis pr element ko access krta h, ye method sare element ko access krta h, isliye hum index ke basis pr element ko access krte h

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "yellow"
// })      // querySelectorAll method se hum kisi bhi element ko access kr skte h, ye method CSS   selector ke basis pr element ko access krta h, ye method sare element ko access krta h, isliye hum index ke basis pr element ko access krte h

// TAG Names
document.getElementsByTagName("p")[0].style.border = "2px solid black" // tag ke basis pr element ko access krne k liye getElementsByTagName method ka use krte h, ye method sare element ko access krta h, isliye hum index ke basis pr element ko access krte h
document.getElementsByTagName("p")[0].style.backgroundColor = "yellow" // tag ke basis pr element ko access krne k liye getElementsByTagName method ka use krte h, ye method sare element ko access krta h, isliye hum index ke basis pr element ko access krte h




