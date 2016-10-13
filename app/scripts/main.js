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
		$('html, body').animate({ scrollTop: $('.boutique').offset().top - 90}, 1000);
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

});