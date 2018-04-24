$(function() {

	/* МОБИЛЬНОЕ МЕНЮ */
	// Перенос оба меню (костыль)
	var 
		commonMenuContent  = $("#js-main-common-menu").html(),
		commonAuditContent = $("#js-main-audit-menu").html(),
		resLinksContent    = $("#js-res-links >ul").html();
	
	$("#js-item-main-common-menu").append("<ul>" + commonMenuContent  + "</ul>");
	$("#js-item-main-audit-menu").append("<ul>"  + commonAuditContent + "</ul>");
	$("#js-item-res-links-menu").append("<ul>"   + resLinksContent    + "</ul>");

	// Инициализация плагина mmenu
	$("#js-mobile-mmenu").mmenu({
		extensions: ['fx-menu-slide', 'pagedim-black', 'border-full', "multiline"],
		navbar: {
			title: "Меню",
		},
		// Переносим ссылки ЛК, почта и расп занятий в футер мобильного меню (да костыль)
		"navbars": [{
			"position": "bottom",
			"content": [
			"<a class='fa fa-id-card mob-qlinks'   target='_blank'   href='https://pallada.sibsau.ru/page/lks' >     <span>Личный кабинет</span></a>",
			"<a class='fa fa-envelope mob-qlinks'  target='_blank'   href='https://webmail.sibsau.ru' >              <span>Почта</span></a>",
			"<a class='fa fa-table mob-qlinks'     target='_blank'   href='https://timetable.pallada.sibsau.ru/' >   <span>Расписание занятий</span></a>"
			]
		}]
	});

	$("#js-mobile-mmenu").find(".mm-next").addClass("mm-fullsubopen");


	// Кнопка мобильного меню
	var 
	mobileMenuAPI    = $("#js-mobile-mmenu").data("mmenu"),
	buttonMobileMenu = $("#js-button-mobile-mmenu");

	// Открываем панель меню
	buttonMobileMenu.click(function() {
		mobileMenuAPI.open();
	});

	// Изменяет кнопку на крестик и обратно
	mobileMenuAPI.bind("close:finish", function() {
		$("#js-button-mobile-mmenu").removeClass("is-active");
	}), mobileMenuAPI.bind("open:finish", function() {
		$("#js-button-mobile-mmenu").addClass("is-active");
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

	/* Неклибальность ссылок главного меню, если оно выпадающее */
	$(".main-menu ul.ul-inner-menu >li.droplist >a").click(function() {
		return false;
	});



	/* Вложенный выпадающий список (инф. ресурсы) */
	function showDropdown(el) {
		var el_li = $(el).parent().addClass('dropped');
		el_li.find('.droplist-main__sub').show();
	}

	$(".droplist-main__btn").click(function(e) {
		e.preventDefault();
		if ( $(this).is(".droplist-main__btn--active") ) {
			$(this).removeClass("droplist-main__btn--active");
			$(this).children(".fa").removeClass("fa-times").addClass("fa-caret-down");
			hideallDropdowns();
		} 
		else {
			$(this).addClass("droplist-main__btn--active");
			$(this).children(".fa").removeClass("fa-caret-down").addClass("fa-times");
			showDropdown(this);
		}
	});

	$(".droplist-main__sub-sub-title").click(function(e) {
		e.preventDefault();
		$(this).parent().children(".droplist-main__sub-sub-content").slideToggle(100);
	});

	$(".droplist-main__sub-sub-content >li >a").click(function() {
		hideallDropdowns();
	});

	function hideallDropdowns() {
		$(".dropped").removeClass('dropped');
		$(".droplist-main__btn").removeClass("droplist-main__btn--active").children(".fa").removeClass("fa-times").addClass("fa-caret-down");
		$(".droplist-main__sub").hide();
		$(".droplist-main__sub-sub-content").hide();
	}
	/**/
	



	/* Функция пересчета ширины слайдера в зависимости от ширины экрана */
	// function mainSliderResize() {

	// 	if ( !($("div").is(".navaslider")) ) {
	// 		return;
	// 	}
	// 	else {
	// 		var
	// 			windowSize 				= $(window).width(),
	// 			marginLeftContainer  = $(".navaslider .container").css("margin-left").replace("px", ""),
	// 			paddingLeftContainer = $(".navaslider .container").css("padding-left").replace("px", ""),
	// 			targetMenuWidth 		= $(".dekstop-target-menu").innerWidth(), 
	// 			containerWidth 		= $(".navaslider .container").innerWidth(),
	// 			sliderWidth,
	// 			slideContentWidth;

	// 		if ( (windowSize >= 992) && (windowSize <= 1920) ) {
	// 			sliderWidth = windowSize - marginLeftContainer - paddingLeftContainer - targetMenuWidth;
	// 			slideContentWidth = containerWidth - targetMenuWidth;
	// 		} 
	// 		else if (windowSize >= 1920) {
	// 			sliderWidth = containerWidth - targetMenuWidth;
	// 			slideContentWidth = containerWidth - targetMenuWidth;
	// 		}
	// 		else {
	// 			sliderWidth = "100%";
	// 			slideContentWidth = "100%";
	// 		}

	// 		$("#js-main-slider").width(sliderWidth);
	// 		$(".js-slide-content").each(function() {
	// 			$(this).css("width", slideContentWidth);
	// 		});
	// 	}
		
	// }

	// mainSliderResize();
	/* Конец функция пересчета ширины слайдера в зависимости от ширины экрана */



	/* Слайдер на главной странице */
	$('#js-main-slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 7000,
		nav: true,
		// navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
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

	/**/
	$("#js-links-other").owlCarousel({
		loop: true,
		responsiveClass: true,
		nav: true,
		responsive: {
			0:    { items:1 },
			420:  { items:2 },
			1260: { items:3 },
			1400: { items:4 },
			1580: { items:5 },
			1800: { items:6 }
		}
	});

	function resizeInstituteItems() {
		$(".inst-item-content").each(function() {
			var heightPreview =  $(this).children(".inst-item-content-preview").innerHeight();
			$(this).css("bottom", -heightPreview);
		});	
	}
	resizeInstituteItems();



	/* Определение расширение файлов для подстановки иконки (есть весомые подозрения, что скрипт написан максимально стремно) */
	$("#wrap a").each(function() {
		var
			th = $(this),
			filesExt = ["pdf", "doc", "docs", "rtf", "odt", "xlsx", "xlsm", "ods", "pptx", "odp"],
			getUrl = $(this).attr("href"),
			checkExt = getUrl.split(".").pop();

		// Проверяем, если ли нужное расширения файла
		if ( !(filesExt.indexOf(checkExt) != -1) ) {
			return;	
		}

		// Добавляем нужные классы для создания иконки
		else {
			th.addClass("doc-file");

			if ( (checkExt == "pdf") ) {
				th.addClass("doc-file--pdf");
			}
			else if ( (checkExt == "doc") || (checkExt == "docs") || (checkExt == "rtf")  || (checkExt == "odt") ) {
				th.addClass("doc-file--doc");
			}
			else if ( (checkExt == "xlsx") || (checkExt == "xlsm") || (checkExt == "ods") ) {
				th.addClass("doc-file--xlsx");
			}
			else if ( (checkExt == "pptx") || (checkExt == "odp") ) {
				th.addClass("doc-file--pptx");
			}
		}
	});


	/* Функционал галлереи */
	// Масштабирование картинок img (вместо использования background-image), для списка фоток альбома
	$(".js-photo-responsive").each(function() {
		var 
			th = $(this).height(),
			tw = $(this).width(),
			im = $(this).children('img'),
			ih = im.height(),
			iw = im.width()
			nh = im.height(),
			nw = im.width(),
			hd = (nh-th) / 2,
			wd = (nw-tw) / 2;

		if ( ih > iw ) {
			im.addClass('ww').removeClass('wh');
		} else { 
			im.addClass('wh').removeClass('ww');
		}

		if ( nh < nw ) {
			im.css({
				marginLeft: ('-' + wd + 'px'), 
				marginTop: 0
			});
		} else {
			im.css({marginTop: '-' + 5 + '%' });
		}
	});

	// Превью альбома
	$(".js-phogal-preview-img").switchItems();

	// Активация плагина галлереи
	$(".js-photo-gallery-init").simpleLightbox();
	/* Конец функционал галлереи */


	/* Функция уравнивания высоты различных элементов */
	function equalHeightElements() {
		$(".infographics-sect .wrap-infographics-content").matchHeight();
		$(".pa-sect .wrap-pa-item").matchHeight();
		$(".foot-first-level .wrap-foot-level .col-md-6 .wrap-foot-contacts").matchHeight();
		$(".dis-docs").matchHeight();
		$(".phogal-item .phogal-item-content-title").matchHeight();
		$(".gorisont-item-img").matchHeight();
		// $(".infographics-sect .wrap-infographics-content").height('auto').equalHeights();$(".pa-sect .wrap-pa-item").height('auto').equalHeights();$(".foot-first-level .wrap-foot-level .col-md-6 .wrap-foot-contacts").height('auto').equalHeights();$(".dis-docs").height('auto').equalHeights();$(".phogal-item .phogal-item-content-title").height('auto').equalHeights();$(".row-year-gorisont .gorisont-item-img").height('auto').equalHeights();

		/* Функция equalHeights() при мобильной версии */
		
		var windowWidth = $(window).width();
		
		// if (windowWidth < 922) {
		// 	$(".second-foot-line .col-sm-12").matchHeight();
		// }
		// else {
		// 	$(".second-foot-line .col-sm-12").height('auto');
		// }

		if (windowWidth >= 768) {
			$(".wrap-cards-news .wrap-news-content").matchHeight();
			$(".standart-item-content").matchHeight();
			// $(".wrap-cards-news .wrap-news-content").height('auto').equalHeights();$(".standart-item-content").height('auto').equalHeights();
		} 
		else {
			$(".wrap-cards-news .wrap-news-content").height('auto');
			$(".standart-item-content").height('auto');
		}

	}
	equalHeightElements();
	/**/

	/* Bootstrap accordion  */
	$('#accordion, #bs-collapse')
	.on('show.bs.collapse', function(e) {
		$(e.target).prev('.panel-heading').addClass('active');
	})
	.on('hide.bs.collapse', function(e) {
		$(e.target).prev('.panel-heading').removeClass('active');
	});
	
	$(".res-hide >ul").hide();
	$(".res-hide h3 span").click(function(){
		$(this).parent().next().slideToggle();
	});	   



	/* Функция перерасчета высоты карты в завимисимости от высоты экрана */
	function resizeHeightMapFilials() {
		var heightMapFilials = parseInt( $(window).height() * 0.7 );
		$("#js-corpuses-map").css({"height": heightMapFilials});
	}
	resizeHeightMapFilials();
	/**/



	/* Фиксация меню на внутр. страницах при скролле */
	// var
	// marginTopMainContent = ( $(".inner-menu").outerHeight() + parseInt($("#wrap").css("marginTop")) ),
	// defaultMarginTop     = parseInt($("#wrap").css("marginTop"));

	// $(window).scroll(function() {
	// 	var 
	// 	headerHeight   = $(".main-head").outerHeight(),
	// 	innerMenu      = $(".inner-menu"),
	// 	wrap           = $("#wrap"),
	// 	dekstopVers    = $(".inner-menu").is(":visible");

	// 	if ( ($(this).scrollTop() > headerHeight) && (dekstopVers) ) {
	// 		innerMenu.addClass("fixed-inner-menu");
	// 		wrap.css({"marginTop": marginTopMainContent});
	// 	} else {
	// 		innerMenu.removeClass("fixed-inner-menu");
	// 		wrap.css({"marginTop": defaultMarginTop});
	// 	}
	// });
	/**/


	/* Функции при ресайзе экрана */
	$(window).resize(function() {
		equalHeightElements();
		//mainSliderResize();
		resizeHeightMapFilials();
		resizeInstituteItems();
		// enablePaSlider();
	});


});