var pageHeader = document.querySelector(".page-header__menu");
var pageHeaderToggle = document.querySelector(".page-header__toggle");

pageHeader.classList.remove("page-header__menu--nojs");
pageHeaderToggle.addEventListener("click", function() {
  pageHeader.classList.toggle("page-header__menu--opened");
});
