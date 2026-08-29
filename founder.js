const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');
const navLinks = document.querySelectorAll('#primary-nav a');
const backToTop = document.getElementById('back-to-top');

function closeMenu() {
  menuToggle?.classList.remove('is-open');
  primaryNav?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = !primaryNav?.classList.contains('is-open');
  primaryNav?.classList.toggle('is-open', isOpen);
  menuToggle.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('resize', () => {
  if (window.innerWidth > 1060) closeMenu();
});

if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 400);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
