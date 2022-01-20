"use strict"

const addNewBtn = document.querySelector('button.button__add')

addNewBtn.addEventListener('click', sendToForm)

function sendToForm () {
   window.location.href = 'formSend.html'
};
