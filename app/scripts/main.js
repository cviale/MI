$(document).ready(function() {

	// Grid - Home
	var $grid = $(".grid").isotope({
		itemSelector: ".grid .item",
		layoutMode: "packery",
		packery: {gutter: 15}
	});

	// Stories / About - Home
	$(".hover").mouseleave(
		function() {
			$(this).removeClass("hover");
		}
	);
});