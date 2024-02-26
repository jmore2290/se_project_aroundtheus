import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import ImagePopup from "../components/PopupWithImage.js";
import FormPopup from "../components/PopupWithForm.js";
import {
  initialCards,
  profileEditButton,
  profileEditModal,
  previewImageModal,
  addCardModal,
  profileModalCloseButton,
  addCardModalCloseButton,
  previewImageCloseButton,
  addNewCardButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  previewImageFooter,
  profileEditForm,
  addCardForm,
  cardTemplate,
  cardListEl,
  cardTitleInput,
  cardURLInput,
  validationSettings,
} from "../utils/constants.js";

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cardSection.addItem(createCard(cardData));
    },
  },
  cardListEl
);

cardSection.renderItems();

const user = new UserInfo({ profileTitle, profileDescription });
console.log(user);

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
const addCardValidator = new FormValidator(validationSettings, addCardForm);
editFormValidator.enableValidation();
addCardValidator.enableValidation();

console.log(profileEditModal);
const editFormPopup = new FormPopup(profileEditModal, handleProfileEditSubmit);
editFormPopup.setEventListeners();
const addCardFormPopup = new FormPopup(addCardModal, handleAddCardFormSubmit);
addCardFormPopup.setEventListeners();

const previewImage = new ImagePopup(previewImageModal);
previewImage.setEventListeners();

function createCard(data) {
  const cardElement = new Card(data, cardTemplate, handleCardImageClick);
  return cardElement.getView();
}

/*   EVENT HANDLERS
 */

function handleCardImageClick(link, name) {
  const data = { link, name };

  previewImage.open(data);
}

function handleProfileEditSubmit(data) {
  const { name, description } = data;

  user.setUserInfo(name, description);

  editFormPopup.close();
}

function handleAddCardFormSubmit(data) {
  const { name, link } = data;
  //const cardElement = new Card(data, cardTemplate, handleCardImageClick);
  cardSection.addItem(createCard(data));
  addCardFormPopup.close();
}

profileEditButton.addEventListener("click", () => {
  const { profileTitle, profileDescription } = user.getUserInfo();
  profileTitleInput.value = profileTitle;
  profileDescriptionInput.value = profileDescription;
  editFormPopup.open();
  //should I have a validator here?????
});

addNewCardButton.addEventListener("click", () => {
  addCardFormPopup.open();
  addCardValidator.toggleButtonState();
});
