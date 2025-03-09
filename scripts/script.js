// --------------------Highlights array --------------------------

const highlights = [
  {
    song: "Look Up",
    link: "https://www.youtube.com/embed/zbF3SsoTUvA?si=is5eNOwXuqZPKRKu",
  },
  {
    song: "A Lil' Fancy",
    link: "https://www.youtube.com/embed/iPqlSTPTNC8?si=xnzyXWf0mJZu5Vay",
  },
  {
    song: "Kahina",
    link: "https://www.youtube.com/embed/A0dovpf779A?si=uVPKRurhaxLZHkEe",
  },
  {
    song: "Sayonara!",
    link: "https://www.youtube.com/embed/1miVrBYqzRc?si=FrCS26e2va0kkeLf",
  },
  {
    song: "Erth",
    link: "https://www.youtube.com/embed/ZulWAyu0OlQ?si=-b7Xpdv1QamSfuoE",
  },
  {
    song: "Mercury",
    link: "https://www.youtube.com/embed/h7zJg8XM7Fs?si=kOjgmIZbLb9qIkkn",
  },
  {
    song: "New World",
    link: "https://www.youtube.com/embed/csjlAccd3aQ?si=JNixjpBn2WXMxkck",
  },
  {
    song: "All She Wrote",
    link: "https://www.youtube.com/embed/wahvaciH9Xg?si=OSRlq4IX13pio3fE",
  },
  {
    song: "Save The Children",
    link: "https://www.youtube.com/embed/S9YGRYt6E34?si=9-KZA2lEEQR-3j8m",
  },
];

const highlightsTemplate = document.querySelector("#highlights");
const highlightsBlockkWrapper = document.querySelector(
  ".highlights__wrapper-1"
);

function getHighlightsInfo(info) {
  const highlightsBlockElement = highlightsTemplate.content
    .querySelector(".highlights__wrapper-2")
    .cloneNode(true);

  const highlightsVideo =
    highlightsBlockElement.querySelector(".highlights__video");

  highlightsVideo.src = info.link;
  highlightsVideo.title = info.song;

  return highlightsBlockElement;
}

highlights.forEach((item) => {
  const highlightsBlockElement = getHighlightsInfo(item);
  highlightsBlockkWrapper.append(highlightsBlockElement);
});

// --------------------Discography array --------------------------

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
