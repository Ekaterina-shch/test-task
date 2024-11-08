const main = document.querySelector('.main');
const burgerBtn = document.querySelector('.burger-menu');
const headerSideRight = document.querySelector('.header-side-right');

const modal = document.getElementById('tour-modal');
const btnsModal = document.querySelectorAll('.btn-modal');
const btnCloseModal = document.querySelector('.modal__close');

const form = document.querySelector('.modal__form');

// Универсальная функция для переключения видимости элементов
function toggleVisibility(element) {
  element.classList.toggle('open');
}

// Функция для закрытия элемента при клике вне его
function closeOnOutsideClick(element, event) {
  if (event.target === element) {
    element.classList.remove('open');
  }
}

burgerBtn.addEventListener('click', () => {
  toggleVisibility(headerSideRight);
});

main.addEventListener('click', () => {
  if (headerSideRight.classList.contains('open')) {
    toggleVisibility(headerSideRight);
  }
});

btnsModal.forEach((btn) => {
  btn.addEventListener('click', () => {
    toggleVisibility(modal);
  });
});

btnCloseModal.addEventListener('click', () => {
  modal.classList.remove('open');
});

// Закрытие модального окна при клике вне его содержимого
modal.addEventListener('click', (event) => closeOnOutsideClick(modal, event));

form.addEventListener('submit', (e) => {
  e.preventDefault();

  document.querySelectorAll('.modal__label').forEach((element) => {
    element.style.display = 'none';
  });
  document.querySelector('.modal__button').style.display = 'none';
  document.querySelector('.text-success').style.display = 'block';
});
