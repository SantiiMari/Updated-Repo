$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $('.main-section').hide();
     }
     else {
         $('.main-section').show();
     }
});


