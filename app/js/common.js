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

	//------------------------- header__user toggle menu -------------------------------

	$('.header__user').on('click', function () {
		$(this).children('.header__user-menu').fadeToggle();
	});

	// ---------------------- custom video player --------------------------

	

/* 	$('.video').each(function(ind, element){

		let $video = $(element).find('.video__video');
		let $play = $(element).find('.video__play');
		let $mute = $(element).find('.video__mute');
		let $seek = $(element).find('.video__seek');

		$play.on('click', playPouse);
		$mute.on('click', muteUnmute);
		$seek.on('change', videoSeek);
		$video.on('timeupdate', seekUpdate);

		$video.on('pause', function(){
			$play.html('<i class="icon-play"></i>');
		});

		$video.on('play', function(){
			$play.html('<i class="icon-pause"></i>');
		});


		function playPouse() {
			if ($video[0].paused) {
				$video[0].play();
				$(this).html('<i class="icon-pause"></i>');
			} else {
				$video[0].pause();
				$(this).html('<i class="icon-play"></i>');
			}
		}

		function muteUnmute() {
			if ($video[0].muted) {
				$video[0].muted = false;
				$(this).html('<i class="icon-volume"></i>');
			} else {
				$video[0].muted = true;
				$(this).html('<i class="icon-volume1"></i>');
			}
		}

		function videoSeek() {
			let seekTo = $video[0].duration * ($seek[0].value / 100);
			$video[0].currentTime = seekTo;
		}

		function seekUpdate() {
			let newTime = $video[0].currentTime * (100 / $video[0].duration);
			$seek[0].value = newTime;
		}

	}); */


	// -----------------------------------------------

	// let video = $('.video');



	// class videoPlayer {
	// 	constructor(video) {
	// 		this.video = video;
	// 		this.play = video.querySelector('.video__play');
	// 		this.play.addEventListener('click', playPouse);
	// 	}

	// 	playPouse() {
	// 		if (this.video.paused) {
	// 			this.video.play();
	// 			// $(this).html('Pouse');
	// 		} else {
	// 			this.video.pause();
	// 			// $(this).html('Play');
	// 		}
	// 	}



	// }

	// video.each(function (ind, element) {
	// 	let player = new videoPlayer(element);
	// 	console.log(player.video);
	// 	console.log(player.play);
	// });





	// let video1 = new videoPlayer(video[1]);
	// console.log(video1.video);
	// console.log(video1.play);





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
