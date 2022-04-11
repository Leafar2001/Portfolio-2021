// Case study sidenav current section indicator
const sections = document.querySelectorAll(".case-study .sidenav--item");
const navLi = document.querySelectorAll(".side--nav ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    const href = li.getAttribute("href").substring(1);
    if (href === current) {
      li.classList.add("active");
    }
  });
});

// Image lightbox
let SimpleLightbox = window.SimpleLightbox;
/// Lightbox settings
SimpleLightbox.defaults = {
  elementClass: "",
  elementLoadingClass: "slbLoading",
  htmlClass: "slbActive",
  closeBtnClass: "",
  nextBtnClass: "",
  prevBtnClass: "",
  loadingTextClass: "",
  closeBtnCaption: "Close",
  nextBtnCaption: "Next",
  prevBtnCaption: "Previous",
  loadingCaption: "Loading...",
  bindToItems: true,
  closeOnOverlayClick: true,
  closeOnEscapeKey: true,
  nextOnImageClick: false,
  showCaptions: false,
  captionAttribute: "title",
  urlAttribute: "href",
  startAt: 0,
  loadingTimeout: 100,
  appendTarget: "body",
  beforeSetContent: null,
  beforeClose: null,
  beforeDestroy: null,
  videoRegex: new RegExp(/youtube.com|vimeo.com/),
};
/// Create lightbox
new SimpleLightbox({ elements: ".case-images a" });

// Sidenav
const setSidenavWidth = () => {
  const sidenav = document.querySelector(".case-study .side--nav");
  const container = document.querySelector(".case-study .container");
  const containerWidth = window.innerWidth - sidenav.offsetWidth;
  const containerOffset = sidenav.offsetWidth;

  container.style.width = `${containerWidth}px`;
  container.style.marginLeft = `${containerOffset}px`;
};

window.addEventListener("resize", setSidenavWidth);

// Execute functions on load
document.addEventListener("DOMContentLoaded", function (event) {
  setSidenavWidth();
});
