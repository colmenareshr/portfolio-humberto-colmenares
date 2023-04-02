const mobileCta = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const exitCta = document.getElementById('mobile-exit');

mobileCta.addEventListener('click', () => {
  nav.classList.toggle('visible');
});
exitCta.addEventListener('click', () => {
  nav.classList.toggle('visible');
});

export default toggleMenu;