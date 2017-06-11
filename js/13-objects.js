'use strict';

var uczen = {
    name: 'Piotr',
    surname: 'Czerski'
};

console.log(uczen.name);

uczen.wzrost = 178;

console.log(uczen);

uczen.printDetails = function() {
    return 'Ten uczen ma na imie ' + this.name + ' i ma ' + this.wzrost + 'cm wzrostu';
}

console.log(uczen.printDetails());

/*Klasy (function + nazwa z duzej litery*/

function Student(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko || 'Nieznane';
    this.wyswietlInfo = function () {
        return 'Imie: ' + this.imie + ',  ' + "Nazwisko: " + this.nazwisko;
    }
} 

var kasia = new Student('Katarzyna', 'Kostrzewa');

console.log(kasia);

console.log(kasia.wyswietlInfo());