import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._previewImage = this._popupElement.querySelector(".modal__image");
    console.log(this._previewImage);
    this._previewCaption = this._popupElement.querySelector(".modal__footer");
  }

  open(data) {
    const { link, name } = data;
    this._previewImage.src = link;
    this._previewImage.alt = name;
    this._previewCaption.textContent = name;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
