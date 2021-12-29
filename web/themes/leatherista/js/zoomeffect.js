// Example:
jQuery(document).ready(function(){
    jQuery('a.photo').zoom({url: 'photo-big.jpg'});
  });
  
  // Using Colorbox with Zoom
//   $(document).ready(function(){
//     $('a.photo').zoom({
//       url: 'photo-big.jpg', 
//       callback: function(){
//         $(this).colorbox({href: this.src});
//       }
//     });
//   });