function alertValues(elementParametr) {
    //console.log(elementParametr.value);
    //console.log(elementParametr.className);
}

function getEl(id) {
    var el = document.getElementById(id);
    return el;
}

var firstNameId = 'first-name',
    firstNameEl = getEl(firstNameId);
alertValues(firstNameEl);

var lastNameId = 'last-name',
    lastNameEl = getEl(lastNameId);
alertValues(lastNameEl);

var addressId = 'address',
    addressEl = getEl(addressId);
alertValues(addressEl);

var citiesId = 'cities',
    citiesEl = getE(citiesId);
alertValues(citiesEl);

var hobbiesId = 'hobbies',
    hobbiesEl = getEl(hobbiesId);
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



