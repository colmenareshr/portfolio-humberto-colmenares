function toggleMenu() {
  const mobileCta = document.getElementById('mobile-cta');
  const nav = document.querySelector('nav');
  const exitCta = document.getElementById('mobile-exit');
  const menuItems = document.getElementById('menu');

  mobileCta.addEventListener('click', () => {
    nav.classList.toggle('visible');
  });
  exitCta.addEventListener('click', () => {
    nav.classList.toggle('visible');
  });

  menuItems.addEventListener('click', () => {
    nav.classList.toggle('visible');
  });
}

export default toggleMenu;
