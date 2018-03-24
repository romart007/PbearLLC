$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#hero');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color','#0B0928');
          $(".fixed-top").css('top', '36px');
          $(".fixed-top").css('opacity', '.9');
          $(".top-nav").css('z-index' , '1030');
          $(".top-nav").css('position','fixed');

       } else {
          $('.navbar').css('background-color', 'transparent');
          $(".fixed-top").css('top', '36px');
          $(".top-nav").css('position','fixed');
       }
   });
    }
});


$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smootqh scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})