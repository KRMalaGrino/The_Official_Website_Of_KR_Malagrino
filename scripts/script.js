// ------------------------------ARRAY----------------------------------

const initialCards = [
  {
    name: "KR MalaGrino pic 1",
    link: "",
  },
  {
    name: "KR MalaGrino pic 2",
    link: "",
  },
  {
    name: "KR MalaGrino pic 3",
    link: "",
  },
  {
    name: "KR MalaGrino pic 4",
    link: "",
  },
  {
    name: "KR MalaGrino pic 5",
    link: "",
  },
  {
    name: "KR MalaGrino pic 6",
    link: "",
  },
];

// --------------------------CARD TEMPLATES-------------------------------

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
