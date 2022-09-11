//Задание 1
let btn = document.querySelector(".btn")
let element = document.querySelector(".element")
function func1 () {
    element.classList.toggle("new1")
}

btn.onclick = func1 

//Задание 2
let btn2 = document.querySelector(".btn2")
let ul = document.querySelector("ul")
function func2 () {
    ul.classList.add("class1", "class2", "class3")
}
btn2.onclick = func2
//Задание 3

let btn3 = document.querySelector(".btn3")
btn3.onclick = function func3 () {
    ul.classList.remove("class1","class2","class3")
}