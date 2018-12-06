var firstNameId = 'first-name',
firstNameEl = document.getElementById(firstNameId),
lastNameId = 'last-name',
lastNameEl = document.getElementById(lastNameId),
addressId = 'address',
addresEl = document.getElementById(addressId),
citiesId = 'cities',
citiesEl = document.getElementById(citiesId),
hobbiesId = 'hobbies',
hobbiesEl = document.getElementById(hobbiesId);

firstNameEl.value = 'Alexander';
//lastNameEl.setAttribute('value', 'Belov');

window.alert(lastNameEl.className);
lastNameEl.className = 'last-name input default-input error-input';

citiesEl.value = 'Minsk';