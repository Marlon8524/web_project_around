const perfilPopup = document.querySelector(".popup");
const pencilPopupButton = document.querySelector(".profile__info-button-info");

const cruzPopupClose = document.querySelector(".popup__button-close");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-occupation");
const displayName = document.querySelector(".profile__name");
const displayDescription = document.querySelector(".profile__about");
const buttonSubmit = document.querySelector(".popup__form-button");

nameInput.value = displayName.textContent;
jobInput.value = displayDescription.textContent;

function handlePopupOpen() {
  perfilPopup.classList.add("popup_opened");
}

function handlePopupClose() {
  perfilPopup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  displayName.textContent = nameInput.value;
  displayDescription.textContent = jobInput.value;
  openPopup.classList.remove("popup_opened");
}


pencilPopupButton.addEventListener("click", handlePopupOpen);
cruzPopupClose.addEventListener("click", handlePopupClose);
formElement.addEventListener("submit", handleProfileFormSubmit);
