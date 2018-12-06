var firstNameId = 'first-name',
firstNameEl = document.getElementById(firstNameId),
lastNameId = 'last-name',
lastNameEl = document.getElementById(lastNameId),
addressId = 'address',
addressEl = document.getElementById(addressId),
citiesId = 'cities',
citiesEl = document.getElementById(citiesId),
hobbiesId = 'hobbies',
hobbiesEl = document.getElementById(hobbiesId);

//debugger;
function alertValues() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.value);
    console.log(addressEl.value);
}

firstNameEl.value = 'Alexander';

alertValues();

lastNameEl.className = 'last-name input default-input error-input';

alertValues();

lastNameEl.title = 'Wrong last name';

alertValues();

citiesEl.value = 'Minsk';

alertValues();

