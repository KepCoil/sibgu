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



	/* Функция уравнивания высоты различных элементов */
	function eqH() {
		$(".infographics-sect .wrap-infographics-content").height('auto').equalHeights();
		$(".pa-sect .wrap-pa-item").height('auto').equalHeights();
		$(".foot-first-level .wrap-foot-level .col-md-6 .wrap-foot-contacts").height('auto').equalHeights();
		$(".dis-docs").height('auto').equalHeights();
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

/************************** ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ **************************/
/* 
	Брал отсюда
	http://voltos.ru/jsjquery/versiya-dlya-slabovidyashhix-na-chistom-jquery.html
	Спасибо большое и низкий поклон

	Изменение настроек просходит путем подстановки определенного класса тегу <html>
*/

$(function() {

	// Ссылка ВКЛ./ВЫКЛ. версии для слабовидящих
	$("#js-button-spec-version").click(function() { 

		if ( ($.cookie("CecutientCookie")=="on") || ($(this).hasClass("active")) ) {
			CecutientOff();
		}
		else {
			CecutientOn();
			mediumFontSize();
			whiteTheme();
			imageOn(); 
			$(this).addClass("active");
			$("#js-text-button-spec-version").text("Версия по умолчанию");
		};

		return false;
	});


	// Кнопка отключения версии для слабовидящих
	$("#js-close-button-spec-version").click(function() {
		CecutientOff();
		return false;
	});


	// Отключении версии для слабовидяших
	function CecutientOff() {
		$.cookie("CecutientCookie", null, { path: '/' });
		$.cookie("font-size",  		 null, { path: '/' });
		$.cookie("theme", 			 null, { path: '/' });
		$.cookie("state-images",  	 null, { path: '/' });

		$("#js-button-spec-version").removeClass("active");
		$("#js-text-button-spec-version").text("Версия для слабовидящих");
		window.location.reload();
	};
	
	// Проверяем акивацию версии для слабовидящих (т.е. если пользователь ранее включал ее) и добавляем необходимые прессеты
	if ($.cookie("CecutientCookie")=="on") {

		CecutientOn();
		
		if ($.cookie("font-size")=="normal")  { normalFontSize(); };
		if ($.cookie("font-size")=="medium")  { mediumFontSize(); };
		if ($.cookie("font-size")=="large")   { largeFontSize(); };

		if ($.cookie("theme")=="white") { whiteTheme(); };
		if ($.cookie("theme")=="black") { blackTheme(); };
		if ($.cookie("theme")=="blue")  { blueTheme(); };

		if ($.cookie("state-images")=="on")  { imageOn(); };
		if ($.cookie("state-images")=="off") { imageOff(); };

		$("#js-button-spec-version").addClass("active");
		$("#js-text-button-spec-version").text("Версия по умолчанию");
	};


	// Активации версии для слабовидящих
	function CecutientOn() {

		$("#js-spec-version").removeClass("hidden");
		$.cookie("CecutientCookie", "on", {
			expires: 365,
			path: '/'
		});

		return false;
	};


	/* Обработчики клика */
	$("#fz-normal").click(function()   { normalFontSize(); });
	$("#fz-medium").click(function()   { mediumFontSize(); });
	$("#fz-large").click(function()    { largeFontSize(); });

	$("#theme-white").click(function() { whiteTheme(); });
	$("#theme-black").click(function() { blackTheme(); });
	$("#theme-blue").click(function()  { blueTheme(); });
	
	$("#img-disable").click(function (){
		if ( $("#img-disable").prop("checked") ) {
			imageOn();
		} 
		else {
			imageOff();
		};
	});
	/* Конец обработчики клика */


	/* Картинки */
	function imageOn() {

		if ($.cookie("CecutientCookie")=="on") {

			$("html").removeClass("disable-img");
			$("#img-disable").attr('checked', 'checked');
			$.cookie("state-images", "on", {
				expires: 365,
				path: '/'
			});

			return false;
		};	
	};

	function imageOff() {

		if ($.cookie("CecutientCookie")=="on") {

			$("html").addClass("disable-img");
			$("#img-disable").removeAttr("checked");
			$.cookie("state-images", "off", {
				expires: 365,
				path: '/'
			});

			return false;
		};	
	};
	/* Конец картинки */


	/* Размер шрифта */
	function normalFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").removeClass("font-size-medium font-size-large");
			$("html").addClass("font-size-normal");

			$.cookie("font-size", "normal", {
				expires: 365,
				path: '/'
			});

			return false;
		};	
	};

	function mediumFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").removeClass("font-size-normal font-size-large");
			$("html").addClass("font-size-medium");

			$.cookie("font-size", "medium", {
				expires: 365,
				path: '/'
			});

			return false;
		};	
	};

	function largeFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").removeClass("font-size-normal font-size-medium");
			$("html").addClass("font-size-large");

			$.cookie("font-size", "large", {
				expires: 365,
				path: '/'
			});

			return false;
		};	
	};
	/* Конец размер шрифта */


	/* Цветовые схемы */
	function whiteTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").removeClass("black-theme blue-theme");
			$("html").addClass("white-theme");

			$.cookie("theme", "white", {
				expires: 365,
				path: '/'
			});

			return false;
		};	
	};

	function blackTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").removeClass("white-theme blue-theme");
			$("html").addClass("black-theme");

			$.cookie("theme", "black", {
				expires: 365,
				path: '/'
			});

			return false;
		};	
	};

	function blueTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").removeClass("white-theme black-theme");
			$("html").addClass("blue-theme");

			$.cookie("theme", "blue", {
				expires: 365,
				path: '/'
			});

			return false;
		};	
	};
	/* Конец цветовые схемы */


	/**************************   КОНЕЦ ВЕРСИИ ДЛЯ СЛАБОВИДЯЩИХ   **************************/

});