localStorage.setItem('dat', 13)
console.log(localStorage.getItem('dat'))
let score = [100,200,300]
// localStorage.setItem('score', score)
localStorage.setItem('score', JSON.stringify(score))
let record = localStorage.getItem('score')
record = JSON.parse(record);
console.log(record)
console.log(typeof(record))


let xhttp = new XMLHttpRequest() 
console.log(xhttp)

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
        muc(this.responseText)
    }
}

xhttp.open('GET','https://automarine.ru', true)

function muc(data) {
    console.log(data)
}
