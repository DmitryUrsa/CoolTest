$(function() {

	$('.slider-inner').slick({
		speed: 300,
		fade: true,
		cssEase: 'linear',
		arrows: true,
		appendDots: $('.slider-dots .container'),
		dots: true,
		lazyLoad: 'progressive',
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	      	arrows: false
	      }
	    },
	  ]
	});


	$('.start-screen .button').click(function() {
		$('.start-screen').delay(5000).fadeOut();
		$(this).addClass('loading');
	});

	$('.dots-item').click(function() {
		var slideNum = $(this).data('slide');
			ths = $(this);
		$('.slider-inner').slick('slickGoTo',slideNum);
	});

	$('.slider-inner').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.dots-item').removeClass('active');
		$('.dots-item[data-slide="' + nextSlide + '"]').addClass('active');
	});

});
