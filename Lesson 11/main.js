let inp1 = document.querySelector('.inp1')
let btn1 = document.querySelector('.btn1')
let a = new Set()
a.add('e')
a.add('r')
a.add('i')
a.add('k')
a.add('t')
a.add('h')
a.add('e')
a.add('b')
a.add('e')
a.add('s')
a.add('t')
a.add(inp1.value)
console.log(a)
//буквы выводятся лишь один раз и не повторяются

//Второе задание

function func1 () {
    a.add(inp1.value)
    for(let i of a) {
        console.log(i)
    }
    
}
btn1.onclick = func1
//Третье задание
let btn2 = document.querySelector('.btn2')
let inp2 = document.querySelector('.inp2')
let result = document.querySelector('.result')

function func2 () {
    if (inp2.value == 'Erik'|| inp2.value == 'erik'){
        result.innerHTML = true
    }
    else{
        result.innerHTML = false
    }
}
btn2.onclick = func2
//Задание 4
let result2 = document.querySelector('.result2')
let btn3 = document.querySelector('.btn3')
let b = [1,2,3,4,5,6,7,8,9,10]
btn3.onclick = function func3() {
    let c = []
    for(let i of b) {
        if(i <= 5) continue
        console.log(Number(c + i))
    }
}
