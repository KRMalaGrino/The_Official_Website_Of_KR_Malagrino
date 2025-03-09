const discography = [
  {
    title: "Octave .0",
    year: "2024",
    link: "https://open.spotify.com/embed/album/1j8F0KOLxKiKPHQMcBxPf1?utm_source=generator&theme=0",
  },
  {
    title: "Look Up",
    year: "2024",
    link: "https://open.spotify.com/embed/album/5rUnTmZTv7VWrY64Ofofy7?utm_source=generator&theme=0",
  },
  {
    title: "Filthy Rags",
    year: "2024",
    link: "https://open.spotify.com/embed/album/3bPW2pKTVc2U1thtpv07Mv?utm_source=generator&theme=0",
  },
  {
    title: "SEED-3000",
    year: "2024",
    link: "https://open.spotify.com/embed/album/3hYcn73DOge96MiPc1PFKW?utm_source=generator&theme=0",
  },
  {
    title: "A Lil' Fancy",
    year: "2024",
    link: "https://open.spotify.com/embed/album/3Irm7unt1ZNJAXNuHqKpSz?utm_source=generator&theme=0",
  },
  {
    title: "L'OWL'Y",
    year: "2023",
    link: "https://open.spotify.com/embed/album/3iGx0LC84dpNiWC9ogkezp?utm_source=generator&theme=0",
  },
  {
    title: "REALM IV",
    year: "2022",
    link: "https://open.spotify.com/embed/album/553ZbYATN2ZZeyUhVE7q5o?utm_source=generator&theme=0",
  },
  {
    title: "S-O-L",
    year: "2022",
    link: "https://open.spotify.com/embed/album/7Bm3ub7N78GKzdH05w7jlW?utm_source=generator&theme=0",
  },
  {
    title: "III DOOR",
    year: "2021",
    link: "https://open.spotify.com/embed/album/2sXPrZBVJwHbCjc3R87FCP?utm_source=generator&theme=0",
  },
  {
    title: "T-PO'AK",
    year: "2021",
    link: "https://open.spotify.com/embed/album/17KtMScOLI3Ic8fIXUtksL?utm_source=generator&theme=0",
  },
];

const discographyTemplate = document.querySelector("#discography");
const discographyBlockWrapper = document.querySelector(
  ".discography__block-wrapper"
);

function getDiscographyInfo(info) {
  const discographyBlockElement = discographyTemplate.content
    .querySelector(".discography__block")
    .cloneNode(true);

  const discographyIframe = discographyBlockElement.querySelector(
    ".discography__iframe"
  );
  const discographySongTitle = discographyBlockElement.querySelector(
    ".discography__song-title"
  );
  const discographyLyrics = discographyBlockElement.querySelector(
    ".discography__lyrics"
  );

  discographyIframe.src = info.link;
  discographySongTitle.textContent = info.title;
  discographyLyrics.textContent = info.year;

  return discographyBlockElement;
}

discography.forEach((item) => {
  const discographyBlockElement = getDiscographyInfo(item);
  discographyBlockWrapper.append(discographyBlockElement);
});
