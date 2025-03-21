import { discography } from "../scripts/arrays";

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
