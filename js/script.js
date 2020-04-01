//Mobile menu
//$('.menu__btn').click(function() {
//  $('.menu').toggleClass('menu--opened');
//  $('.menu__list').slideToggle();
//})
//
//if (window.innerWidth < 766) {
//  $('.menu__link').click(function() {
//    $('.menu__list').slideToggle();
//    $('.menu').removeClass('menu--opened');
//  })
//}

//Call drop
$('.header__call').click(function() {
  $('.header__drop').slideDown();
})

$('.header__close').click(function() {
  $('.header__drop').slideUp();
})
