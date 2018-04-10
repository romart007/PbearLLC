$(function() {

jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

	$('#email_form').validate( {
		rules: {
			fname: {
				required: true,
				lettersonly: true
			},

			phone: {
				required: true,
				number: true
			},
			email: {
				required: true,
				email: true
			},
			
			message: {
				required: true
			}
		}
	});
});