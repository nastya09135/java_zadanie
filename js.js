'use strict';
// Домашнее задание
// Переменные:years, guests, myDog, cups, tea, dogname, age, year
// Функции:dogYears, makeTea, secret
// Встроенные функции: log
// Аргументы:dogname, age, cups, tea
// Параметры:myDog, 4, guests, 'Earl Grey'
 
let txt2 = 'JS';
console.log(txt2.toLowerCase());

let txt3 = 'я люблю JS!';
console.log(txt3.substr(2,8));
console.log(txt3.substring(2,10));
console.log(txt3.slice(2, 10));

let str4 = 'я люблю JS!';
console.log(str4.indexOf('люблю'));

let txt5 ='я люблю JS!';
let n=6;
let result ="";
if (n<txt5.length){
    result=txt5.substr(0, n)+ "...";
}else {
    result=txt5;
}
console.log(result);

let txt6 = 'Я-люблю-JS!';
console.log(txt6.replace(/-/g, "!"));

let txt7 = 'я люблю JS';
let arr = txt7.split(' ');
console.log(arr);

let txt8 = 'привет мир';
console.log(txt8.split(""));