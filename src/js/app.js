"use strict";
$(function(){
  testWebP(document.getElementById("html"));
  function testWebP(elem) {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = function () {
      webP.height === 2 ? elem.classList.add('webp') : elem.classList.add('no-webp')
    }
  }

  window.onresize = function() {
    if ($(window).width() > 576){
      $('.menu').removeClass('menu--active');
      $('.header__burger').removeClass('header__burger--cross');
      $('body').removeClass('--locked');
    }
  }
  $('.header__btn').on('click', function(){
    $('.header__right-side-menu').addClass('header__right-side-menu--active');
  })
  $('.right-side-menu__btn').on('click', function(){
    $('.header__right-side-menu').removeClass('header__right-side-menu--active');
  })
  $('.header__burger').on('click', function(){
    if($(".header__burger").hasClass('header__burger--cross')) {
      $('.menu').removeClass('menu--active');
      $('.header__burger').removeClass('header__burger--cross');
      $('body').removeClass('--locked');
    }
    else{
      $('.menu').addClass('menu--active');
      $('.header__burger').addClass('header__burger--cross');
      $('body').addClass('--locked');
    }
  })
  //! Slider
  if ($('.collection__collection-slider').length > 0){
    $('.collection__collection-slider').slick({
      dots: true,
      arrows: false,
      speed: 500,
      easing: 'easyInOut',
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      waitForAnimate: true,
      touchThreshold: 5
    });
  }
  if ($('.small-slider__galery').length > 0){
    $('.small-slider__galery').slick({
      dots: true,
      arrows: false,
      slidesToShow: 10,
      slidesToScroll: 10,
      speed: 500,
      easing: 'easyInOut',
      autoplay: true,
      autoplaySpeed: 2000,
      waitForAnimate: true,
      touchThreshold: 5,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 778,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }

  if($('.galery__grid').length > 0){
    var mixer = mixitup('.galery__grid',{
      load: {
        filter: '.living'
    }
    });
  }

});