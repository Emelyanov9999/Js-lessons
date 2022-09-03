let number = prompt("Введите число!") 
switch (+number) {
    case 0: console.log("Вы ввели число 0") 
    break
    case 15: console.log("Вы ввели число 15") 
    break
    case 26: console.log("Вы ввели число 26") 
    break
    case 150: console.log("Вы ввели число 150") 
    break    
    default: console.log("Это не число")
}

// let exam = prompt("введи число, а не строку")
// switch (exam) {
//     case "1": console.log("Я ввел строку 1")
//     break
//     case "5": console.log(" вы ввели строку 5")
//     break
//     case 10: console.log("вы ввели число 10")
//     break
//     default: console.log("это строка 10, а не число 10")
// }

// let quiz = prompt("Угадай число от 1 до 5")
// switch(+quiz) {
//     case 1: case 2: case 3: case 5: console.log("Не угадал!")
//     break
//     case 4: console.log("Правильно, везунчик!")
// }