$(function() {

	$(".hamburger--spin").click(function() {
		$(this).toggleClass("is-active");
	});


	/* Main slider*/
	// $('#js-main-slider').owlCarousel({
	// 	loop: true,
	// 	items: 1,
	// 	// nav: false,
	// 	itemClass: "slider-item",
	// });

	/*  Student slider */
	$("#js-comment-student-slider").owlCarousel({
		loop: true,
		items: 2,
	   responsiveClass:true,
	   responsive:{
	      0:{
	         items:1,
	      },
	      992:{
	         items:2
	      }
	   }
	});

});
