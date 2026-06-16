let button = document.getElementById("btn")
let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Teri Maa ki Chut BSDK</b>"
})

button1.addEventListener("dblclick", ()=>{
    document.querySelector(".box1").innerHTML = "<b>Bhagg BSDK</b>"
})

button2.addEventListener("contextmenu", ()=>{
    // document.querySelector(".box2").innerHTML = "<b>Teri Gand Faad Dunga</b>"
    alert("Chala Ja BSDK")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key,e.keyCode)
})