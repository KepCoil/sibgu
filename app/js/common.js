$(function() {


	/* МОБИЛЬНОЕ МЕНЮ */

	// Перенос оба меню
	var 
	commonMenuContent  = $("#js-main-common-menu").html(),
	commonAuditContent = $("#js-main-audit-menu").html();
	
	$("#js-item-main-common-menu").append("<ul>" + commonMenuContent + "</ul>");
	$("#js-item-main-audit-menu").append("<ul>" + commonAuditContent  + "</ul>");

	// Плагин mmenu
	$("#js-mobile-mmenu").mmenu({
		extensions: ['fx-menu-slide', 'pagedim-black', 'border-full', "multiline"],
		navbar: {
			title: "Меню",
		},
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


	// Кнопка
	var 
	mobileMenuAPI 	  = $("#js-mobile-mmenu").data("mmenu"),
	buttonMobileMenu = $("#js-button-mobile-mmenu");

	buttonMobileMenu.click(function() {

		mobileMenuAPI.open();
		// $(this).toggleClass("is-active");
	});
	// console.log("lol");

	// mobileMenuAPI.closePanel($("#js-button-mobile-mmenu").removeClass("is-active"));

	// mobileMenuAPI.bind("closePanel", function() {
	// 	console.log("lol");
	// 	buttonMobileMenu.removeClass("is-active");
 //   });
 /* КОНЕЦ МОБИЛЬНОГО МЕНЮ */



	// Кнопка мобильного меню
	// $(".hamburger--spin").click(function() {
	// 	$(this).toggleClass("is-active");
	// });

	// Выпадающие меню
	$(".wrap-main-menu >ul .droplist").hover(function() {
		$(this).children("ul").stop(true, true).delay(250).slideToggle(250);
		$(this).toggleClass("droplist-open");
	}, function() {
		$(this).children("ul").stop(true, true).slideUp(250);
		$(this).removeClass("droplist-open");
	});
	
	// Неклибальность ссылок меню на внутренних страницах
	$(".wrap-main-menu #js-main-common-menu >li.droplist >a").click(function() {
		return false;
	});


	// Костыль для пункта меню "Сведенья о доходах..."
	$(".main-menu .droplist .droplist-content li a:contains('Сведения о доходах, об имуществе и обязательствах имущественного характера руководителя и членов его семьи')")
		.html('Сведения о доходах, об имуществе и обязательствах<br/>имущественного характера руководителя и<br/>членов его семьи');



	// Функция пересчета ширины слайдера в зависимости от ширины экрана
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


	function getTopHeightMenu() {
		var 
			heightHeader = $(".top-line").outerHeight() + $(".head-content").outerHeight();

		$(".main-menu.inner-menu").css({'top': heightHeader});

	}

	getTopHeightMenu();


	// Функция для фиксирования меню на внутренних страниц при прокрутке
	function fixTableMenuScrolling() {

		var searchInnerMenu = $("div").is(".wrap-inner-table-menu");

		if (!searchInnerMenu) {
			return;
		} 
		else {

			var
				menuWrap     = $(".main-menu.inner-menu"),
				heightHeader = $(".top-line").outerHeight() + $(".head-content").outerHeight(),
				// heightMenu   = $(".main-menu").outerHeight(),
				top 			 = $(window).scrollTop();

			if (top + 0 < heightHeader) {
				menuWrap.css('top', (heightHeader - top));
			} else {
				menuWrap.css('top', 0);
			}

		}
	};


	// Слайдер на главной странице
	$('#js-main-slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 7000
	});
	

	// Слайдер секции "Отзывы студентов"
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


		// Для страницы новостей
		var windowWidth = $(window).width();
		
		if (windowWidth >= 768) {
			$(".wrap-cards-news .wrap-news-content").height('auto').equalHeights();
		} else {
			$(".wrap-cards-news .wrap-news-content").height('auto');
		}

	};
	eqH();


	// Функции при ресайзе экрана
	$(window).resize(function() {
		eqH();
		mainSliderResize();
		enablePaSlider();
	});


	// Функции при скролле
	$(window).scroll(function() {
		fixTableMenuScrolling();
	});

});