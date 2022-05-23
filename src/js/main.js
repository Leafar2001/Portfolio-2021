// Service worker registry
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceworker.js")

    .then(function (registering) {
      // Registration was successful
      console.log(
        "Browser: Service Worker registration is successful with the scope",
        registering.scope
      );
    })
    .catch(function (error) {
      // The registration of the service worker failed
      console.log(
        "Browser: Service Worker registration failed with the error",
        error
      );
    });
} else {
  // The registration of the service worker failed
  console.log("Browser: I don't support Service Workers :(");
}

// Cursor effect
/// Get elements
var cursor = document.querySelector(".cursor");
var a = document.querySelectorAll("a");

/// Get mouseposition and set cursor div to said position
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

/// On click, add/remove hover class
document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
});
document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
});

/// On link hover, add/remove hover class
a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

/// Hide cursor on leaving browser
var cursorDiv = document.querySelector(".cursor-container");
var html = document.querySelector("html");

function showCursor() {
  cursorDiv.classList.add("visible");
}

function hideCursor() {
  cursorDiv.classList.remove("visible");
}

html.onmouseover = showCursor;
html.onmouseleave = hideCursor;

// Smooth scrolling on anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function () {
    smoothScroll.scrollTo(this.getAttribute("href"), 1000);
  });
});

// Execute functions on load
document.addEventListener("DOMContentLoaded", function (event) {
  fadeInPage(); // Page transitions
});
