$( document ).ready(function() {

	// ---------------------- #search-open --------------------------

	$('#search-open').on('click', function() {
		$(this).toggleClass('active');
		$('#search').fadeToggle();
	});

	// ---------------------- initialize sliders --------------------------

	$('.line__slider').owlCarousel({
		loop:true,
		margin:26,
		responsive: {
			0:{
				items: 2
			},
			768:{
				items: 4
			},
			992:{
				items: 6
			},
			1200:{
				items: 9
			},

		}
	});

	$('.line__slider-category').owlCarousel({
		loop:true,
		margin:25,
		nav:false,
		responsive: {
			0:{
				items: 2
			},
			768:{
				items: 3
			},
			992:{
				items: 4
			},
			1200:{
				items: 6
			},
			1440:{
				items: 7
			},
			1600:{
				items: 8
			},
		}
	});

});