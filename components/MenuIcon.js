function Bar() {
  const el = document.createElement('div');
  el.className = 'bar';

  return el;
}

export default function MenuIcon() {
  const el = document.createElement('button');

  el.className = 'menu-icon';
  el.append(Bar(), Bar(), Bar());

  el.addEventListener('click', (event) => {
    event.currentTarget.childNodes.forEach((element, index) => {
      element.classList.toggle(`bar${index + 1}`);

      window.addEventListener('resize', () => {
        if (window.innerWidth > 574) {
          element.classList.remove(`bar${index + 1}`);
        }
      });
    });
  });



  return el;
}


