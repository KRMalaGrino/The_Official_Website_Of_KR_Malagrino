// ------------------------------ARRAY----------------------------------

const albumInfo = [
  {
    name: "Octave .0",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DBC7F4111%2DAF75%2D425E%2DA65A19A8ABF20552%2D%2D0%2D%2D3456218%2D%2DIMG3204.JPG",
    description: "(Full Album) [2024]",
  },
  {
    name: "Look Up",
    photo: "",
    description: "",
  },
  {
    name: "Filthy Rags",
    photo: "",
    description: "",
  },
  {
    name: "SEED-3000",
    photo: "",
    description: "",
  },
  {
    name: "A Lil' Fancy",
    photo: "",
    description: "",
  },
  {
    name: "L'OWL'Y",
    photo: "",
    description: "",
  },
  {
    name: "REALM IV",
    photo: "",
    description: "",
  },
  {
    name: "S-O-L",
    photo: "",
    description: "",
  },
  {
    name: "III DOOR",
    photo: "",
    description: "",
  },
  {
    name: "T-PO'AK",
    photo: "",
    description: "",
  },
];

// --------------------------ALBUM TEMPLATES-------------------------------

const albumTemplate = document.querySelector("#album-template");
const albumsList = document.querySelector(".album");

function getAlbumElement(data) {
  const albumElement = albumTemplate.content
    .querySelector(".album")
    .cloneNode(true);

  const albumNameEl = albumElement.querySelector(".album__title");
  const albumImageEl = albumElement.querySelector(".album__image");
  const albumDescriptionEl = albumElement.querySelector(".album__description");

  albumNameEl.textContent = data.name;
  albumImageEl.src = data.photo;
  albumImageEl.alt = data.name;
  albumDescriptionEl.textContent = data.description;

  return albumElement;
}

for (let i = 0; i < albumInfo.length; i++) {
  const albumElement = getAlbumElement(albumInfo[i]);
  albumsList.prepend(albumElement);
}
