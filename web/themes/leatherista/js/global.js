/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.leatherista = {
    attach: function (context, settings) {
      

      // top-pick-for-you-slider start 
      $(".top-pick-for-you-slider").slick({
        infinite: true,
        draggable: true,
        swipe: true,
        centerPadding: '265px',
        slidesToShow: 3,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 15000,
        slidesToScroll: 1,
        rows: 1,
        pauseOnHover: false,
        dots: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
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

    }
  };

})(jQuery, Drupal);
