function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.className = 'error input';
}

function addErrorClassToAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');
}

//addErrorClass('last-name');

window.setTimeout(addErrorClassToAllInputs, 3000);

//addErrorClassToAllInputs();

var sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', onSendButtonClick);

function onSendButtonClick() {
    addErrorClass('last-name');
}

function onFirstNameKeyup() {
    addErrorClass('first-name');
}

var firstNameEl = document.getElementById('first-name');
firstNameEl.addEventListener('keyup', onFirstNameKeyup);