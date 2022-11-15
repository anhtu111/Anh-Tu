jQuery(document).ready(function($) {
    $('.btn-menu').click(function() {
     $('.navbar-menu').toggleClass('open');
     $('body').toggleClass('not-scroll');
    });
   });