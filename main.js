var text =document.getElementById("text")
var hedef =document.getElementById("hedef")
let a = 0
document.getElementById("btn").innerHTML = 0

//+

function sayac(){
    a++
    document.getElementById("btn").innerHTML = a
}

//reset

function reset(){
    a =0
    document.getElementById("btn").innerHTML = a
    text.style.display = ""
    document.getElementById("onay").innerHTML = ""
    
}

//onayla

function input() {
    text.style.display = "none"
    document.getElementById("onay").innerHTML = text.value
    
}

document.cookie= a
