$(function(){

  $('.slider__inner').slick({
      arrows:false,
      dots:true
  });
  $('.works__inner').slick({
      //arrows:false,
      slidesToShow: 4,
      slidesToScroll: 2,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/slider_works/slide-left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/slider_works/slide-right.svg" alt=""></button>'
  });

});
      