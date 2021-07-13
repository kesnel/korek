// FAQ
var action="click";
var speed="0";

$(document).ready(function() {
    // Question handler
    $('.FAQlq1').on(action, function() {
        // Get next element
        $(this).next()
            .slideToggle(speed)
        // Select all other answers
                .siblings('.FAQl1a')
                    .slideUp()
    });
    // Toggle to show the EXPAND class
    $('.FAQlq1').click(function(){
		$(this).toggleClass('expand');
	});
});