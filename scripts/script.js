// ------------------------------ARRAY----------------------------------

const initialCards = [
  {
    name: "Octave .0",
    link: "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DBC7F4111%2DAF75%2D425E%2DA65A19A8ABF20552%2D%2D0%2D%2D3456218%2D%2DIMG3204.JPG",
  },
  {
    name: "Look Up",
    link: "https://open.spotify.com/embed/album/1j8F0KOLxKiKPHQMcBxPf1?utm_source=generator&theme=0",
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
