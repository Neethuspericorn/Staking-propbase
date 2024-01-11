$(document).ready(function () {
	$('#navToggleBtn').click(function () {
		$('.body-wrapper').toggleClass('nav-collapse');
	});
});

// roadmap slider
$('.roadmap-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: ".btn-prev",
	nextArrow: ".btn-next",
	speed: 600,
	responsive:[
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},

	]
});
// roadmap slider ends

// Video slider

$('.video-slider').slick({
	dots: true,
	infinite: false,
	speed: 300,
	dots: false,
	slidesToShow: 1,
	fade: true,
  	cssEase: 'linear',
	prevArrow: $('.video-prev-btn'),
	nextArrow: $('.video-next-btn')
});

//token slider
$('.token-slides').slick({
	fade: true,
	prevArrow: $('.token-slide-btns .btn-prev'),
	nextArrow: $('.token-slide-btns .btn-next'),
	dots: true,
});