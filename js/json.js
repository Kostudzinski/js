'use strict';


var pracownicy = {
    "pracownicy": [
        {"firstName": "Krystian", "lastName": "Dziopa"},
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

/*dla wszystkch:*/

pracownicy.pracownicy.forEach( function(element, index) {
    console.log('Pracownik ' + (index + 1) + ' ma na imie ' + element.firstName + ' i na nazwisko ' + element.lastName);
});

/*tylko pierwszy:*/

console.log(pracownicy.pracownicy[0].firstName);  /*samo imie*/

    console.log('Pracownik 1 ma na imie ' + pracownicy.pracownicy[0].firstName + ' i na nazwisko ' + pracownicy.pracownicy[0].lastName); /*cale zdanie*/ 
