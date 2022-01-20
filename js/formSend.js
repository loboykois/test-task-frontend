"use strict";

const getBackBtn = document.querySelector("button.form__btn--back");

const saveBtn = document.querySelector("button.form__btn--save");

getBackBtn.addEventListener("click", backToFlowOne);

const formToSend = document.getElementById("myForm");
const formFields = formToSend.elements;

function backToFlowOne() {
  window.location.href = "frontend-task.html";
}

formToSend.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("name").value.trim();
  const surnameInput = document.getElementById("surname").value.trim();
  const weightInput = document.getElementById("weight").value.trim();
  const heightInput = document.getElementById("height").value.trim();
  const trainedInput = document.getElementById("trained").value.trim();

  if (
    !nameInput ||
    !surnameInput ||
    !weightInput ||
    !heightInput ||
    !trainedInput
  ) {
    return;
  }

  const person = {
    name: nameInput,
    surname: surnameInput,
    weight: weightInput + " KG",
    height: heightInput + " CM",
    trained: trainedInput + " Times",
  };

  localStorage.setItem("person", JSON.stringify(person));

  window.location.href = "frontend-task.html";
});

// for (let i = 0; i < formFields.length; i++) {
//   let field = formFields[i];

//   saveBtn.addEventListener("click", () => {
//     localStorage.setItem(field.name, field.value);
//   });
// }
