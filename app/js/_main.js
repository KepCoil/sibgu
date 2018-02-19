$(function() {

	/* СКРИПТ ПРОВЕРКИ НА IE 8 И НИЖЕ */
	// if(document.all && !document.addEventListener){
	// 	console.log("ie");
	// 	alert("ie");
	// }
	/*  */


	/* МОБИЛЬНОЕ МЕНЮ */

	// Перенос оба меню (костыль)
	var 
	commonMenuContent  = $("#js-main-common-menu").html(),
	commonAuditContent = $("#js-main-audit-menu").html(),
	resLinksContent 	 = $("#js-res-links").html();
	
	$("#js-item-main-common-menu").append("<ul>" + commonMenuContent  + "</ul>");
	$("#js-item-main-audit-menu").append("<ul>"  + commonAuditContent + "</ul>");
	$("#js-item-res-links-menu").append("<ul>"   + resLinksContent    + "</ul>");

	// Плагин mmenu
	$("#js-mobile-mmenu").mmenu({
		extensions: ['fx-menu-slide', 'pagedim-black', 'border-full', "multiline"],
		navbar: {
			title: "Меню",
		},
		// Переносим ссылки ЛК, почта и расп занятий в футер мобильного меню (да костыль)
		"navbars": [{
			"position": "bottom",
			"content": [
			"<a class='fa fa-id-card mob-qlinks'	target='_blank'	href='https://pallada.sibsau.ru/page/lks' >		<span>Личный кабинет</span></a>",
			"<a class='fa fa-envelope mob-qlinks'	target='_blank' 	href='https://webmail.sibsau.ru' >					<span>Почта</span></a>",
			"<a class='fa fa-table mob-qlinks'		target='_blank'	href='https://timetable.pallada.sibsau.ru/' >	<span>Расписание занятий</span></a>"
			]
		}]
	});

	$("#js-mobile-mmenu").find(".mm-next").addClass("mm-fullsubopen");


	// Кнопка мобильного меню
	var 
	mobileMenuAPI 	  = $("#js-mobile-mmenu").data("mmenu"),
	buttonMobileMenu = $("#js-button-mobile-mmenu");

	buttonMobileMenu.click(function() {

		mobileMenuAPI.open();
		// $(this).toggleClass("is-active");
	});

	/* КОНЕЦ МОБИЛЬНОГО МЕНЮ */



	/* Выпадающие меню */
	$(".ul-inner-menu >li.droplist").hover(function() {
		$(this).children("ul").stop(true, true).delay(250).slideToggle(250);
		$(this).toggleClass("droplist-open");
	}, function() {
		$(this).children("ul").stop(true, true).slideUp(250);
		$(this).removeClass("droplist-open");
	});
	

	/* Неклибальность ссылок меню на внутренних страницах */
	$(".wrap-main-menu #js-main-common-menu >li.droplist >a").click(function() {
		return false;
	});



	/* Костыль для пункта меню "Сведенья о доходах..." */
	// $(".main-menu .droplist .droplist-content li a:contains('Сведения о доходах, об имуществе и обязательствах имущественного характера руководителя и членов его семьи')")
	// 	.html('Сведения о доходах, об имуществе и обязательствах<br/>имущественного характера руководителя и<br/>членов его семьи');



	/* Функция пересчета ширины слайдера в зависимости от ширины экрана */
	function mainSliderResize() {

		var searchSlider = $("div").is(".navaslider");
		
		if (!searchSlider) {
			return;		
		} 
		else {
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
			};

			$("#js-main-slider").width(sliderWidth);
		}
		
	};
	mainSliderResize();
	/* Конец функция пересчета ширины слайдера в зависимости от ширины экрана */



	/* Слайдер на главной странице */
	$('#js-main-slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 10000
	});

	

	/* Слайдер секции "Отзывы студентов" */
	$("#js-comment-student-slider").owlCarousel({
		loop: true,
		items: 2,
		responsiveClass:true,
		responsive: {
			0:   { items:1 },
			992: { items:2 }
		}
	});



	/* Слайдер для парнеров */
	$("#js-pa-slider").owlCarousel({
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		responsiveClass: true,
		responsive: {
			0:    { items:1 },
			768:  { items:2 },
			992:  { items:3 },
			1200: { items:4 }
		}
	});



	/* Слайдер секции "Наши партнеры". Срабатывает только на ширене <= 992 */
	/*
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
	*/


	$(".js-phogal-preview-img").switchItems();


	/* Функция уравнивания высоты различных элементов */
	function eqH() {
		$(".infographics-sect .wrap-infographics-content").height('auto').equalHeights();
		$(".pa-sect .wrap-pa-item").height('auto').equalHeights();
		$(".foot-first-level .wrap-foot-level .col-md-6 .wrap-foot-contacts").height('auto').equalHeights();
		$(".dis-docs").height('auto').equalHeights();
		$(".phogal-item .phogal-item-content-title").height('auto').equalHeights();

		// $(".filials-page .col-lg-12").height('auto').equalHeights();


		/* Функция equalHeights() при мобильной версии */
		var windowWidth = $(window).width();
		if (windowWidth >= 768) {
			$(".wrap-cards-news .wrap-news-content").height('auto').equalHeights();
			$(".standart-item-content").height('auto').equalHeights();
		} else {
			$(".wrap-cards-news .wrap-news-content").height('auto');
			$(".standart-item-content").height('auto');
		}

	};


	eqH();


	/* Bootstrap accordion  */
	$('#accordion, #bs-collapse')
	.on('show.bs.collapse', function(e) {
		$(e.target).prev('.panel-heading').addClass('active');
	})
	.on('hide.bs.collapse', function(e) {
		$(e.target).prev('.panel-heading').removeClass('active');
	});	



	// Функция перерасчета высоты карты в завимисимости от высоты экрана
	function resizeHeightMapFilials() {
		var heightMapFilials = parseInt($(window).height() * 0.7);
		$("#js-corpuses-map").css({"height": heightMapFilials});
	};
	resizeHeightMapFilials();



	/* Фиксация меню на внутр. страницах при скролле */
	var
	marginTopMainContent = ( $(".inner-menu").outerHeight() + parseInt($("#wrap").css("marginTop")) ),
	defaultMarginTop		= parseInt($("#wrap").css("marginTop"));

	$(window).scroll(function() {
		var 
		headerHeight 	= $(".main-head").outerHeight(),
		innerMenu 		= $(".inner-menu"),
		wrap 				= $("#wrap"),
		dekstopVers 	= $(".inner-menu").is(":visible");

		if ( ($(this).scrollTop() > headerHeight) && (dekstopVers) ) {
			innerMenu.addClass("fixed-inner-menu");
			wrap.css({"marginTop": marginTopMainContent});
		} else {
			innerMenu.removeClass("fixed-inner-menu");
			wrap.css({"marginTop": defaultMarginTop});
		}
	});



	/* Функции при ресайзе экрана */
	$(window).resize(function() {
		eqH();
		mainSliderResize();
		resizeHeightMapFilials();
		// enablePaSlider();
	});


});