// 'use strict';

// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//             b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//         }
//     }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count <= 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count <= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }
// writeYourGenres();

// console.log(personalMovieDB);

// const options = {
//     name: 'test',
//     width: 1200,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     }
// }

// const { border, bg } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);
// let counter = 0;
// for (let key in options) {
//     counter++;
// }
// console.log(counter);

// const arr = [1, 2, 3, 4, 6];

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// })

/* const arr = [3, 113, 26, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

let a = 5;
b = a;
b = b + 5;
console.log(b, a);

const obj = {
    a: 5,
    b: 1
};

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 5,
        y: 4
    }
}
const add = {
    d: 17,
    e: 20
}
console.log(Object.assign({}, add));
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(numbers);
console.log(newNumbers);

console.log(copy);
console.log(obj);


const answers = [];
answers[0] = prompt('What is your name?','');
answers[1] = prompt('What is your surname?','');
answers[2] = prompt('How old are you?','');

document.write(answers); */

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)