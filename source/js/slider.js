'use strict';

var slider = document.querySelectorAll('.promo__list .promo__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
  slider[currentSlide].className = 'promo__item';
    currentSlide = (currentSlide+1)%slider.length;
    slider[currentSlide].className = 'promo__item showing';
}


// var btnBack = document.querySelector('.back');
// var btnNext = document.querySelector('.next');
// var track = document.querySelector('.track');
// var i = 0;

// //Функция уменьшяет индекс на 1, показывает предыдущий слайд
// function leftSlide() {
//     showSlides(i -= 1);
// }

// btnBack.onclick = function leftSlide() {

// }

// function showSlides(n) {
//     var i;
//     var item = document.getElementsByClassName("item");
//     if (n > item.length) {
//       i = 1
//     }
//     if (n < 1) {
//         i = item.length
//     }
    // for (i = 0; i < item.length; i++) {
    //   item[i].style.display = "none";
    // }
    // item[slideIndex - 1].style.display = "block";


// /* Индекс слайда по умолчанию */
// var slideIndex = 3;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1);
// }

// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Основная функция слайдера */
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("item");
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }

// onclick = minusSlide();
// onclick = plusSlide();

// let leftBtn = document.querySelector('.page-header__btn');
// let leftBtn = document.querySelector('.page-header__btn');

// openMenu.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   openMenu.classList.toggle('active');
//   modalMenu.classList.add('nav__show');
// });




// var left = 0;
// var leftBtn = document.getElementById('btn-left');

// leftBtn.onclick = function sliderLeft() {
//   var polosa = document.getElementById('polosa');
//   // left = left - 200;
//   // if (left < -1000) {
//   //   left = 0;
//   // }
//   polosa.slyle.left = -200 + 'px';
// }



// let slider = document.getElementsByClassName('location__item');
// let leftBtn = document.getElementById('left-btn');
// let rightBtn = document.getElementById('right-btn');
// let sliderIndex = 1;

// showSlider(sliderIndex);

// function showSlider(n) {
//   if (n < 1) {
//     sliderIndex = slider.length;
//   } else if (n > slider.lingth) {
//     sliderIndex = 1;
//   }

//   for (let i = 0; i < slider.length; i++) {
//     slider[i].getElementsByClassName.display = 'none';
//   }
// }

// function nextSlider(n) {
//   showSlider(sliderIndex += n);
// }

// function currentSlider(n) {
//   showSlider(sliderIndex = n);
// }

// leftBtn.onclick = function () {
//   nextSlider(-1);
// }

// rightBtn.onclick = function () {
//   nextSlider(1);
// }
