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
        slidesToShow: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 15000,
        slidesToScroll: 1,
        rows: 1,
        pauseOnHover: false,
        dots: false,
      });
      // top-pick-for-you-slider end  

    }
  };

})(jQuery, Drupal);
