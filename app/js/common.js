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
		$(this).children("ul").stop(true, true).slideToggle(250);
		$(this).toggleClass("droplist-open");
	}, function() {
		$(this).children("ul").stop(true, true).fadeOut(100);
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



	/* Слайдеры с использованием owlCarousel */
	$('#js-main-slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 7000,
		nav: true,
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


	// Слайдер баннера внизу на главной
	$("#js-links-other").owlCarousel({
		loop: true,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay: true,
		autoplayTimeout: 3000,
		responsive: {
			0:    { items:1 },
			420:  { items:2 },
			768:  { items:3 },
			1260: { items:4 },
			1580: { items:5 },
			1800: { items:6 }
		}
	});

	$(".photo-block__list-gallery--common").owlCarousel({
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	});

	$('#js-re-uni').owlCarousel({
		loop: false,
		items: 1,
		autoplay: false,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});

	/**/


	
	/* Карточка превью учебного подразделения */
	function resizeInstituteItems() {
		$(".inst-item-content").each(function() {
			var heightPreview =  $(this).children(".inst-item-content-preview").innerHeight();
			$(this).css("bottom", -heightPreview);
		});	
	}
	resizeInstituteItems();



	/* Определение расширение файлов для подстановки иконки в блоке основного контента страницы */
	$("#wrap a[data-name]").each(function() {
		var 
			th = $(this),
			filesExt = ["pdf", "doc", "docx", "rtf", "odt", "xlsx", "xlsm", "ods", "pptx", "odp"],
			getUrl = th.attr("data-name").toLowerCase(),
			checkExt = getUrl.split(".").pop();


		// Проверяем, если ли нужное расширения файла
		if ( !(filesExt.indexOf(checkExt) != -1) ) {
			return;	
		}

		// Добавляем нужные классы для создания иконки
		else {
			// th.addClass("doc-file");

			switch (checkExt) {
				case "pdf":
					th.addClass("doc-file--pdf");
					break;
				
				case "doc": 
				case "docx":
				case "rtf":
				case "odt":
					th.addClass("doc-file--doc");
					break;
				
				case "xlsx":
				case "xlsm":
				case "ods":
					th.addClass("doc-file--xlsx");
					break;

				case "pptx":
				case "odp":
					th.addClass("doc-file--pptx");
					break;
			}
		}
	});


	/*Breadcrumbs */
	$(".js-breadcrumbs__link--disabled").click(function(e) {
		e.preventDefault();
		return false;
	});


	/* РЕФАКТОРИНГ. */
	// Масштабирование картинок img (вместо использования background-image с background-size: cover), для списка фоток альбома
	// $(".js-photo-responsive").each(function() {
	// 	var 
	// 		th = $(this).height(),
	// 		tw = $(this).width(),
	// 		im = $(this).children('img'),
	// 		ih = im.height(),
	// 		iw = im.width();

		
	// 	if ( ih < iw/2 ) {
	// 		im.removeClass('wh').removeClass('ww');
	// 	}
	// 	else if ( ih > iw ) {
	// 		im.addClass('ww').removeClass('wh').removeClass('www');
	// 	}
	// 	else if ( ih < iw ) { 
	// 		im.addClass('wh').removeClass('ww').removeClass('www');
	// 	}
		
	// 	var 
	// 		nh = im.height(),
	//       nw = im.width(),
	//       hd = (nh-th) / 2,
	//       wd = (nw-tw) / 2;

	// 	if ( nh < nw ) {
	// 		im.css({
	// 			marginLeft: ('-' + wd + 'px'), 
	// 			marginTop: 0,
	// 		});
	// 	}
	// 	else {
	// 		im.css({
	// 			marginTop: 0,
	// 			marginLeft: 0
	// 		});
	// 	}
	// });

	// Превью альбома
	$(".js-phogal-preview-img").switchItems();

	// Активация плагина галлереи
	// $(".js-photo-gallery-init").simpleLightbox();
	$(".js-photo-gallery-init").simpleLightbox();
	/* Конец функционал галлереи */



	/* Функция для создания "липких" блоков с использованием sticky */
	function stickyBlocks() {
		var
			windowWidth  	 				= $(window).width(), 
			innerHeightFooter 			= $('.main-footer').innerHeight(),
			bottomPaddingWrap 			= parseInt( $("#wrap").css("padding-bottom") ),
			bottomStickySidebarOffset 	= innerHeightFooter + bottomPaddingWrap;
		
		if (windowWidth >= 992) {
			$('.page-sidebars__sidebar').sticky({
				topSpacing: 30,
				bottomSpacing: bottomStickySidebarOffset
			});
		} else {
			$('.page-sidebars__sidebar').unstick();
		}
			
	}

	stickyBlocks();



	/* Функция уравнивания высоты различных элементов через плагин "matchHeigh" */
	function equalHeightElements() {
		$(".infographics-sect .wrap-infographics-content").matchHeight();
		$(".pa-sect .wrap-pa-item").matchHeight();
		$(".foot-first-level .wrap-foot-level .col-md-6 .wrap-foot-contacts").matchHeight();
		$(".dis-docs").matchHeight();
		$(".phogal-item .phogal-item-content-title").matchHeight();
		$(".gorisont-paper .gorisont-item").matchHeight();
		$(".honor-persons .honor-persons__item").matchHeight();
		// $(".infographics-sect .wrap-infographics-content").height('auto').equalHeights();$(".pa-sect .wrap-pa-item").height('auto').equalHeights();$(".foot-first-level .wrap-foot-level .col-md-6 .wrap-foot-contacts").height('auto').equalHeights();$(".dis-docs").height('auto').equalHeights();$(".phogal-item .phogal-item-content-title").height('auto').equalHeights();$(".row-year-gorisont .gorisont-item-img").height('auto').equalHeights();
		
		var windowWidth  = $(window).width();

		// "matchHeight" при разной ширине экрана
		if ( (windowWidth <= 991) && (windowWidth >= 768) ) {
			$(".main-footer .foot-first-level .wrap-foot-level .col-md-6").matchHeight();
		}
		else {
			$(".main-footer .foot-first-level .wrap-foot-level .col-md-6").height('auto');
		}

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



	/* РЕФАКТОРИНГ. Фиксация меню на внутр. страницах при скролле */
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


	/* Пагинация */
	// Некликабельность активной кнопки
	$('#nav_panel .btn.active').click(function() {
		return false;
	});
	/* */

	/* Scroll Top Button */
	function activateButtonScrollTop() {
		var
			windowHeight = $(window).height(),
			scrollTop    = $(window).scrollTop();

		if ( scrollTop > (windowHeight * 0.5) ) {
			$("#js-button-top-scroll").addClass("button-top-scroll--active");
		} else {
			$("#js-button-top-scroll").removeClass("button-top-scroll--active");
		}
	}

	$("#js-button-top-scroll").click(function(e) {
		e.preventDefault();

		$("html, body").animate({
			scrollTop: 0
		}, "slow");

		return false;
	});
	/* */

	// Автоматическая нумерация ячеек таблиц (надо хорошо протестировать)
	$('.table-auto-num').each(function() {
		$(this).children('tbody').children('tr').each(function(i) {
			var numbRow = i + 1;
			if (numbRow == 1) {
				$(this).parent('tbody').parent('table').children('thead').children('tr').prepend('<th>№</th>');
			}
			$(this).prepend('<td>' + numbRow + '</td>');
		});
	});


	/* list.js */
	var options = {
		valueNames: [ 'name' ]
	};

	var userList = new List('users', options);
	/* */



	/* Функции при ресайзе экрана */
	$(window).resize(function() {
		equalHeightElements();
		resizeHeightMapFilials();
		resizeInstituteItems();
		stickyBlocks();
	});

	// Функции при скролее окна
	$(window).scroll(function() {
		activateButtonScrollTop();
		if ( $('#js-spec-version').hasClass("special-version--active") ) {
			$('#js-spec-version').removeClass('special-version--active');
		}
		
	});


/************************** ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ **************************/
/* 
	Брал отсюда + доработки
	http://voltos.ru/jsjquery/versiya-dlya-slabovidyashhix-na-chistom-jquery.html
	Спасибо большое и низкий поклон

	Изменение настроек просходит путем изменение значения data атрибутов
*/



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
			stickyBlocks();
			equalHeightElements();
			$(this).addClass("active");
			$("#js-button-spec-version .fa").removeClass('fa-eye').addClass('fa-eye-slash');
			$('#js-spec-version').addClass('special-version--active');
		}

		return false;
	});


	// Кнопка отключения версии для слабовидящих
	$("#js-close-button-spec-version").click(function() {
		CecutientOff();
		return false;
	});


	// Отключении версии для слабовидяших
	function CecutientOff() {
		$.cookie("CecutientCookie", null, { expires: 365, path: '/' });
		$.cookie("font-size",  		 null, { expires: 365, path: '/' });
		$.cookie("theme", 			 null, { expires: 365, path: '/' });
		$.cookie("letter-spacing",  null, { expires: 365, path: '/' });
		$.cookie("state-images",  	 null, { expires: 365, path: '/' });


		$("html").removeAttr("data-spec-vers", "data-font-size", "data-theme","data-img");
		$("#img-disable").attr('checked', 'checked');
		// $("#js-button-spec-version").removeClass("active");
		$("#js-button-spec-version .fa").removeClass('fa-eye-slash').addClass('fa-eye');
	
		window.location.reload();
	}
	
	// Проверяем акивацию версии для слабовидящих (т.е. если пользователь ранее включал ее) и добавляем необходимые прессеты
	if ($.cookie("CecutientCookie")=="on") {

		CecutientOn();
		
		if ($.cookie("font-size")=="normal")  { normalFontSize(); };
		if ($.cookie("font-size")=="medium")  { mediumFontSize(); };
		if ($.cookie("font-size")=="large")   { largeFontSize(); };

		if ($.cookie("theme")=="white") { whiteTheme(); };
		if ($.cookie("theme")=="black") { blackTheme(); };
		if ($.cookie("theme")=="blue")  { blueTheme(); };

		if ($.cookie("letter-spacing")=="default") { defaultLetterSpacing(); };
		if ($.cookie("letter-spacing")=="medium")  { mediumLetterSpacing(); };
		if ($.cookie("letter-spacing")=="large")   { largeLetterSpacing(); };

		if ($.cookie("state-images")=="on")  { imageOn(); };
		if ($.cookie("state-images")=="off") { imageOff(); };

		$("#js-button-spec-version").addClass("active");
		$("#js-button-spec-version .fa").removeClass('fa-eye').addClass('fa-eye-slash');
		$('#js-spec-version').addClass('special-version--active');

		equalHeightElements();
		stickyBlocks();
	}


	// Активации версии для слабовидящих
	function CecutientOn() {

		$("#js-spec-version").removeClass("hidden");
		$("html").attr('data-spec-vers', 'enable');
		$.cookie("CecutientCookie", "on", {
			expires: 365,
			path: '/'
		});

	}

	// Кнопка показа панели настроек версии для слабовидящих
	$('#js-button-toggle').click(function(e) {
		e.preventDefault();

		if ( $('#js-spec-version').hasClass("special-version--active") ) {
			$('#js-spec-version').removeClass('special-version--active');
		} 
		else {
			$('#js-spec-version').addClass('special-version--active');
		}

		return false;
	});


	/* Обработчики клика */
	$("#fz-normal").click(function()   { normalFontSize(); });
	$("#fz-medium").click(function()   { mediumFontSize(); });
	$("#fz-large").click(function()    { largeFontSize(); });

	$("#theme-white").click(function() { whiteTheme(); });
	$("#theme-black").click(function() { blackTheme(); });
	$("#theme-blue").click(function()  { blueTheme(); });

	$("#letter-spacing-default").click(function() { defaultLetterSpacing(); });
	$("#letter-spacing-medium").click(function()  { mediumLetterSpacing(); });
	$("#letter-spacing-large").click(function()   { largeLetterSpacing(); });
	
	$("#img-disable").click(function (){
		if ( $("#img-disable").prop("checked") ) {
			imageOn();
		} 
		else {
			imageOff();
		}
	});

	// Переинициализация плагинов
	$(".special-version__button").click(function() { 
		equalHeightElements();
		stickyBlocks();
	});
	/* Конец обработчики клика */


	/* Картинки */
	function imageOn() {

		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-img', 'enable');
			$("#img-disable").attr('checked', 'checked');
			$.cookie("state-images", "on", {
				expires: 365,
				path: '/'
			});
		}
	}

	function imageOff() {

		if ($.cookie("CecutientCookie")=="on") {
			
			$("html").attr('data-img', 'disable');
			$("#img-disable").removeAttr("checked");
			$.cookie("state-images", "off", {
				expires: 365,
				path: '/'
			});

		}
	}
	/* Конец картинки */


	/* Размер шрифта */
	function normalFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-font-size', 'default');

			$.cookie("font-size", "normal", {
				expires: 365,
				path: '/'
			});

		}
	}

	function mediumFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-font-size', 'medium');

			$.cookie("font-size", "medium", {
				expires: 365,
				path: '/'
			});

		}
	}

	function largeFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-font-size', 'large');

			$.cookie("font-size", "large", {
				expires: 365,
				path: '/'
			});

		}
	}
	/* Конец размер шрифта */


	/* Цветовые схемы */
	function whiteTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-theme', 'white');


			$.cookie("theme", "white", {
				expires: 365,
				path: '/'
			});

		}
	}

	function blackTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-theme', 'black');

			$.cookie("theme", "black", {
				expires: 365,
				path: '/'
			});

		};	
	}

	function blueTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-theme', 'blue');

			$.cookie("theme", "blue", {
				expires: 365,
				path: '/'
			});

		}
	}
	/* Конец цветовые схемы */


	/* Межстрочный интервал */
	function defaultLetterSpacing() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-letter-spacing', 'standart');


			$.cookie("letter-spacing", "standart", {
				expires: 365,
				path: '/'
			});

		}
	}

	function mediumLetterSpacing() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-letter-spacing', 'medium');

			$.cookie("letter-spacing", "medium", {
				expires: 365,
				path: '/'
			});

		};	
	}

	function largeLetterSpacing() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-letter-spacing', 'large');

			$.cookie("letter-spacing", "large", {
				expires: 365,
				path: '/'
			});

		}
	}
	/* Конец межстрочного интервала */


	/* Отключаем версию для слабовидящих для мобильных устройств, ширина <= 992px */
	$(window).resize(function() {
		var windowWidthCecutient = $(window).width();
		if ( (windowWidthCecutient <= 992) && ($.cookie("CecutientCookie")=="on") ) {
			CecutientOff();
		}
	});


	/**************************   КОНЕЦ ВЕРСИИ ДЛЯ СЛАБОВИДЯЩИХ   **************************/

});