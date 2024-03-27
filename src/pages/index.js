import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import ImagePopup from "../components/PopupWithImage.js";
import PopupConfirm from "../components/PopupConfirm.js";
import FormPopup from "../components/PopupWithForm.js";
import {
  initialCards,
  profileEditButton,
  profileEditModal,
  previewImageModal,
  addCardModal,
  editAvatarModal,
  popupConfirmModal,
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
    "Content-Type": "application/json",
  },
});

const popupConfirm = new PopupConfirm(popupConfirmModal);
popupConfirm.setEventListeners();

const user = new UserInfo(profileTitle, profileDescription, avatarEditSelector);
console.log(user);

const renderCard = (cardData) => {
  const card = new Card(
    {
      cardData,
      userId: userId,
      handleCardClick: (imageData) => {
        previewImage.open(imageData);
      },
      handleDeleteClick,
      handleLikeClick,
    },
    cardTemplate
  );
  cardSection.addItem(card.getCardView());
};

function handleDeleteClick(item) {
  popupConfirm.open();
  popupConfirm.setSubmitAction(() => {
    api
      .deleteCard(item.getId())
      .then(() => {
        item.removeCard();
        popupConfirm.close();
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

function handleLikeClick(card) {
  if (!card._isLiked) {
    api
      .addCardLike(card._id)
      .then(() => {
        card.updateLikeStatus(true);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    api
      .removeCardLike(card._id)
      .then(() => {
        card.updateLikeStatus(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

const cardSection = new Section(
  {
    renderer: renderCard,
  },
  cardListEl
);

let userId = "";

// Loading initial section

api.getAppInfo().then(([cards, userData]) => {
  userId = userData._id;
  cardSection.renderItems(cards), user.setUserInfo(userData);
  console.log(userData);
});

console.log(avatarEditSelector);

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
      addCardFormPopup.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

const editFormPopup = new FormPopup(profileEditModal, (values) => {
  console.log(values);
  api
    .patchProfileData(values)
    .then((data) => {
      user.setUserInfo(data);
      editFormPopup.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
console.log(popupConfirmModal);

const avatarEditPopup = new FormPopup(editAvatarModal, (values) => {
  api
    .patchProfileImage(values.link)
    .then((data) => {
      console.log(data.avatar);
      user.setAvatar(data.avatar);
      avatarEditPopup.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

editFormPopup.setEventListeners();
//const addCardFormPopup = new FormPopup(addCardModal, handleAddCardFormSubmit);
addCardFormPopup.setEventListeners();
avatarEditPopup.setEventListeners();

const previewImage = new ImagePopup(previewImageModal);
previewImage.setEventListeners();

/*   EVENT HANDLERS
 */

//avatar edit
avatarEditSelector.addEventListener("click", () => {
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
