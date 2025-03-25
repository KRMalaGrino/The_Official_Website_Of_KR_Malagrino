import { highlightsArray, discographyArray } from "./arrays.js";
import getHighlightsInfo from "./highlights.js";
import getDiscographyInfo from "./discography.js";

const highlightsBlockkWrapper = document.querySelector(
  ".highlights__wrapper-1"
);
const discographyBlockWrapper = document.querySelector(
  ".discography__block-wrapper"
);

highlightsArray.forEach((item) => {
  const highlightsBlockElement = getHighlightsInfo(item);
  highlightsBlockkWrapper.append(highlightsBlockElement);
});

discographyArray.forEach((item) => {
  const discographyBlockElement = getDiscographyInfo(item);
  discographyBlockWrapper.append(discographyBlockElement);
});
