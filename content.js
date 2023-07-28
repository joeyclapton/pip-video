// const videoLoaded = {
//   value: false,
//   set() {
//     Object.defineProperty(this, "loader", {
//       value,
//       writable: false,
//     });
//   },
// };
// const video = document.querySelector("video");
// document.addEventListener("DOMContentLoaded", function () {
//   // Seu código com document.querySelector aqui
//   var htmlString = new XMLSerializer().serializeToString(document);

//   alert(htmlString);
// });

alert("entrou");

window.addEventListener("load", checkVideoIsPresent);

window.addEventListener("visibilitychange", checkVideoIsPresent);

window.addEventListener("load", checkVideoIsPresent);

window.addEventListener("focus", checkVideoIsPresent);

function checkVideoIsPresent() {
  const video = document.querySelector("video");

  if (video) {
    togglePictureInPicture(video);
  }
}

function togglePictureInPicture(video) {
  if (!hasUserVisibility && document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}

function hasUserVisibility() {
  return document.visibilityState;
}
