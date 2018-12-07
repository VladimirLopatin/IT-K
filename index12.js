function alertValues(elementParametr) {
    console.log(elementParametr.value);
    console.log(elementParametr.className);
}

var firstNameId = 'first-name',
    firstNameEl = document.getElementById(firstNameId);
alertValues(firstNameEl);

var lastNameId = 'last-name',
    lastNameEl = document.getElementById(lastNameId);
alertValues(lastNameEl);

var addressId = 'address',
    addressEl = document.getElementById(addressId);
alertValues(addressEl);

var citiesId = 'cities',
    citiesEl = document.getElementById(citiesId);
alertValues(citiesEl);

var hobbiesId = 'hobbies',
    hobbiesEl = document.getElementById(hobbiesId);
alertValues(hobbiesEl);


firstNameEl.value = 'Alexander';
/*console.log(firstNameEl.value);
console.log(firstNameEl.className);*/

lastNameEl.className = 'last-name input default-input error-input';
/*console.log(lastNameEl.value);
console.log(lastNameEl.className);*/

lastNameEl.title = 'Wrong last name';
/*console.log(lastNameEl.value);
console.log(lastNameEl.className);*/

firstNameEl.className = 'new class';
/*console.log(firstNameEl.value);
console.log(firstNameEl.className);*/

citiesEl.value = 'Minsk';



