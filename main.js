import MenuIcon from "./components/MenuIcon.js";

const globalNavEl = document.querySelector('.global-nav');
const anchorsWrapperEl = document.querySelector('.anchors-wrapper');
const $menuIcon = MenuIcon();

window.addEventListener('resize', () => {
  if (window.innerWidth > 574) {
    anchorsWrapperEl.classList.remove('display-flex');
  }
});

$menuIcon.addEventListener('click', () => {
  anchorsWrapperEl.classList.toggle('display-flex');
});

globalNavEl.append($menuIcon)