export function toggleMenu(burger, openMenu, body) {
  burger.classList.toggle("_active");
  openMenu.classList.toggle("_active");
  body.classList.toggle("body--lock");
}

export function scrollToBlock(id) {
  const block = document.getElementById(id);

  if (block) {
    block.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
