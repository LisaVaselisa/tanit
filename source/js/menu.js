'use strict';
let openMenu = document.querySelector('.page-header__btn');
let modalMenu = document.querySelector('.nav');

openMenu.addEventListener('click', function (evt) {
  evt.preventDefault();
  openMenu.classList.toggle('active');
  modalMenu.classList.add('nav__show');
});

// // Закрываем корзину
// document.addEventListener('click', function (evt) {
//   if ((evt.target).is(modalMenu)) {
//     modalMenu.classList.remove('nav__show');
//   }
// }
//   evt.preventDefault();
//   modalMenu.classList.remove('nav__show');
// });



// openMenu.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   modalMenu.classList.add('nav__show');
// });

// closeMenu.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   modalMenu.classList.remove('.nav__show');
// });

// closeMenu.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   modalMenu.classList.remove('nav__show');
// });

// window.addEventListener('keydown', function (evt) {
//   if (evt.key === 27) {
//     if (modalMenu.classList.contains('nav__show')) {
//       evt.preventDefault();
//       modalMenu.classList.remove('nav__show');
//     }
//   }
// });


// // pageHeader.classList.remove("page-header__menu--nojs");
// pageHeaderToggle.addEventListener("click", function() {
//   pageHeader.classList.toggle("nav__show");
// });

// document.onclick = (evt) => {
//   if (evt.target.classList.contains('page-header__toggle')) {
//     evt.preventDefault();
//     ('page-header__toggle').classList.toggle('active');
//   }
// }


// pageHeaderToggle.addEventListener("click", function() {
//   pageHeader.classList.toggle(".active");
// });

// // Меню
// var openMenu = document.querySelector('.apage-header__toggle');
// var modalMenu = document.querySelector('.nav');
// // let closeMenu = modalMenu.querySelector('.apage-header__toggle');

