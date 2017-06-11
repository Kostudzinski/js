'use strict';

/*Zmienne liczbowe*/
var liczba = 10.04;

console.log(liczba);


/*Zmienne typu ciag znakow*/
var tekst = '    Dzien dobry   !  ';

console.log(tekst);

console.log(tekst.split(" "));

console.log(tekst.trim());


/*Zmienne logiczne*/

var zmiennaLogiczna = true;

console.log(zmiennaLogiczna);

if(zmiennaLogiczna) {
    console.log('Warunek spełniony');
} else {
    console.log('Warunek nie spełniony');
}

/*Typy specjalne*/

var zmiennaNiezdefiniowana;

console.log(zmiennaNiezdefiniowana);

var tablica = [null, 'Łukasz', 'Michał'];

console.log(tablica[0]);


/*sprawdzanie typu zmiennej*/

console.log(typeof zmiennaLogiczna);
console.log(typeof liczba);



