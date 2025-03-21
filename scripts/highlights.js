import { highlights } from "../scripts/arrays";

class Highlights {
  constructor(data, selector) {
    this._song = data.song;
    this._link = data.link;

    this._selector = selector;

  }
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
}

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
