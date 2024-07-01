'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();

console.log(personalMovieDB);

/*
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/



/*
function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const calc = (a, b) => a + b;
console.log(calc(4, 3));

function convert(amount) {
    console.log(28 * amount);
}
convert(500);

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}
convert(500, usdCurr);
convert(500, eurCurr);

const usdCurr = 28;
const discount = 0.9;

function convert(curr, amount) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(usdCurr, 500));

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

const str = 'tesT';
console.log(str.toLowerCase());

 */