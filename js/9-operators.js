'use strict'

var liczbaPierwsza = 5;
var liczbaDruga = 2;

console.log(liczbaPierwsza % liczbaDruga);

/*Inkrementacja*/

while(liczbaPierwsza > liczbaDruga) {
    console.log(liczbaPierwsza);
    --liczbaPierwsza;
}

/*operatory przypisania*/

var liczbaTrzecia = 6;

console.log(liczbaTrzecia);

liczbaTrzecia += 3;
liczbaTrzecia *= 2;

console.log(liczbaTrzecia);


/*operatory porownania*/

if(2==2) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

/*operatory logiczne*/

if(2 <= 2 || 8 < 9) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}


/*operatory logiczne - negacja (!)*/

if(!(2<2)) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

/*operator warunkowy (skrocone if)*/

var zmienna = (2<3)?'Dwa jestr mniejsze niz trzy':'To jest nieprawda';

console.log(zmienna);
    

