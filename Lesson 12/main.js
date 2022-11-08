//Задание 1
let div1 = document.querySelector('.d1').onclick=function(){
    this.classList.add('container')
    this.ondblclick=function(){
        this.classList.remove('container')
    }
}
//Задание 2

let div2 = document.querySelector('.d2').ondblclick=function(){
    console.log(this)
}

//Задание 3

let img1 = document.querySelector('.img1').onclick=function(){
    this.classList.toggle('img2')
}

//Задание 4

let div3 = document.querySelector('.d3').innerHTML="";
let inp1 = document.querySelector('.inp1').onkeydown=function(event){
    console.log(event.key)
   div3.innerHTML+=event.keyCode

}
