//Задача 1

// for (let a = 0; a <= 10; a++) {
//     if(a % 2 == 1) continue
//     console.log(a);
// }

/* 1%2 даёт остаток 1, 1==1, значит данная итерация цикла прервётся и
число 1 не будет выводиться в консоли и так со всеми нечётными*/

// let b = 0
// while ( b <= 10) {
//     if( b % 2 == 1) continue
//     be++
//     console.log(be)
// }

// let c = 0
// do {
//     if (c % 2 == 1) continue
//     c++
//     console.log(c)
// } while (c <= 10)

//Задача 2

// let e = 99
// for (let d = 1; d <= 100; d++) {
//     if (d + e == 100) {
//         console.log(d + "+" + e)
//         e--
//     }
// }

let f = 1
let g = 99
// while (f <= 100) {
//     if(f + g == 100)
//     console.log(f + "+" + g)
//     f++
//     g--
// }
do {
    if(f + g == 100) {
        console.log(f+"+"+g)
        f++
        e--
    } 
} while (f <= 100)