console.log("Ayush")

    let cont = document.body.children[0].children[1]  // hard way to do
cont.style.backgroundColor = "blue"


// getElementsByClassName ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let Ayush = document.getElementsByClassName("box")
console.log(Ayush)                                  // easy way to do
Ayush[2].style.backgroundColor = "red"


// getElementById ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById("yellow").style.backgroundColor = "yellow"


// querySelector() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.querySelector(".box").style.backgroundColor = "green"


// querySelectorAll() ~~~~(jb bhi hum querySelectorAll k istamal krte h tbh loop lgana padta h)~~~~~~~~~~~~~~~
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e =>{
    // e.style.backgroundColor = "orange"        // uncomment krte hi sb boxes orange ho jayenge.
})


// getElementByTagName() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementsByTagName("div")
// HTMLCollection(7) [div.container, div.box, div.box, div.box, div#yellow.box, div.box, div.box, yellow: div#yellow.box]


// getElementByName()
document.getElementsByName("div")


// Matches(css) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
e =  document.getElementsByTagName("div")
// HTMLCollection(7) [div.container, div.box, div.box, div.box, div#yellow.box, div.box, div.box, yellow: div#yellow.box]
e[4].matches("#yellow") // true

e[3].matches("#yellow") // false


// Closet(css) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
e[0].closest(".container")
// <div class=​"container">​…​</div>​
e[1].closest(".container")
// <div class=​"container">​…​</div>​ 
e[2].closest(".container")
// <div class=​"container">​…​</div>​
e[3].closest(".container")
// <div class=​"container">​…​</div>​
e[4].closest(".container")
// <div class=​"container">​…​</div>​
e[5].closest(".container")
// <div class=​"container">​…​</div>​
e[6].closest(".container")
// <div class=​"container">​…​</div>​
e[7].closest(".container")
// false bcoz 7 box does not exist


// Contains() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.querySelector(".container").contains(e[0]) // true 
document.querySelector(".container").contains(e[1]) // true
document.querySelector(".container").contains(e[2]) // true
document.querySelector(".container").contains(e[3]) // true
document.querySelector(".container").contains(e[7]) // false bcoz 7 box does not exist
document.querySelector(".container").contains("body") /*false bcoz body k andar container h                                                                  container k andar body nhi h*/
document.querySelector("body").contains(".container") // true

