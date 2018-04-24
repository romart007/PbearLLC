jQuery(document).ready(function(){       
   var scroll_start = 0;
   var startchange = jQuery('#hero');
   var offset = startchange.offset();
    if (startchange.length){
   jQuery(document).scroll(function() { 
      scroll_start = jQuery(this).scrollTop();
      if(scroll_start > offset.top) {
          jQuery(".navbar").css('background-color','#0B0928');
          jQuery(".fixed-top").css('top', '36px');
          jQuery(".fixed-top").css('opacity', '.9');
          jQuery(".top-nav").css('z-index' , '1040');
          jQuery(".top-nav").css('position','fixed');

       } else {
          jQuery('.navbar').css('background-color', 'transparent');
          jQuery(".fixed-top").css('top', '36px');
          jQuery(".top-nav").css('position','fixed');
       }
   });
    }
});


jQuery(document).ready(function() {
  
  var scrollLink = jQuery('.scroll');
  
  // Smootqh scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    jQuery('body,html').animate({
      scrollTop: jQuery(this.hash).offset().top
    }, 1000 );
  });

  //background color change
  jQuery( ".navbar-toggler" ).click(function() {
  jQuery(".navbar").css('background-color','#0B0928');
  jQuery(".navbar").css('opacity', '.8');
  })


  jQuery('.js-scroll-trigger').click(function() {
    jQuery('.navbar-collapse').collapse('hide');
  });

  // Active link switching
  jQuery(window).scroll(function() {
    var scrollbarLocation = jQuery(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = jQuery(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        jQuery(this).parent().addClass('active');
        jQuery(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})