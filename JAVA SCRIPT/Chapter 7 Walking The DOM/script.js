console.log("Hello World!")


document.body.firstElementChild
document.body.firstElementChild.childNodes
document.body.firstElementChild.children
document.body.firstElementChild.children[0] // box1
document.body.firstElementChild.children[1] // box2
document.body.firstElementChild.children[2] // box3
document.body.firstElementChild.children[3] // box4
document.body.firstElementChild.children[4] // box5

document.body.firstElementChild.children[3].nextElementSibling // box5

document.body.firstElementChild.children[3].previousElementSibling // box3