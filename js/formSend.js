"use strict";

// formToSend.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const nameInput = document.getElementById("name").value.trim();
//   const surnameInput = document.getElementById("surname").value.trim();
//   const weightInput = document.getElementById("weight").value.trim();
//   const heightInput = document.getElementById("height").value.trim();
//   const trainedInput = document.getElementById("trained").value.trim();

//   if (
//     !nameInput ||
//     !surnameInput ||
//     !weightInput ||
//     !heightInput ||
//     !trainedInput
//   ) {
//     return;
//   }

//   const person = {
//     name: nameInput,
//     surname: surnameInput,
//     weight: weightInput + " KG",
//     height: heightInput + " CM",
//     trained: trainedInput + " Times",
//   };

//   localStorage.setItem("person", JSON.stringify(person));

//   window.location.href = "frontend-task.html";
// });

// ======================= Class person =======================

class Person {
  constructor(descriptor) {
    this.id = descriptor.id;
    this.name = descriptor.name;
    this.surname = descriptor.surname;
    this.weight = descriptor.weight;
    this.height = descriptor.height;
    this.trained = descriptor.trained;
  }
}

// ======================= Trainee =======================

const trainee = new Person({
  id: Date.now(),
  name: document.getElementById("name").value.trim(),
  surname: document.getElementById("surname").value.trim(),
  weight: document.getElementById("weight").value.trim(),
  height: document.getElementById("height").value.trim(),
  trained: document.getElementById("trained").value.trim(),
});

// ======================= Storage controller =======================

class StorageController {
  saveToStorage() {
    localStorage.setItem();
  }
}

// ======================= BTN controller =======================

const getBackBtn = document.querySelector("button.form__btn--back");
const saveBtn = document.querySelector("button.form__btn--save");

class BtnController {
  getBack() {
    getBackBtn.addEventListener("click", () => {
      window.location.href = "frontend-task.html";
    });
  }
  saveToStorage() {
    saveBtn.addEventListener("submit", (event) => {
      event.preventDefault();
      // localStorage.setItem("trainee", JSON.stringify(trainee));
    });
  }
}

const buttons = new BtnController();

buttons.getBack();
// buttons.saveToStorage();

saveBtn.addEventListener("submit", (e) =>{
   e.preventDefault()
})