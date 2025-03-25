const highlightsTemplate = document.querySelector("#highlights");

export default function getHighlightsInfo(info) {
  const highlightsBlockElement = highlightsTemplate.content
    .querySelector(".highlights__wrapper-2")
    .cloneNode(true);

  const highlightsVideo =
    highlightsBlockElement.querySelector(".highlights__video");

  highlightsVideo.src = info.link;
  highlightsVideo.title = info.song;

  return highlightsBlockElement;
}
