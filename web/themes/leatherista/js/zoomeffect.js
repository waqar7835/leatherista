jQuery(document).ready(function(){
    jQuery('.path-product #block-leatherista-content .field--name-field-images img')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom({magnify:1})
      .css('background-color', 'white');
  });