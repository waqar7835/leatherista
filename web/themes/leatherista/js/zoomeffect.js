jQuery(document).ready(function(){
    jQuery('.path-product .field--name-field-images img')
      .wrap('<span style="display:inline-block; class:zoom"></span>')
      .css('display', 'block')
      .zoom({magnify:1});
  });