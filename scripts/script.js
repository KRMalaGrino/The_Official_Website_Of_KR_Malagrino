// ------------------------------ALBUMS ARRAY----------------------------------

const albumInfo = [
  {
    name: "Octave .0",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DBC7F4111%2DAF75%2D425E%2DA65A19A8ABF20552%2D%2D0%2D%2D3456218%2D%2DIMG3204.JPG",
    description: "(Full Album) [2024]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2coQIjoZXSTbrfm37DGKWlQW",
  },
  {
    name: "Look Up",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DD125F7A4%2D6DAC%2D4902%2DBB6875B486D7AF9B%2D%2D0%2D%2D501970%2D%2D3000x3000109808707ED5501FFC04E3286F3FC7B37F5575801988221IMG3199.jpg",
    description: "(Single) [2024]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2cr7yDlH38uGndmkMwWpJnBC",
  },
  {
    name: "Filthy Rags",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DC8BAA3AD%2DCCD5%2D4D17%2DBDC2306C4A394F35%2D%2D0%2D%2D2691200%2D%2DIMG3153.JPG",
    description: "(Single) [2024]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2cqX3JzJtym4MHPVQ76sWbf6",
  },
  {
    name: "SEED-3000",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DC838AE6E%2D3B32%2D4A0E%2DBA389125E84815E0%2D%2D0%2D%2D1197758%2D%2DSEED30002AlbumCover.JPG",
    description: "(Full Album) [2024]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2cpddzLzgikrrn7s3zPY-dWg",
  },
  {
    name: "A Lil' Fancy",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DF19E0E66%2DF647%2D4053%2DA6AF69728B525CDC%2D%2D0%2D%2D3091748%2D%2DIMG2291.JPG",
    description: "(Single) [2024]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2cqiaDY98FZBOEQIWdcQ8T71",
  },
  {
    name: "L'OWL'Y",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DADB8B3A7%2DEA72%2D48AC%2D9CA4D9AB3C201A4F%2D%2D0%2D%2D1830009%2D%2DLOWLYAlbum1.JPG",
    description: "(Full E.P.) [2023]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2cpr-zO2POBFW-B_6htktmut",
  },
  {
    name: "REALM IV",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2D6B6A149F%2D909E%2D4C14%2DA27B6DDA7B32FC29%2D%2D0%2D%2D2246722%2D%2DREALMIVAlbumCover25000x5000.jpg",
    description: "(Full E.P.) [2022]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2cr8C4VcicwMqsOYnuaCagya",
  },
  {
    name: "S-O-L",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2D462969EE%2D02FF%2D4775%2DBAEDD6B3370A2C4C%2D%2D0%2D%2D2161999%2D%2DSOL.JPG",
    description: "(Full E.P.) [2022]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2coT-0hGpq9hYOI6XklC9vBl",
  },
  {
    name: "III DOOR",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DD11B627A%2D1797%2D4350%2D99DEC4A0A9AF1E7D%2D%2Dmod%2D1629965483.jpg",
    description: "(Full Album) [2021]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2crLAMp1_s18-duY3J3gvys6",
  },
  {
    name: "T-PO'AK",
    photo:
      "https://s3.amazonaws.com/gather.fandalism.com/3000x3000%2D1098087%2D%2DDD70CA74%2DD42A%2D4906%2D985894E79B3965C0%2D%2Dmod%2D1623972099.jpg",
    description: "(Full Album) [2021]",
    video:
      "https://www.youtube.com/playlist?list=PL9h1WXdZB2cqEFeHjg9dUtGXqOFy6cbqU",
  },
];

// --------------------------ALBUMS GLOBAL VARIABLES-------------------------------

const albumTemplate = document.querySelector("#album-template");
const albumBlock = document.querySelector(".album");

// ---------------------ALBUMS TEMPLATE FILL IN INFO (FUNCTION)------------------------

function getAlbumElement(data) {
  const albumElement = albumTemplate.content
    .querySelector(".album")
    .cloneNode(true);

  const albumNameEl = albumElement.querySelector(".album__title");
  const albumImageEl = albumElement.querySelector(".album__image");
  const albumDescriptionEl = albumElement.querySelector(".album__description");
  const albumVideoEl = albumElement.querySelector(".album__iframe");

  albumNameEl.textContent = data.name;
  albumImageEl.src = data.photo;
  albumImageEl.alt = data.name;
  albumDescriptionEl.textContent = data.description;
  albumVideoEl.src = data.video;

  return albumElement;
}

// ----------------------LOOP THROUGH ALL THE ALBUMS (LOOP)-------------------------

for (let i = 0; i < albumInfo.length; i++) {
  const albumElement = getAlbumElement(albumInfo[i]);
  albumBlock.prepend(albumElement);
}
