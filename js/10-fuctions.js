'use strict'

function addNumbers (par1, par2) {
    var num1 = par1;
    var num2 = par2;
    
    var wynik = num1 + num2;
    
    console.log('Wynik dodawania to ' + wynik);
    
    return wynik;
}

addNumbers(2,2);
addNumbers(7,5);
addNumbers('czesc ', 'kolego');

var wynikFunkcji = addNumbers(6,9);

console.log(wynikFunkcji);


/*ilosc liczb podzielnych przez 2 w przedziale do 20*/

function evenNumbersCount(par1) {
    var evenNumbers = 0;
    for (var i = 1; i<=par1; i++ ) {
        if(i%2 == 0) {
            evenNumbers++;
        }
    }
        return evenNumbers;
        
}

console.log(evenNumbersCount(20));



