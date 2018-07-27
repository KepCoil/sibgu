
/************************** ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ **************************/
/* 
	Брал отсюда + доработки
	http://voltos.ru/jsjquery/versiya-dlya-slabovidyashhix-na-chistom-jquery.html
	Спасибо большое и низкий поклон

	Изменение настроек просходит путем изменение значения data атрибутов
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
			$("#js-button-spec-version .fa").removeClass('fa-eye').addClass('fa-eye-slash');
			// window.location.reload();
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
		$.cookie("state-images",  	 null, { expires: 365, path: '/' });


		$("html").removeAttr("data-spec-vers", "data-font-size", "data-theme","data-img");
		$("#img-disable").attr('checked', 'checked');
		$("#js-button-spec-version").removeClass("active");;
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

		if ($.cookie("state-images")=="on")  { imageOn(); };
		if ($.cookie("state-images")=="off") { imageOff(); };

		$("#js-button-spec-version").addClass("active");
		$("#js-button-spec-version .fa").removeClass('fa-eye').addClass('fa-eye-slash');


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

			//$("html").removeClass("disable-img");
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

			//$("html").addClass("disable-img");
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

			// $("html").removeClass("font-size-medium font-size-large");
			// $("html").addClass("font-size-normal");

			$("html").attr('data-font-size', 'default');

			$.cookie("font-size", "normal", {
				expires: 365,
				path: '/'
			});

		}
	}

	function mediumFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			// $("html").removeClass("font-size-normal font-size-large");
			// $("html").addClass("font-size-medium");

			$("html").attr('data-font-size', 'medium');

			$.cookie("font-size", "medium", {
				expires: 365,
				path: '/'
			});

		}
	}

	function largeFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			// $("html").removeClass("font-size-normal font-size-medium");
			// $("html").addClass("font-size-large");

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

			// $("html").removeClass("black-theme blue-theme");
			// $("html").addClass("white-theme");

			$("html").attr('data-theme', 'white');


			$.cookie("theme", "white", {
				expires: 365,
				path: '/'
			});

		}
	}

	function blackTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			// $("html").removeClass("white-theme blue-theme");
			// $("html").addClass("black-theme");

			$("html").attr('data-theme', 'black');

			$.cookie("theme", "black", {
				expires: 365,
				path: '/'
			});

		};	
	}

	function blueTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			// $("html").removeClass("white-theme black-theme");
			// $("html").addClass("blue-theme");

			$("html").attr('data-theme', 'blue');

			$.cookie("theme", "blue", {
				expires: 365,
				path: '/'
			});

		}
	}
	/* Конец цветовые схемы */


	/* Отключаем версию для слабовидящих для мобильных устройств, ширина <= 992px */
	$(window).resize(function() {
		var windowWidthCecutient = $(window).width();
		if ( (windowWidthCecutient <= 992) && ($.cookie("CecutientCookie")=="on") ) {
			CecutientOff();
		}
	});
		


	/**************************   КОНЕЦ ВЕРСИИ ДЛЯ СЛАБОВИДЯЩИХ   **************************/

});