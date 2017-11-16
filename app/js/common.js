$(function() {


	$(".hamburger--spin").click(function() {
		$(this).toggleClass("is-active");
	});

	$(".wrap-home-common-menu >ul .droplist").hover(function() {
		$(this).children("ul").stop().slideToggle(250);
		$(this).toggleClass("droplist-open");
	}, function() {
		$(this).children("ul").stop().slideUp(250);
		$(this).removeClass("droplist-open");
	});

	$(".wrap-home-common-menu >ul li a").click(function() {
		return false
	})

	function mainSliderResize() {
		var 
			windowSize = $(window).width(),
			marginLeftContainer = $(".navaslider .container").css("margin-left").replace("px", ""),
			paddingLeftContainer = $(".navaslider .container").css("padding-left").replace("px", ""),
			targetMenuWidth = $(".dekstop-target-menu").innerWidth(),	
			sliderWidth = 0;

		if (windowSize >= 992) {
			sliderWidth = windowSize - marginLeftContainer - paddingLeftContainer - targetMenuWidth;
		}
		else {
			sliderWidth = "100%";
		}

		$("#js-main-slider").width(sliderWidth);
	};

	mainSliderResize();

	$(window).resize(function() {
		mainSliderResize();
	});

	/* Main slider*/
	$('#js-main-slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 7000
	});

	/* Костыль для пункта меню Сведенья о доходах ...*/
	$(".home-common-menu .droplist .droplist-content li a:contains('Сведения о доходах, об имуществе и обязательствах имущественного характера руководителя и членов его семьи')")
		.html('Сведения о доходах, об имуществе и обязательствах имущественного<br/>характера руководителя и членов его семьи');

	/* Анимированные цифры */
	 // $(".statistics-counter").counterUp({
  //       delay: 50,
  //       time: 3000
  //   });	

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