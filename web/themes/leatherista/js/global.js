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
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
      // top-pick-for-you-slider end  

    }
  };

})(jQuery, Drupal);
