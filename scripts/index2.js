const pencilPopupButton = document.querySelector(".profile__info-button_info");
const perfilPopup = document.querySelector(".popup");

function handlePopupOpen() {
perfilPopup.classList.add("popup_opened");
}

pencilPopupButton.addEventListener("click", handlePopupOpen)