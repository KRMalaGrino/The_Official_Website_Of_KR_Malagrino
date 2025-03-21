import { highlightsArray } from "../scripts/arrays";
import Highlights from "../scripts/highlights";
import { discographyArray } from "../scripts/arrays";

highlights.forEach((item) => {
  const highlightsBlockkWrapper = document.querySelector(
    ".highlights__wrapper-1"
  );
  const highlightsBlockElement = getHighlightsInfo(item);
  highlightsBlockkWrapper.append(highlightsBlockElement);
});

discography.forEach((item) => {
  const discographyBlockElement = getDiscographyInfo(item);
  discographyBlockWrapper.append(discographyBlockElement);
});

// Old highlights code ----------------------------------

// const highlightsTemplate = document.querySelector("#highlights");
// const highlightsBlockkWrapper = document.querySelector(
//   ".highlights__wrapper-1"
// );

// function getHighlightsInfo(info) {
//   const highlightsBlockElement = highlightsTemplate.content
//     .querySelector(".highlights__wrapper-2")
//     .cloneNode(true);

//   const highlightsVideo =
//     highlightsBlockElement.querySelector(".highlights__video");

//   highlightsVideo.src = info.link;
//   highlightsVideo.title = info.song;

//   return highlightsBlockElement;
// }

// highlights.forEach((item) => {
//   const highlightsBlockElement = getHighlightsInfo(item);
//   highlightsBlockkWrapper.append(highlightsBlockElement);
// });

// Old discography code ----------------------------------

// const discographyTemplate = document.querySelector("#discography");
// const discographyBlockWrapper = document.querySelector(
//   ".discography__block-wrapper"
// );

// function getDiscographyInfo(info) {
//   const discographyBlockElement = discographyTemplate.content
//     .querySelector(".discography__block")
//     .cloneNode(true);

//   const discographyIframe = discographyBlockElement.querySelector(
//     ".discography__iframe"
//   );
//   const discographySongTitle = discographyBlockElement.querySelector(
//     ".discography__song-title"
//   );
//   const discographyLyrics = discographyBlockElement.querySelector(
//     ".discography__lyrics"
//   );

//   discographyIframe.src = info.link;
//   discographySongTitle.textContent = info.title;
//   discographyLyrics.textContent = info.year;

//   return discographyBlockElement;
// }
