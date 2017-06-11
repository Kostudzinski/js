'use strict';

var tablicaImion = ['Kasia', 'Artur', 'Robert'];

console.log(tablicaImion[0]);


/*push dodaje na koniec element*/

tablicaImion.push('Konrad');

console.log(tablicaImion);


/*pop usuwa ostatni element*/

tablicaImion.pop();

console.log(tablicaImion);


/*unshift dodaje element na poczatek*/

tablicaImion.unshift('Aneta')

console.log(tablicaImion);


/*shift usuwa element z poczatku*/

tablicaImion.shift();

console.log(tablicaImion);


console.log(tablicaImion.length);

for (var i = 0; i<tablicaImion.length; i++) {
    console.log("Imie studenta to " + tablicaImion[i]);
}


/*łączenie imion w jeden ciag , pomiedzy elementami # */

console.log(tablicaImion.join('#'));

console.log(tablicaImion.reverse());


/*sortowanie alfabetycznie*/

console.log(tablicaImion.sort());

console.log(tablicaImion.sort().reverse().join(' '));


/*łączenie list*/

var noweImiona = ['Łukasz', 'Kamil'];

console.log(tablicaImion.concat(noweImiona));


/*sprawdzanie miesjca w liscie*/

console.log(tablicaImion.indexOf("Kasia"));

/*a tu odwrotnie*/

console.log(tablicaImion.slice(0,2));

/*dodawanie w konkretne miejsce (ktore miejsce [2], ile usuwamy z tylu [0] - nic, co dodajemy [ania]) */

tablicaImion.splice(2,0, 'Ania');

console.log(tablicaImion);



















