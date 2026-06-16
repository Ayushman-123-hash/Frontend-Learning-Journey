let button = document.getElementById("btn");
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you are clicked</b> Enjoy Your Day!";
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>I am a double click</b> Enjoy Your Day!";
})

button.addEventListener("contextmenu", ()=>{
    alert("Right Click is disabled");
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key , e.keyCode);
})