const discographyTemplate = document.querySelector("#discography");

export default function getDiscographyInfo(info) {
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
  discographySongTitle.textContent = info.song1;
  discographyLyrics.textContent = info.song1Lyrics;

  return discographyBlockElement;
}
