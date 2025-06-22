import discographyArray from "./arrays.js";
import getDiscographyInfo from "./discography.js";

const discographyBlockWrapper = document.querySelector(
  ".discography__block-wrapper"
);

// Discography loop append
discographyArray.forEach((item) => {
  const discographyBlockElement = getDiscographyInfo(item);
  discographyBlockWrapper.append(discographyBlockElement);
});
