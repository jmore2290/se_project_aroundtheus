export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    //this._closeButton = this._popupElement.querySelector(".modal__close");
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target === evt.currentTarget ||
        evt.target.classList.contains("modal__close")
      ) {
        this.close();
      }
    });
  }
}
