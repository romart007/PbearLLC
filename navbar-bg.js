$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color','#0B0928');
          $(".fixed-top").css('top', '0');
          $(".fixed-top").css('opacity', '.8');
       } else {
          $('.navbar').css('background-color', 'transparent');
          $(".fixed-top").css('top', '30px');
       }
   });
    }
});
