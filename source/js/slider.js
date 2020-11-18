let slider = document.getElementsByClassName('location__item');
let leftBtn = document.getElementById('left-btn');
let rightBtn = document.getElementById('right-btn');
let sliderIndex = 1;

showSlider(sliderIndex);

function showSlider(n) {
  if (n < 1) {
    sliderIndex = slider.length;
  } else if (n > slider.lingth) {
    sliderIndex = 1;
  }

  for (let i = 0; i < slider.length; i++) {
    slider[i].getElementsByClassName.display = 'none';
  }
}

function nextSlider(n) {
  showSlider(sliderIndex += n);
}

function currentSlider(n) {
  showSlider(sliderIndex = n);
}

leftBtn.onclick = function () {
  nextSlider(-1);
}

rightBtn.onclick = function () {
  nextSlider(1);
}
