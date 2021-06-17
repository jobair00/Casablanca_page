(function($){

// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-content').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

})(jQuery);


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    autoplay:true,
    autoplayTimeout:10000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})