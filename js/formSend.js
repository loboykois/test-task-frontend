"use strict";
// ==================== UUID ====================

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// ==================== Form ====================

const myForm = document.querySelector("form");
const formName = document.getElementById("name");
const formSurname = document.getElementById("surname");
const formWeight = document.getElementById("weight");
const formHeight = document.getElementById("height");
const formTrained = document.getElementById("trained");
const backBtn = document.querySelector(".form__btn--back");
const saveBtn = document.querySelector(".form__btn--save");

// ==================== Storage controller ====================

class StorageController {
   addItem(obj) {
     localStorage.setItem("person" + " " + obj.name, JSON.stringify(obj));
   }

   remove(obj) {
      localStorage.removeItem("person" + " " + obj.name)
   }
 
   getItem(obj) {
     localStorage.getItem("person" + " " + obj.name, JSON.parse(obj));
   }
 
   clear() {
     localStorage.clear();
   }
 }
 
 const storage = new StorageController();


// ==================== Create person ====================

function createPerson(event) {
  event.preventDefault();

  const person = {
    id: uuidv4(),
    name: formName.value,
    surname: formSurname.value,
    weight: formHeight.value,
    height: formHeight.value,
    trained: formTrained.value,
  };

  //   storageControl(person);
  storage.addItem(person);
}

myForm.addEventListener("submit", createPerson);

