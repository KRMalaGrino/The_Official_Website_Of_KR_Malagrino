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
