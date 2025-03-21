class Highlights {
  constructor(info, selector) {
    this._song = info.song;
    this._link = info.link;

    this._selector = selector;
  }

  _getHighlightsInfo() {
    const highlightsTemplate = document.querySelector("#highlights");
    const highlightsBlockElement = highlightsTemplate.content
      .querySelector(".highlights__wrapper-2")
      .cloneNode(true);

    const highlightsVideo =
      highlightsBlockElement.querySelector(".highlights__video");

    highlightsVideo.src = info.link;
    highlightsVideo.title = info.song;

    return highlightsBlockElement;
  }
}

export default Highlights;
