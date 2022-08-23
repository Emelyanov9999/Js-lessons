let bleach = document.querySelector('.Ichigo');
let theme1 = document.querySelector('.Number_1');
let JoJo = document.querySelector('.KonoDioDa');

theme1.onclick = function() {
    let a = +bleach.value
    alert(a)
}



if (bleach > 100) {

    JoJo.querySelector(".KonoDioDa").innerHTML = "Muda muda muda muda!"

} else (bleach < 100) {

    console.log("Non non non non non...")
    alert("To be Continued")
}





