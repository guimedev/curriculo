import MenuIcon from './components/MenuIcon.js';
import { buttons } from './functions/ripple.js';

const globalNavEl = document.querySelector('.global-nav');
const anchorsWrapperEl = document.querySelector('.anchors-wrapper');
const $menuIcon = MenuIcon();

window.addEventListener('resize', () => {
  if (window.innerWidth > 574) {
    anchorsWrapperEl.classList.remove('show-display');
  }
});

$menuIcon.addEventListener('click', () => {
  anchorsWrapperEl.classList.toggle('show-display');
  document.body.classList.toggle('hidden-scrollbar');

  if (!anchorsWrapperEl.classList.contains('show-display')) {
    buttons.forEach((button) => {
      if (button.childNodes[1]) {
        button.childNodes[1].remove();
      }
    });
  } 
});

globalNavEl.append($menuIcon);
