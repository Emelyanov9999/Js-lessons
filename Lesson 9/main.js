let div1 = document.querySelector(".div1")
let btn1 = document.querySelector(".btn1")
let a = [1,2,3,4,5,6,7,8,9,10]

btn1.onclick = () => {
    div1.innerHTML = a[5] 
    div1.classList.toggle("style1")
}

//Второе задание
let div2 = document.querySelector(".div2")
let btn2 = document.querySelector(".btn2")
let b = [1,2,3,4,5,6,7,8,9,10]
btn2.onclick = function () {
    div2.innerHTML = ''
    for(let i = 0; i<b.length; i++) {
        if(i % 2 == 0) continue
        console.log(b[i])
        div2.innerHTML += b[i] + ", "
        div2.classList.toggle("style1")
    }
    }
    


// Третье задание 

let div3 = document.querySelector(".div3")
let btn3 = document.querySelector(".btn3")
b = [1,2,3,4,5,6,7,8,9,10]
btn3.onclick = function () {
    div3.innerHTML = ''
    for(let i = 0; i<b.length; i++) {
        if(i % 2 == 1) continue
        console.log(b[i])
        div3.innerHTML += b[i] + ", "
        div3.classList.toggle("style1")
    }
    
}

//Четвертое задание

let div4 = document.querySelector(".div4")
let btn4 = document.querySelector(".btn4")
let c = [[1,2,3],[4,5,6],[7,8,9]]
btn4.onclick = () => {
    div4.innerHTML = ''
    for (let i = 0; i<c.length; i++) {
        for (let j = c[i].length - 1; j>=0; j--) {
            console.log(c[i][j])
            div4.innerHTML += c[i][j] + ", "
            div4.classList.toggle("style1")
        }
    }
}

//Задача из урока

let div5 = document.querySelector(".div5")
let btn5 = document.querySelector(".btn5")
let d = [1,0,0,0,0]
let e = 0

btn5.onclick = function () {

    div5.innerHTML = ""
    d[e] = 0
    d[e+1] = 1
    e++
        div5.innerHTML += d
    }
    