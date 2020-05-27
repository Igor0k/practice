"use sctrict";

/*-----Практика ч1.-----*/
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