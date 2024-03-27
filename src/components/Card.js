export default class Card {
  constructor(
    { cardData, userId, handleCardClick, handleDeleteClick, handleLikeClick },
    cardSelector
  ) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._likes = cardData._likes;
    this._isLiked = cardData.isLiked;
    this._userId = userId;
    this._userCardId = cardData["owner"]._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    return this._cardSelector.cloneNode(true);
  }

  _renderLikes() {
    if (this._isLiked) {
      this._imageLike.classList.add("card__like-button_active");
      console.log("whyamhere1");
      console.log(this._isLiked);
      console.log(this._imageLike);
    } else {
      this._imageLike.classList.remove("card__like-button_active");
      console.log("whyamhere2");
    }
  }

  getCardView() {
    this._element = this._getTemplate();
    this._setEventListenersCard();
    const imageElement = this._element.querySelector(".card__image");
    const imageTitle = this._element.querySelector(".card__title");
    this._imageLike = this._element.querySelector(".card__like-button");
    imageElement.src = this._link;
    imageElement.alt = `Photo of ${this._name}`;
    imageTitle.textContent = this._name;

    console.log(this._id);
    console.log(this._likes);

    this._renderLikes();

    return this._element;
  }

  updateLikeStatus(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes();
  }

  _setEventListenersCard() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleCardClick({ name: this._name, link: this._link })
      );

    this._element
      .querySelector(".card__trash-button")
      .addEventListener("click", () => this._handleDeleteClick(this));

    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeClick(this));
  }

  getId() {
    return this._id;
  }

  removeCard() {
    this._element.remove();
  }
}
