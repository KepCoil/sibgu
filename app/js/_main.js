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



	/* Слайдеры с использованием owlCarousel */
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


	$("#js-links-other").owlCarousel({
		loop: true,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		// responsiveClass: true,
		responsive: {
			0:    { items:1 },
			420:  { items:2 },
			768:  { items:3 },
			1260: { items:4 },
			1580: { items:5 },
			1800: { items:6 }
		}
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
	$("#wrap a").each(function() {
		var 
			th = $(this),
			filesExt = ["pdf", "doc", "docx", "rtf", "odt", "xlsx", "xlsm", "ods", "pptx", "odp"],
			getUrl = th.attr("href").toLowerCase(),
			checkExt = getUrl.split(".").pop();

		// Проверяем, если ли нужное расширения файла
		if ( !(filesExt.indexOf(checkExt) != -1) ) {
			return;	
		}

		// Добавляем нужные классы для создания иконки
		else {
			th.addClass("doc-file");

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


	/* Функционал галлереи */
	// Масштабирование картинок img (вместо использования background-image с background-size: cover), для списка фоток альбома
	$(".js-photo-responsive").each(function() {
		var 
			th = $(this).height(),
			tw = $(this).width(),
			im = $(this).children('img'),
			ih = im.height(),
			iw = im.width();

		
		if ( ih < iw/2 ) {
			im.removeClass('wh').removeClass('ww');
			im.height('100%');
			// console.log(3);
		}
		else if ( ih > iw ) {
			im.addClass('ww').removeClass('wh').removeClass('www');
			// console.log(1);
		}
		else if ( ih < iw ) { 
			im.addClass('wh').removeClass('ww').removeClass('www');
			// console.log(2);
		}
		
		// console.log(iw);
		// console.log(ih);
		// console.log('-----');

		var 
			nh = im.height(),
	      nw = im.width(),
	      hd = (nh-th) / 2,
	      wd = (nw-tw) / 2;

		if ( nh < nw ) {
			im.css({
				marginLeft: ('-' + wd + 'px'), 
				marginTop: 0,
			});
		}
		else {
			im.css({
				//marginTop: '-' + 5 + '%',
				marginTop: 0,
				marginLeft: 0
			});
		}
	});

	// Превью альбома
	$(".js-phogal-preview-img").switchItems();

	// Активация плагина галлереи
	$(".js-photo-gallery-init").simpleLightbox();
	/* Конец функционал галлереи */


	/* Функция для создания "липких" блоков с использованием stickySidebar */
	function stickyBlocks() {
		var windowWidth  = $(window).width();
		
		if (windowWidth >= 992) {
			$('#js-sticky-sidebar').stickySidebar({
				topSpacing: 20,
				bottomSpacing: 40,
			});
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
		$(".gorisont-item-img").matchHeight();
		// $(".infographics-sect .wrap-infographics-content").height('auto').equalHeights();$(".pa-sect .wrap-pa-item").height('auto').equalHeights();$(".foot-first-level .wrap-foot-level .col-md-6 .wrap-foot-contacts").height('auto').equalHeights();$(".dis-docs").height('auto').equalHeights();$(".phogal-item .phogal-item-content-title").height('auto').equalHeights();$(".row-year-gorisont .gorisont-item-img").height('auto').equalHeights();
		
		var windowWidth  = $(window).width();

		// "matchHeigh" при мобильной версии различной ширине экрана
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

		if ( scrollTop > (windowHeight * 0.75) ) {
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
	});


});