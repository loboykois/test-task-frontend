"use strict";

// ==================== Page elements ====================

const articleList = document.querySelector(".article__list");
const articleItem = document.querySelector(".article__item");

const addNewBtn = document.querySelector(".button__add");
const removeAllBtn = document.querySelector(".button__remove");

// ==================== BTN controller ====================

class BtnController {
  sendToForm() {
    addNewBtn.onclick = () => {
      window.location.href = "formSend.html";
    };
  }

  removeAll() {
    removeAllBtn.onclick = () => {
      storage.clear();
    };
  }
}

const btnDesk = new BtnController();

// ==================== Storage controller ====================

class StorageController {
  clear() {
    localStorage.clear();
  }

  getItemLS() {
    if (localStorage.getItem("person Ilia")) {
      return JSON.parse(localStorage.getItem("person Ilia"));
    }
    return;
  }

  removeItemLS (obj) {
     localStorage.removeItem(obj.name);
  }
}

const storage = new StorageController();

btnDesk.sendToForm();
btnDesk.removeAll();

const person = storage.getItemLS();

// ==================== Get items from storage ====================

function getItemFromStorage(obj) {
  const newLi = document.createElement("li");
  newLi.classList = "article__item";
  newLi.innerHTML = `${obj}`;
  articleList.append(newLi);
}

getItemFromStorage(person.name);
getItemFromStorage(person.surname);
getItemFromStorage(person.weight + " " + "KG");
getItemFromStorage(person.height + " " + "CM");
getItemFromStorage(person.trained + " " + "Times");
