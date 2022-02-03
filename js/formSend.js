"use strict";

// ======================= Class person =======================
class Person {
//   constructor(descriptor) {
//     this.id = descriptor.id;
//     this.name = descriptor.name;
//     this.surname = descriptor.surname;
//     this.weight = descriptor.weight;
//     this.height = descriptor.height;
//     this.trained = descriptor.trained;
//   }
  id= Date.now();
  name= document.getElementById("name").value.trim();
  surname = document.getElementById("surname").value.trim();
  weight = document.getElementById("weight").value.trim();
  height = document.getElementById("height").value.trim();
  trained = document.getElementById("trained").value.trim();
}

// ======================= Trainee =======================


// const trainee = new Person({
//   id: Date.now(),
//   name: document.getElementById("name").value.trim(),
//   surname: document.getElementById("surname").value.trim(),
//   weight: document.getElementById("weight").value.trim(),
//   height: document.getElementById("height").value.trim(),
//   trained: document.getElementById("trained").value.trim(),
// });

// ======================= Storage controller =======================

class StorageController {
  saveToStorage() {
   let counter = 1;
    localStorage.setItem("trainee" + counter, JSON.stringify(Person));
    counter++
  }
}

// ======================= Storage =======================

const storage = new StorageController();

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
    saveBtn.addEventListener("click", (event) => {
      event.preventDefault();
      storage.saveToStorage();
      // localStorage.setItem("trainee", JSON.stringify(trainee));
    });
  }
}

const buttons = new BtnController();

buttons.getBack();
buttons.saveToStorage();