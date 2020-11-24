'use strict';

var multiItemSlider = (function () {
  return function (selector) {
    var mainElement = document.querySelector(selector); // основный элемент блока
    var locationList = mainElement.querySelector('.location__list'); // location__list
    var locationItems = mainElement.querySelectorAll('.catalog__item'); // элементы location__item
    var arrows = mainElement.querySelectorAll('.location__arrow'); // кнопки управления
    var arrowLeft = mainElement.querySelector('.location__arrow--left'); // кнопка "left"
    var arrowRight = mainElement.querySelector('.location__arrow--right'); // кнопка "right"
    var listWidth = parseFloat(getComputedStyle(locationList).width); // ширина обёртки
    var itemWidth = parseFloat(getComputedStyle(locationItems[0]).width); // ширина одного элемента
    var leftItem = 0; // позиция левого активного элемента
    var transform = 0; // значение транфсофрмации .slider__list
    var step = itemWidth / listWidth * 100; // величина шага (для трансформации)
    var items = []; // массив элементов

    // наполнение массива items
    locationItems.forEach(function (item, index) {
      items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getMin: 0,
      getMax: items.length - 1,
    }

    var transformItem = function (direction) {
      if (direction === 'right') {
        if ((leftItem + listWidth / itemWidth - 1) >= position.getMax) {
          return;
        }
        if (!arrowLeft.classList.contains('location__arrow-show')) {
          arrowLeft.classList.add('location__arrow-show');
        }
        if (arrowRight.classList.contains('location__arrow-show') && (leftItem + listWidth / itemWidth) >= position.getMax) {
          arrowRight.classList.remove('location__arrow-show');
        }
        leftItem++;
        transform -= step;
      }
      if (direction === 'left') {
        if (leftItem <= position.getMin) {
          return;
        }
        if (!arrowRight.classList.contains('location__arrow-show')) {
          arrowRight.classList.add('location__arrow-show');
        }
        if (arrowLeft.classList.contains('location__arrow-show') && leftItem - 1 <= position.getMin) {
          arrowLeft.classList.remove('location__arrow-show');
        }
        leftItem--;
        transform += step;
      }
      locationList.style.transform = 'translateX(' + transform + '%)';
    }

    // обработчик события click для кнопок "назад" и "вперед"
    var arrowClick = function (evt) {
      if (evt.target.classList.contains('location__arrow')) {
        evt.preventDefault();
        var direction = evt.target.classList.contains('location__arrow--right') ? 'right' : 'left';
        transformItem(direction);
      }
    };


    // добавление к кнопкам "назад" и "вперед" обрботчика arrowClick для событя click
    var setUpListeners = function () {
      arrows.forEach(function (item) {
        item.addEventListener('click', arrowClick);
      });
    }
    setUpListeners(); // инициализация

    return {
      right: function () { // метод right
        transformItem('right');
      },
      left: function () { // метод left
        transformItem('left');
      }
    }

  }
}());

var sliderLocation = multiItemSlider('.location')


