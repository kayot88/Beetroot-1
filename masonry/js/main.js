$(document).ready(function() {

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    // do not use .grid-sizer in layout
    percentPosition: true
    //horizontalOrder: true,
  });

});