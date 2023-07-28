var $ = jQuery.noConflict();
$(document).ready(function() {
    
    // Home Page Slider
    $('#Property-list,.center').slick({
      centerMode: false,
      //centerPadding: '60px',
      slidesToShow: 3,
      adaptiveHeight: false,
      infinite: true,       
      responsive: [{
          breakpoint: 767,
          settings: {
            arrows: true,
            //centerMode: true,
            centerPadding: '100px',
            slidesToShow: 2
          }
        }
      ]
    });
}); // end of ready function