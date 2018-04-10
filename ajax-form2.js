$( document ).ready(function() {
    $('#submit').click(function() {

    var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var services = $('#services-1').val();

        if(name == '' || phone == '' || email == '' ||message == '') {
            $('#error_message').html('All fields are required');
            console.log('#error_message');
        }

         else {
                
            $('#error_message').html('');
            $('#success_message').html('&nbsp&nbspRequest sent. Thank you!');
        }
    });
});