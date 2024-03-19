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
  editAvatarModal,
  profileModalCloseButton,
  addCardModalCloseButton,
  previewImageCloseButton,
  addNewCardButton,
  avatarEditSelector,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  previewImageFooter,
  profileEditForm,
  addCardForm,
  editAvatarForm,
  cardTemplate,
  cardListEl,
  cardTitleInput,
  cardURLInput,
  validationSettings,
} from "../utils/constants.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "58a7c735-ac44-49af-aeeb-e746dacd4b77",
    "Content-Type": "application/json"
  }
});

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
console.log(avatarEditSelector);
const user = new UserInfo(profileTitle, profileDescription, avatarEditSelector );
console.log(user);

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

const avatarFormValidator = new FormValidator(
  validationSettings,
  editAvatarForm
);

const addCardValidator = new FormValidator(validationSettings, addCardForm);
editFormValidator.enableValidation();
addCardValidator.enableValidation();
avatarFormValidator.enableValidation();

console.log(profileEditModal);
//const editFormPopup = new FormPopup(profileEditModal, handleProfileEditSubmit);

const addCardFormPopup = new FormPopup(addCardModal, (values) => {
  api
    .addNewCard(values)
    .then((data) => {
      renderCard(data);
      addCardForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
});



const editFormPopup = new FormPopup(
  profileEditModal,
  (values) => {
    api
      .patchProfileData(values)
      .then((data) => {
        user.setUserInfo(data);
        profileEditForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
  }
);


const avatarEditPopup = new FormPopup(
  editAvatarModal,
  (values) => {
    api
      .patchProfileImage(values.link)
      .then((data) => {
        console.log(data.avatar);
        user.setAvatar(data.avatar);
        editAvatarForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
  }
);




editFormPopup.setEventListeners();
//const addCardFormPopup = new FormPopup(addCardModal, handleAddCardFormSubmit);
addCardFormPopup.setEventListeners();
avatarEditPopup.setEventListeners();

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
/*
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
*/

//avatar edit
avatarEditSelector.addEventListener("click", () =>{
   avatarEditPopup.open();
});

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
