const perfilPopup = document.querySelector(".popup");
const pencilPopupButton = document.querySelector(".profile__info-button-info");
const cruzPopupClose = document.querySelector(".popup__button-close");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__form-name");
const jobInput = document.querySelector(".popup__form-occupation");
const displayName = document.querySelector(".profile__name");
const displayDescription = document.querySelector(".profile__about");
const buttonSubmit = document.querySelector(".popup__form-button");
// Popup para añadir una nueva tarjeta
const popupCard = document.querySelector("#popup-cards");
const cardForm = document.querySelector("#form-cards");

const cardTitleInput = document.querySelector("#input-card-title"); // Referencia al título de la tarjeta
const cardLinkInput = document.querySelector("#input-card-link"); // Referencia al enlace de la tarjeta


const addCardButton = document.querySelector(".profile__ad-button-add");
const popupCardCloseButton = popupCard.querySelector(".popup__button-close");
const formCard = document.querySelector("#form-cards");
const popupImage = document.querySelector("#popup-image");



const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

// Contenedor de tarjetas
const cardsArea = document.querySelector('.gallery')



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

// Función para crear la tarjeta
function createCard (name, link){
  const  template =  document.querySelector("#template-card").content.querySelector('.card')
  const  card = template.cloneNode(true);
  const image = card.querySelector('.card__image');
  const text = card.querySelector('.card__name');
  const buttonDelete = card.querySelector('.card__delete-icon');
  const buttonLike = card.querySelector ('.gallery__card-like');
  buttonDelete.addEventListener("click", () => {
    card.remove();
  })
  buttonLike.addEventListener("click",() => {
    buttonLike.classList.toggle("card__like-icon_active")
  })
  image.src= link;
  image.alt = name;
  text.textContent = name;
  image.addEventListener('click', () => {
    popupImage.classList.add('popup_opened')
    //abrir popup de la imagen
    //la imagen del popup src = link
    popupImage.querySelector('.popup__image').src = link;
    popupImage.querySelector('.popup__image').alt = name;
    popupImage.querySelector('.popup__image-title').textContent = name;
    //la imagen del popup alt = name
    //el texto del popup alt = name

  })
  return card;
}

// Función para manejar la creación de una nueva tarjeta
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardName = cardTitleInput.value;
  const cardLink = cardLinkInput.value;

  const newCard = createCard(cardName, cardLink);
  cardsArea.append(newCard);

  // Cerrar el popup después de crear la tarjeta
  popupCard.classList.remove("popup_opened");
  cardForm.reset(); // Limpia el formulario
}

pencilPopupButton.addEventListener("click", handlePopupOpen);
cruzPopupClose.addEventListener("click", handlePopupClose);
formElement.addEventListener("submit", handleProfileFormSubmit);
popupCardCloseButton.addEventListener('click',  () => {
  popupCard.classList.remove("popup_opened");
});

addCardButton.addEventListener("click", () => {
  popupCard.classList.add("popup_opened");
});


initialCards.forEach(item => {
  const card = createCard(item.name, item.link);
  cardsArea.append(card);
});

//addCardButton.addEventListener ("click", handlePopupOpen);

popupImage.querySelector('.popup__button-close').addEventListener('click', () => {
  popupImage.classList.remove('popup_opened');
});
// Agregar el evento de envío para el formulario de tarjetas
cardForm.addEventListener("submit", handleCardFormSubmit);

