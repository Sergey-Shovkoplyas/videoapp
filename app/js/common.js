$(document).ready(function () {

	// ---------------------- payment --------------------------


	$('.pay-cards, .pay-coins').on('click', function () {
		if ($(this).is('.pay-cards')) {
			console.log('cards');
			$('.order__form-pay-cards').addClass('active');
			$('.order__form-pay-coins').removeClass('active');
		}
		if ($(this).is('.pay-coins')) {
			console.log('coins');
			$('.order__form-pay-cards').removeClass('active');
			$('.order__form-pay-coins').addClass('active');
		}
	});


	// ---------------------- #search-open --------------------------

	$('#search-open').on('click', function () {
		$(this).toggleClass('active');
		$('#search').fadeToggle();
	});

	// ---------------------- initialize sliders --------------------------

	$('.line__slider').owlCarousel({
		loop: true,
		margin: 26,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 4
			},
			992: {
				items: 6
			},
			1200: {
				items: 9
			},

		}
	});

	$('.line__slider-category').owlCarousel({
		loop: true,
		margin: 25,
		nav: false,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 6
			},
			1440: {
				items: 7
			},
			1600: {
				items: 8
			},
		}
	});

	// ---------------------- initialize side sliders --------------------------

	$(".slider, .slider-1").css('display', 'none');

	// let mySwiper = new Swiper('.slider', {
	// 	direction: 'horizontal',
	// 	slidesPerView: 1,
	// 	spaceBetween: 30,
	// 	loop: true,
	// 	speed: 8000,
	// 	autoplay: {
	// 		delay: 0,
	// 		disableOnInteraction: true,
	// 		reverseDirection: false
	// 	},
	// 	breakpoints: {
	// 		767: {
	// 			slidesPerView: 3,
	// 		},
	// 		1361: {
	// 			direction: 'vertical',
	// 			slidesPerView: 'auto',
	// 			mousewheel: true,
	// 			freeMode: true,
	// 			loop: true,
	// 			spaceBetween: 50,
	// 		}
	// 	}
	// });

	// let mySwiper = new Swiper('.slider-1', {
	// 	direction: 'horizontal',
	// 	slidesPerView: 1,
	// 	spaceBetween: 30,
	// 	loop: true,
	// 	speed: 8000,
	// 	autoplay: {
	// 		delay: 0,
	// 		disableOnInteraction: true,
	// 		reverseDirection: false
	// 	},
	// 	breakpoints: {
	// 		767: {
	// 			slidesPerView: 3,
	// 		},
	// 		1361: {
	// 			direction: 'vertical',
	// 			slidesPerView: 'auto',
	// 			mousewheel: true,
	// 			freeMode: true,
	// 			loop: true,
	// 			spaceBetween: 50,
	// 		}
	// 	}
	// });




	// $(".slider, .slider-1").hover(function () {
	// 	(this).swiper.autoplay.stop();
	// }, function () {
	// 	(this).swiper.autoplay.start();
	// });




});






/* let mySwiper = new Swiper('.slider', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: true,
		reverseDirection: false
	},
	breakpoints: {
		767: {
			slidesPerView: 3,
		},
		1361: {
			direction: 'vertical',
			slidesPerView: 'auto',
			mousewheel: true,
			freeMode: true,
			loop: true,
			spaceBetween: 50,
		}
	}
}); */



/* let mySwiper = new Swiper('.slider', {
	direction: 'vertical',
	slidesPerView: 'auto',
	spaceBetween: 30,
	loop: true,
	speed: 4000,

	// mousewheel: true,
	freeMode: true,

	autoplay: {
		delay: 1,
		disableOnInteraction: true
	},


});

let mySwiper1 = new Swiper('.slider-1', {
	direction: 'vertical',
	slidesPerView: 'auto',
	spaceBetween: 30,
	loop: true,
	speed: 4000,

	// mousewheel: true,
	freeMode: true,

	autoplay: {
		delay: 1,
		disableOnInteraction: true
	},


}); */
