// let Object1 = new XMLHttpRequest()
// Object1.onreadystatechange=function(){
//     if(this.readyState==4&&this.status==200){
//         func1(this.responseText)
//     }
// }
// function func1 (data) {
//     console.log(data)
// }
// Object1.open('Get','https://automarine.ru')
// Object1.send()


//Запись для обучения

/*fetch('http://127.0.0.1:5500/index.html')
    .fetch(data => {
        console.log(data)
    })

fetch('https://automarine.ru')
    .fetch(data => {
        console.log(data)
    })*/

    /*fetch('http://127.0.0.1:5500/index.html')
    .then(data => {
        console.log(data)
        console.log(data.text())
    })*/

//Вариант записи 1 вложенность

// fetch('http://127.0.0.1:5500/index.html')
//     .then(data => {
//         console.log(data)
//         data.text().then(data2 => {
//             console.log(data2)
//         })
//     })

//Вариант записи 2 красивое оформление без вложенности

fetch('http://127.0.0.1:5500/index.html')
    .then(data => data.text())
    .then(data => {
        console.log(data)
    })

    //promise

let a = new Promise((resolve,reject)=>{
    fetch('http://127.0.0.1:5500/index.html')
    .then(data =>{
        resolve(data.text())
    })
})

a.then(data => {
    console.log(data)
})

Promise.all([a,b]).then(data => {
    console.log(data)
})