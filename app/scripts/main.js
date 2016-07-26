$(document).ready(function() {

	// Grid - Home
	var $grid = $('.grid').isotope({
		itemSelector: '.grid .item',
		layoutMode: 'packery',
		packery: {gutter: 15}
	});

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