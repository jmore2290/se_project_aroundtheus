import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector("#popup-confirm-form");
    this._submitButton = this._popupElement.querySelector(".modal__button");
  }

  setSubmitAction(action) {
    console.log("helpser4");
    this._handleFormSubmit = action;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit();
  };

  setEventListeners() {
    console.log("helper5");
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("helper7");

      this._handleFormSubmit();
    });
  }
}
