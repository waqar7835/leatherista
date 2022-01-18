/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.leatherista = {
    attach: function (context, settings) {
      
      //cart popup block 
      $("#block-commerce-popup-cart-commerce-popup-cart #commerce-cart-pop-block .remove-button input.delete-order-item").prop('value', 'x');
      
      // top-pick-for-you-slider start 
      $(".top-pick-for-you-slider").slick({
        infinite: true,
        draggable: true,
        fade: false,
        swipe: true,
        slidesToShow: 4,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 15000,
        slidesToScroll: 1,
        rows: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              autoplay: true,

          }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              // autoplay: false,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
               
              // autoplay: false,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              
            }
          }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
      });
      // top-pick-for-you-slider end  

      // testimonials-front-slider start 
      $(".testimonials-front-slider").slick({
        infinite: true,
        draggable: true,
        fade: false,
        swipe: true,
        slidesToShow: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 15000,
        slidesToScroll: 1,
        rows: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              autoplay: true,

          }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              // autoplay: false,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
               
              // autoplay: false,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              
            }
          }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
      });
      // testimonials-front-slider end 
      
    }
  };

})(jQuery, Drupal);
