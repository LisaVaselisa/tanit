var pageHeader = document.querySelector(".page-header__menu");
var pageHeaderToggle = document.querySelector(".page-header__toggle");

pageHeader.classList.remove("page-header__menu--nojs");
pageHeaderToggle.addEventListener("click", function() {
  if (pageHeader.classList.contains("page-header__menu--closed")) {
    pageHeader.classList.remove("page-header__menu--closed");
    pageHeader.classList.add("page-header__menu--opened");
  } else {
    pageHeader.classList.add("page-header__menu--closed");
    pageHeader.classList.remove("page-header__menu--opened");
  }
});
