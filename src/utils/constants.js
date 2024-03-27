const initialCards = [
  {
    name: "Boxed Water Is Better",
    link: "https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Andrea De Santis",
    link: "https://images.unsplash.com/photo-1682282462523-996afa93708b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Josh Hild",
    link: "https://images.unsplash.com/photo-1681958757405-926494358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    name: "Budapest, Hongrie",
    link: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Mumbia, India",
    link: "https://plus.unsplash.com/premium_photo-1674898520828-87fbb9cc428e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "La Petite Ceinture",
    link: "https://images.unsplash.com/photo-1556905200-279565513a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const previewImageModal = document.querySelector("#preview-image-modal");
const addCardModal = document.querySelector("#add-card-modal");
const editAvatarModal = document.querySelector("#edit-avatar-modal");
const popupConfirmModal = document.querySelector("#popup-confirm-modal");
const profileModalCloseButton = profileEditModal.querySelector(
  "#profile-modal-close"
);
const addCardModalCloseButton =
  addCardModal.querySelector("#profile-add-close");
const previewImageCloseButton = previewImageModal.querySelector(
  "#modal-preview-close"
);
const addNewCardButton = document.querySelector(".profile__add-button");
//avatar edit
const avatarEditSelector = document.querySelector(".profile__image");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const previewImageFooter = previewImageModal.querySelector(".modal__footer");
const editAvatarForm = editAvatarModal.querySelector("#edit-avatar-form");
const profileEditForm = profileEditModal.querySelector("#edit-profile-form");
const addCardForm = addCardModal.querySelector("#add-card-form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".gallery__list");

const cardTitleInput = addCardForm.querySelector("#modal__input_type_title");
const cardURLInput = addCardForm.querySelector("#modal__input_type_url");

/* VALIDATION
 */
const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: ".modal__input_type_error",
  errorClass: ".modal__error",
};

export {
  initialCards,
  profileEditButton,
  profileEditModal,
  previewImageModal,
  popupConfirmModal,
  addCardModal,
  editAvatarModal,
  avatarEditSelector,
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
  editAvatarForm,
  cardTemplate,
  cardListEl,
  cardTitleInput,
  cardURLInput,
  validationSettings,
};
