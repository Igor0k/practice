"use sctrict";

/*
// 12 Урок-----Практика ч1.-----
//1) Создать переменную numberOfFilms

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')

//2) Создать объект personalMovieDB

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3) Задайте пользователю по 2 раза вопросы: 

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько его оцените?', '');

//Записатть ответы в объект movies

personalMovieDB.movies[a] = b;
console.log(personalMovieDB);
*/

/*
//13 Урок. Условия 

if (4 == 5) {
    console.log('Правда');
} else {
    console.log('Неверно');
}

const num = 50;
if (num < 49) {
    console.log('Неверно');
} else if (num > 100) {
    console.log('Хорошо');
} else {
    console.log('Good');
}

(num === 50) ? console.log('Ok') : console.log('Error') ; //Тернатный оператор 

const nam = 50;
switch (nam) {   
    case 49:
        console.log('Неверно');
        break; //остановка цикла
    case 100:
        console.log('Неверно');
        break;
    default: //если ни одно условие не выполнилось
        console.log('Не в этот раз');
        break;
}
*/

/*
//14 Урок. Циклы

//1.
let num = 50;

while (num < 55) {  //Пока выполняется условие, мы делаем действие
    console.log(num);
    num++; //++ это инкримент (увеличение на 1)
}
//1.1
do {  //Сделай что-то
    console.log(num);
    num++;
}
while (num < 55);

//2.
for (let i = 1; i < 8; i++) { // (С чего начинается цикл; условие при котором цикл остановит работу; что будет происходить в новом цикле)
    if (i === 6) {
        continue; //пропуск шага при выполнении условия
    }
    console.log(i);
}
*/

/*
//15 Урок. Практика.
//1. Автоматизировать вопросы пользователю при помощи цикла

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i = 0;
while (i < 2) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько его оцените?', '');
        i++;
    if (a !== '' && b !== '' & a !== null && b !== null && a.length <= 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
        console.log('error');
    }
}
console.log(personalMovieDB);

if (numberOfFilms == '' || numberOfFilms == null) {
    console.log('ERROR');
} else if (numberOfFilms < 10) {
    console.log('min films');
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log('normal');
} else if (numberOfFilms > 30) {
    console.log('very good');
}
*/

//16 Урок. Функции
/*
function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('Hello World!');

function calc(a, b) { //Это function declaration
    return (a + b); // Вывод значения наружу
}
console.log(calc(5, 6));

function ret() {
    let num = 50;
    return num; // После return функция заканчивает выполнение
   
}
console.log(ret());

const logger = function () { //Это function expression
    console.log("Hello");
};

logger();

const calk = (a, b) => { // Стрелочная функция (a, b) - агрументы
    let c = a + b;
}; 
*/

/*
//18 Урок. Практика. Функции 

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {//Если Не число возвращает правду 
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('privat NO false');
    }
}
showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
    let i = 0;
    while (i < 2) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько его оцените?', '');
            i++;
        if (a !== '' && b !== '' & a !== null && b !== null && a.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
            console.log('error');
        }
    }
}
//rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms == '' || numberOfFilms == null) {
        console.log('ERROR');
    } else if (numberOfFilms < 10) {
        console.log('min films');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        console.log('normal');
    } else if (numberOfFilms > 30) {
        console.log('very good');
    }
}
//detectPersonalLevel();
console.log(personalMovieDB);

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`);
         personalMovieDB.genres[i - 1] = a;
    }
}
writeYouGenres();
*/
/*
//19 Урок. Callback - функции

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback(); // Выполенние второй переменной будет строго после выполнения первой переменной
}

learnJS('JavaScript', function () {
    console.log('Я прошел этот урок!');

});
*/

//20 Объекты. 

const options = {
    name: 'text',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(options["colors"]["border"]);
//delete options.name;  // Удаления свойства из объекта

let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key] [i]}`);
            counter++;
        }

    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
    }
}
console.log(counter);
