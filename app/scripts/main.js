$(document).ready(function() {

	// Detecter iPhone
	function isiPhone() {
		return (
			(navigator.platform.indexOf('iPhone') != -1) ||
			(navigator.platform.indexOf('iPod') != -1)
		);
	}

	// Disable Touch iPhone
	$('.menu-mobile').on('touchmove', function(e){
		e.preventDefault();
	});

	// Burger menu - Mobile
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.menu-mobile').slideToggle();
	});
	
	// Afficher le header au scroll
	$(window).scroll(function() {
		if (isiPhone()) {
		} else {
			scroll = $(window).scrollTop();
			if (scroll >= 200) {
				$('.sticky-header').slideDown();
			} else {
				$('.sticky-header').slideUp();
			}
		}
	});

	// Scroll mouse - Home
	$('.arrow-container').click(function() {
		$('html, body').animate({ scrollTop: $('.intro-home').offset().top - 90}, 1000);
	});

	// Stories / About - Home
	$('.hover').mouseleave(
		function() {
			$(this).removeClass('hover');
		}
	);

	// Carousel - Single Story
	$('.single-story-carousel').slick( {
		centerMode: false,
		speed: 1000,
		infinite: true,
		slidesToShow: 1,
		dots: false,
		draggable: true,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		pauseOnHover: false
	});

	// Carousel Selection du moment - Single Story
	$('.selection-carousel').slick( {
		centerMode: false,
		speed: 1000,
		infinite: true,
		slidesToShow: 3,
		dots: false,
		draggable: true,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			}
		]
	});

	// Carousel - Shop
	$('.shop-products-featured').slick( {
		centerMode: false,
		speed: 1000,
		infinite: true,
		slidesToShow: 1,
		dots: false,
		draggable: true,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		pauseOnHover: false
	});

	// Carousel - Single Shop
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		arrows: true,
		fade: false,
		asNavFor: '.slider-nav',
		responsive: [
			{
				breakpoint: 770,
				settings: {
					arrows: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true
				}
			}
		]
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1000,
		asNavFor: '.slider-for',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	});

	// Isotope - Cat Shop
	var $grid = $('.grid').isotope({
		layoutMode: 'packery',
		itemSelector: '.item',
		packery: {gutter: 30}
	});

	// Filtres - Cat Shop
	var filters = {};
	$('.filters').on( 'click', '.button', function() {
		var $this = $(this);
		var $buttonGroup = $this.parents('.button-group');
		var filterGroup = $buttonGroup.attr('data-filter-group');
		filters[ filterGroup ] = $this.attr('data-filter');
		var filterValue = concatValues( filters );
		$grid.isotope({ filter: filterValue });
	});

	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});

	// flatten object by concatting values
	function concatValues( obj ) {
		var value = '';
		for ( var prop in obj ) {
			value += obj[ prop ];
		}
		return value;
	}

});