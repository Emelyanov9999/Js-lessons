
let box = prompt("Введи колличество коробок:")
let result = (box == 10 ) ? true:false
console.log(result)

let wheel = 4;
(wheel == 4) ? console.log("У машины 4 колеса") : console.log("Количество колёс не совпадает");

/* Чтобы написать картину необходимы краски, карандаши и мольберт с кисточками. Не хватает лишь кисточек*/
let paint = true
let pencils = true
let easel = true
let brushes = prompt("Есть ли в местном магазине кисточки?")
if (brushes == true) {
    console.log("Мы сможем нарисовать картину")
}else if (brushes == "yes") {
    console.log("Мы сумеем нарисовать картину")
}else if (brushes == "да") {
    console.log("Теперь мы точно нарисуем картину")
}else {
    console.log("Нам нечем рисовать")
}

/* Для приготовления пирого нужно минимальное кол яблок и лимонов*/
let apples = prompt("Введите количество имеющихся у вас яблок:");
if (apples == 6) {
    console.log("Мы приготовим вкусный пирог")
} else if (apples > 6 ){
    console.log ("Огромный пирог")
} else if (apples > 1 || apples == 3 ) {
    console.log("Не большой пирог")
}
else if (apples >= 0) {
    console.log("Пирог не получится")
}else {
    console.log ("Какая-то лажа")
}

//Математические операторы
console.log(2 ** 3)   // 2 умножим на себя 3 раза
console.log(12 % 5)   // результат деления 2 и остаток 2

// Операторы сравнения
console.log(5 == 5)
console.log(5 != 6)  // true
let a = 7
console.log(6 <= a)   /* переменная a , может быть как равна 6 так и быть больше*/
let b = 4
console.log(5 >= b)   // значение b  меньше или равно 5
console.log(10 > 8, 8 < 10)
console.log("2"== 2 , "2" === 2, "2" != 2)  /* true,false,false*/
// Сравнение символов
console.log("a" < "b")  // символ a считается за 1 очко , когда символ b это 2 очка 
console.log("ac" > "ab") /* первые символы в обоих строках равны по 1 очку , второй символ в первой строке "c" - 3 очка , у  второй строки "b" - 2 очка*/   
console.log("x" < "super" /*символ х расположен дальше от начала алфавита ,чем первый символ s у строки "super"*/)

