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
		items: 9,
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
				items: 8
			},

		}
	});

});