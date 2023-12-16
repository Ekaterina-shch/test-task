const main = document.querySelector('.main');
const burgerBtn = document.querySelector('.burger-menu');
const headerSideRight = document.querySelector('.header-side-right');

burgerBtn.addEventListener('click', openMenu);
main.addEventListener('click', closeMenu);

function openMenu() {
  headerSideRight.classList.toggle('open');
  document.body.classList.toggle('burger-open');
}
function closeMenu() {
  if (headerSideRight.classList.contains('open')) {
    headerSideRight.classList.remove('open');
    document.body.classList.remove('burger-open');
  }
}
