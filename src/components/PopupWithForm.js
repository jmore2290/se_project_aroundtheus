import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._formInputs = this._popupForm.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const values = {};
    this._formInputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  _submitForm = (e) => {
    e.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  };

  setEventListeners() {
    console.log("helper6");
    this._popupForm.addEventListener("submit", this._submitForm);
    super.setEventListeners();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
