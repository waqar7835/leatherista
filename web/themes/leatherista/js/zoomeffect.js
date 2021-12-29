jQuery(document).ready(function(){
    jQuery('.path-product.field--name-field-images img')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom();
  });