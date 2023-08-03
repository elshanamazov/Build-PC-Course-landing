/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
const body = document.querySelector(".js-body");
const burger = document.querySelector(".js-burger");
const openMenu = document.querySelector(".js-nav");
const scrollLinks = document.querySelectorAll(".js-nav a");
burger.addEventListener("click", function () {
  burger.classList.toggle("_active");
  openMenu.classList.toggle("_active");
  body.classList.toggle("body--lock");
});
function scrollToBlock(id) {
  const block = document.getElementById(id);
  if (block) {
    block.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const blockId = link.getAttribute("href").substr(1);
    scrollToBlock(blockId);
  });
});
/******/ })()
;
//# sourceMappingURL=main.js.map