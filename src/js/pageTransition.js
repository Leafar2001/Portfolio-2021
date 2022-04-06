// Page transition
function fadeInPage() {
  if (!window.AnimationEvent) {
    return;
  }
  var fader = document.getElementById("fader");
  fader.classList.add("fade-out");
}

document.addEventListener("DOMContentLoaded", function () {
  if (!window.AnimationEvent) {
    return;
  }
  var anchors = document.getElementsByTagName("a");

  for (var i = 0; i < anchors.length; i += 1) {
    if (
      anchors[i].hostname !== window.location.hostname ||
      anchors[i].pathname === window.location.pathname ||
      anchors[i].target === "_blank" ||
      anchors[i].pathname.includes(".png") ||
      anchors[i].pathname.includes(".jpg") ||
      anchors[i].pathname.includes(".jpeg") ||
      anchors[i].pathname.includes(".mov") ||
      anchors[i].pathname.includes(".mp4") ||
      anchors[i].pathname.includes(".gif")
    ) {
      continue;
    }
    anchors[i].addEventListener("click", function (event) {
      var fader = document.getElementById("fader"),
        anchor = event.currentTarget;

      var listener = function () {
        window.location = anchor.href;
        fader.removeEventListener("animationend", listener);
      };
      fader.addEventListener("animationend", listener);

      event.preventDefault();
      fader.classList.add("fade-in");
    });
  }
});

window.addEventListener("pageshow", function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById("fader");
  fader.classList.remove("fade-in");
});
