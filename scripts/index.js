const initialCards = [
   {name: "Boxed Water Is Better",
    link: "https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
    {name: "Andrea De Santis",
     link: "https://images.unsplash.com/photo-1682282462523-996afa93708b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
     {name: "Josh Hild",
      link:"https://images.unsplash.com/photo-1681958757405-926494358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"},
      {name: "Budapest, Hongrie",
       link:"https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
       {name: "Mumbia, India",
        link: "https://plus.unsplash.com/premium_photo-1674898520828-87fbb9cc428e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
        {name: "La Petite Ceinture",
         link: "https://images.unsplash.com/photo-1556905200-279565513a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
];


const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const modalCloseButton = document.querySelector("#profile-modal-close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".gallery__list");

/*    FUNCTIONS
*/
function closePopup(){
    profileEditModal.classList.remove("modal__opened");
}

function getCardElement(cardData){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardTitleEl = cardElement.querySelector(".card__title");
    cardImageEl.setAttribute("alt", cardData.name);
    cardImageEl.setAttribute("src",cardData.link);
    // set the path of the image to the link field of the object
    //set the image alt text to the name field of the object
    //set the card title to the name field of the object.  too
    cardTitleEl.textContent = cardData.name;
    return cardElement;
}

/*   EVENT HANDLERS
*/

function handleProfileEditSubmit(e){
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopup();
}




/*EVENT LISTENERS
*/

profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    profileEditModal.classList.add("modal__opened");

});

modalCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) =>{
    const cardElement = getCardElement(cardData);
    cardListEl.prepend(cardElement);
})