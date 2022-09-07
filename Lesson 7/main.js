// let a = 5
// let b = 4
// function anima () {
//     console.log(a * b)
//     return a * b
// }

// console.log(anima() * 5)

// let c = anima()

// console.log(c + 10)

// function Tidus (x,y,z) {
//     return (x + y) * z
// }

// console.log(Tidus (10,90,10))

//Первое задание

let divStore = document.querySelector(".div1")
let btn1 = document.querySelector(".btn-1")
let a = "Some random text"
function meat() {
    divStore.innerHTML = a
}

// Нажав на кнопку(переменную btn1), запустится функция по имени (meat)
btn1.onclick = meat

//Второе задание

let data = document.querySelector(".inp1")
let data2 = document.querySelector(".inp2")
let plus = document.querySelector(".btn-2")
let minus = document.querySelector(".btn-3")
let multiplication =  document.querySelector(".btn-4")
let division = document.querySelector(".btn-5")
let result = document.querySelector(".enter")
let answer = document.querySelector(".total")

function plusNumber () {
    answer.innerHTML = `Ответ:  ${+data.value + +data2.value}`
    return x + y
    
}
plus.onclick = plusNumber

function minusNumber () {
    answer.innerHTML = `Ответ: ${+data.value - +data2.value}`
    return x - y
}

minus.onclick = minusNumber

function multiNumber () {
    answer.innerHTML = `Ответ: ${+data.value * +data2.value}`
    return x * y
}

multiplication.onclick = multiNumber

function divideNumber () {
    answer.innerHTML = `Ответ: ${+data.value / +data2.value}`
    return x / y
}

division.onclick = divideNumber