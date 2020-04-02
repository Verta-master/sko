//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--opened');
  $('.menu__list').slideToggle();
})

$('.menu__down').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('menu__down--up');
})

//Call drop
$('.header__call').click(function() {
  $('.header__drop').slideDown();
})

$('.header__close').click(function() {
  $('.header__drop').slideUp();
})

//Footer lists
if (window.innerWidth < 480) {
  $('.footer__btn').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__btn--up');
  })
}
