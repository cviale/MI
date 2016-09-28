$(document).ready(function() {

	// Stories / About - Home
	$('.hover').mouseleave(
		function() {
			$(this).removeClass('hover');
		}
	);

	// Scroll mouse - Home
	$(".mouse-icon").click(function() {
		$("html, body").animate({ scrollTop: $(".boutique").offset().top - 0}, 1000);
	});

});