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

  getItem() {
    localStorage.getItem();
  }
}

const storage = new StorageController();

btnDesk.sendToForm();
btnDesk.removeAll();

// function getItemFromStorage() {
//   articleList.createElement();
// }
