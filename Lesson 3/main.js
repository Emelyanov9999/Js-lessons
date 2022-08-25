document.querySelector(".test1").innerHTML = "<h2>Hello User</h2>"
document.querySelector("h1").innerHTML = "BLEACH TYBW"
let inp1 = document.querySelector(".inp")
let btn1 = document.querySelector(".btn")
let div2 = document.querySelector(".test2")
let p2 = document.querySelector(".p1")
btn1.onclick = function() {
    console.log("date update")
    
    let inp2 = +inp1.value
    div2.innerHTML = inp2
    console.log(inp2)
}

let prom = prompt("Which Bleach character do you want to play?")
if (prom == "Ichigo") {
    p2.innerHTML = "You've chosen " + prom
} else {
    alert ("Incorrect. That character's name doesn't exist!")
}