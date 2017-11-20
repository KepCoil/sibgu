$(function() {

	// Кнопка мобильного меню
	$(".hamburger--spin").click(function() {
		$(this).toggleClass("is-active");
	});

	// Выпадающие меню
	$(".wrap-main-menu >ul .droplist").hover(function() {
		$(this).children("ul").stop(true, true).delay(250).slideToggle(250);
		$(this).toggleClass("droplist-open");
	}, function() {
		$(this).children("ul").stop(true, true).slideUp(250);
		$(this).removeClass("droplist-open");
	});
	
	// Неклибальность верхний ссылок меню общей информации
	$(".wrap-home-common-menu >ul >li >a").click(function() {
		return false
	});


	// Костыль для пункта меню "Сведенья о доходах..."
	var ppp = $(".main-menu .droplist .droplist-content li a:contains('Сведения о доходах, об имуществе и обязательствах имущественного характера руководителя и членов его семьи')")
		.html('Сведения о доходах, об имуществе и обязательствах<br/>имущественного характера руководителя и<br/>членов его семьи');

	// Функция пересчета ширины слайдера в зависимости от ширины экрана
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


	// Слайдер на главной странице
	$('#js-main-slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 7000
	});
	

	console.log(ppp);
	// Анимированные цифры (Требуется библиотеки waypoints и counterUp)
	// $(".statistics-counter").counterUp({
	// 	delay: 50,
	// 	time: 3000
	// });	


	// Слайдер секции "Отзывы студентов"
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

	// Слайдер секции "Наши партнеры". Срабатывает только на ширене <= 992
	function enablePaSlider() {
		
		var windowWidth = $(window).width();

		if (windowWidth <= 992) {
			$("#js-pa-slider").owlCarousel({
				loop: true,
				items: 4,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
					},
					768:{
						items:2,
					}
				}
			});
		}
	}
	enablePaSlider();


	// Функция уравнивания высоты items
	function eqH() {
		$(".infographics-sect .wrap-infographics-content").height('auto').equalHeights();
		$(".pa-sect .wrap-pa-item").height('auto').equalHeights();
		$(".foot-first-level .wrap-foot-level .col-md-6 .wrap-foot-contacts").height('auto').equalHeights();
	};
	eqH();


	// Вызов функций при ресайзе экрана 
	$(window).resize(function() {
		eqH();
		mainSliderResize();
		enablePaSlider();
	});

});