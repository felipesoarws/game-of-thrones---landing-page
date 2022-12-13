$(document).ready(function () {
  $(".header__menu__hamb").click(function () {
    $(this).toggleClass("active");
    $(".menu_mobile").toggleClass("active");
    $(".icon").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".menu_mobile_nav li").click(function () {
    $(this).toggleClass("active");
    $(".menu_mobile").toggleClass("active");
    $(".icon").toggleClass("active");
  });
});
