$(function() {

	$(".hamburger--spin").click(function() {
		$(this).toggleClass("is-active");
	});


	/* Main slider*/
	$('#js-main-slider').owlCarousel({
		loop: true,
		items: 1,
		// itemClass: "slider-item"
	});

	/*  Student slider */
	$("#js-comment-student-slider").owlCarousel({
		loop: true,
		items: 2,
		// slideBy: 2,
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

	/*  PA slider */
	// $("#js-slider-pa").owlCarousel({
	// 	loop: true,
	// 	items: 1,
	// 	itemClass: "wrap-pa-item",
	// 	slideBy: 2,
	//    responsiveClass:true,
	//    responsive:{
	//       0:{
	//          items:1,
	//       },
	//       992:{
	//          items:2
	//       }
	//    }
	// });

	function eqH () {
		$(".infographics-sect .wrap-infographics-content").height('auto').equalHeights();
		$(".pa-sect .wrap-pa-item").height('auto').equalHeights();
		$(".foot-first-level .wrap-foot-level .col-md-6 .wrap-foot-contacts").height('auto').equalHeights();
	};

	eqH();

	$(window).resize(function() {
		eqH();
	});

});
