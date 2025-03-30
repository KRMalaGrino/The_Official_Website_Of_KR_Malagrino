const discographyTemplate = document.querySelector("#discography");

export default function getDiscographyInfo(info) {
  const discographyBlockElement = discographyTemplate.content
    .querySelector(".discography__block")
    .cloneNode(true);

  const discographyIframe = discographyBlockElement.querySelector(
    ".discography__iframe"
  );
  const discographySong1 = discographyBlockElement.querySelector(
    ".discography__song1"
  );
  const discographySong1Lyrics = discographyBlockElement.querySelector(
    ".discography__song1Lyrics"
  );
  const discographySong2 = discographyBlockElement.querySelector(
    ".discography__song2"
  );
  const discographySong2Lyrics = discographyBlockElement.querySelector(
    ".discography__song2Lyrics"
  );
  const discographySong3 = discographyBlockElement.querySelector(
    ".discography__song3"
  );
  const discographySong3Lyrics = discographyBlockElement.querySelector(
    ".discography__song3Lyrics"
  );
  const discographySong4 = discographyBlockElement.querySelector(
    ".discography__song4"
  );
  const discographySong4Lyrics = discographyBlockElement.querySelector(
    ".discography__song4Lyrics"
  );
  const discographySong5 = discographyBlockElement.querySelector(
    ".discography__song5"
  );
  const discographySong5Lyrics = discographyBlockElement.querySelector(
    ".discography__song5Lyrics"
  );
  const discographySong6 = discographyBlockElement.querySelector(
    ".discography__song6"
  );
  const discographySong6Lyrics = discographyBlockElement.querySelector(
    ".discography__song6Lyrics"
  );
  const discographySong7 = discographyBlockElement.querySelector(
    ".discography__song7"
  );
  const discographySong7Lyrics = discographyBlockElement.querySelector(
    ".discography__song7Lyrics"
  );
  const discographySong8 = discographyBlockElement.querySelector(
    ".discography__song8"
  );
  const discographySong8Lyrics = discographyBlockElement.querySelector(
    ".discography__song8Lyrics"
  );
  const discographySong9 = discographyBlockElement.querySelector(
    ".discography__song9"
  );
  const discographySong9Lyrics = discographyBlockElement.querySelector(
    ".discography__song9Lyrics"
  );

  discographyIframe.src = info.link;

  discographySong1.textContent = info.lyrics.song1;
  discographySong1Lyrics.textContent = info.lyrics.song1Lyrics;
  discographySong2.textContent = info.lyrics.song2;
  discographySong2Lyrics.textContent = info.lyrics.song2Lyrics;
  discographySong3.textContent = info.lyrics.song3;
  discographySong3Lyrics.textContent = info.lyrics.song3Lyrics;
  discographySong4.textContent = info.lyrics.song4;
  discographySong4Lyrics.textContent = info.lyrics.song4Lyrics;
  discographySong5.textContent = info.lyrics.song5;
  discographySong5Lyrics.textContent = info.lyrics.song5Lyrics;
  discographySong6.textContent = info.lyrics.song6;
  discographySong6Lyrics.textContent = info.lyrics.song6Lyrics;
  discographySong7.textContent = info.lyrics.song7;
  discographySong7Lyrics.textContent = info.lyrics.song7Lyrics;
  discographySong8.textContent = info.lyrics.song8;
  discographySong8Lyrics.textContent = info.lyrics.song8Lyrics;
  discographySong9.textContent = info.lyrics.song9;
  discographySong9Lyrics.textContent = info.lyrics.song9Lyrics;

  return discographyBlockElement;
}
