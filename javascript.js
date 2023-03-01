'use strict'

let numberOfFilms;


function start() {
   numberOfFilms = +prompt('How many movies have you watched?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
    numberOfFilms = +prompt('How many movies have you watched?', '');
   }
}


// Function Execution
start();
// Function Execution



const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:[],
    genres:[],
    privat: false
};




function remeberMyFilms() {   
    for (let i=0; i <2; i++){
        const a = prompt('One of the last movies you watched?', ''),
        b = prompt('How would you mark it?', '');
    
        if (a != null && b != null && a !='' && b != '' && a.length <50 && b.length <50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}



// // Function Execution
// remeberMyFilms();
// Function Execution


function detectPersonalLevel() {
    if (personalMovieDB.count <10) {
        console.log("You watched not that many movies actually");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
        console.log("You are somewhere in the middle");
    } else if (personalMovieDB.count >= 30) {
        console.log("You're connassaiur");
    } else {
        console.log("An error happened");
    }    
}

// Function Execution
// detectPersonalLevel()
// Function Execution


// function showMyDB(hidden) {

//     if (!hidden) {
//         console.log(personalMovieDB);
//     } 
// }

// showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`What is your genre number ${i}?`);
}

}

writeYourGenres()