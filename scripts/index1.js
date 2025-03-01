const openPopup = document.querySelector(".popup");
const buttonPopup = document.querySelector(".profile__info-button_info");
const buttonClosePopup = document.querySelector(".popup__button-close");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-occupation");
const displayName = document.querySelector(".profile__info-name");
const displayDescription = document.querySelector(".profile__info-description");
const buttonSubmit = document.querySelector(".popup__form-button");


function handlePopupOpen() {
  openPopup.classList.add("popup_opened");
}

function handlePopupClose() {
  openPopup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  displayName.textContent = nameInput.value;
  displayDescription.textContent = jobInput.value;
  openPopup.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/*buttonPopup.addEventListener("click", handlePopupOpen);
buttonClosePopup.addEventListener("click", handlePopupClose);*/
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup");
  const closeButton = document.querySelector(".popup__button-close");

  closeButton.addEventListener("click", () => {
      popup.classList.remove("popup_opened"); // Ocultar el popup al hacer clic en el botón de cerrar
  });
});
