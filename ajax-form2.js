$( document ).ready(function() {
    $('#submit').click(function() {

    var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var services = $('#services-1').val();

        if(name == '' || phone == '' || email == '' ||message == '') {
            $('#error_message').html('All fields are required');
        }

         else {
                
            $('#error_message').html('');
            $('#success_message').html('&nbsp&nbspRequest sent. Thank you!');
        }
    });

    // $('#submit2').click(function() {


    //     var email = $('#email2').val();
    //     if(email == '') {
    //         $('#error_message').html('Email required');
    //     }

    //      else {
                
    //         $('#error_message').html('');
    //         $('#success_message').html('&nbsp&nbspRequest sent. Thank you!');
    //     }
    // });
});