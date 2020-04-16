$(window).load(function() {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали', // set 
    after_label: 'Со скинали'
  });
  $('.before-slider').slick({
     draggable: false,
     dots: true,
     dotsClass: 'before__dots',
     prevArrow: $('.arrow-left'),
     nextArrow: $('.arrow-right'),
     touchMove: false,
     swipe: false
  });
  $('.reviews-slider__active').slick({
   draggable: false,
   dots: true,
   dotsClass: 'before__dots',
   arrows: false
  });
  $('.menu-button').on('click', function(){
      $('.menu').toggleClass('menu_active');
  });
  /* Настройка select */
  $('.select').on('click', function(){
     $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('.select__option').on('click', function(){
     var value = $(this).attr('data-value');
     $('#select-type').val(value);
     $('.select_checked').text(value);
     $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('[type="tel"]').mask("+ 7 (999) 999-99-99");
});
$(document).ready(function(){
   $( "a.scroll_1" ).click(function( event ) {
       event.preventDefault();
       $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top -180 + "px"}, 600);
   });
});
$(document).ready(function(){
   $( "a.scroll_2" ).click(function( event ) {
       event.preventDefault();
       $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top -80 + "px"}, 600);
   });
});

$(document).ready(function() {
   function checkWidth() {
     var windowWidth = $('body').innerWidth(),
         elem = $(".number-bullets"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                     // страницу для поиска нужного элемента
     if(windowWidth < 1199){
      $('.reviews-slider').addClass('reviews-slider__active');
     }
   }
 
   checkWidth(); // проверит при загрузке страницы
 
   $(window).resize(function(){
     checkWidth(); // проверит при изменении размера окна клиента
   });
 });