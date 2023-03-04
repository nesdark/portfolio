const Menu = {
  toggle() {
    const body = document.body;
    body.classList.toggle('menu-active');
  },
};

const toggleMenuButton = document.querySelector('#toggleMenu');

toggleMenuButton.onclick = Menu.toggle;
