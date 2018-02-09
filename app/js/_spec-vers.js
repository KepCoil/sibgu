
/************************** ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ **************************/
/* 
	Брал отсюда
	http://voltos.ru/jsjquery/versiya-dlya-slabovidyashhix-na-chistom-jquery.html
	Спасибо большое и низкий поклон
*/

$(function() {

	// Ссылка ВКЛ./ВЫКЛ. версии для слабовидящих
	$('#js-button-spec-version').click(function() { 

		if ( ($.cookie("CecutientCookie")=="on") || ($(this).hasClass("active")) ) {
			CecutientOff();
		}
		else {
			CecutientOn();
			mediumFontSize();
			whiteTheme();
			imageOn(); 
			$("#js-text-button-spec-version").text("Версия по умолчанию");
			$(this).addClass("active");
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
		$.cookie("CecutientCookie", null);
		$.cookie("font-size",  null);
		$.cookie("theme", null);
		$.cookie("state-images",  null);
		$("#js-text-button-spec-version").text("Версия для слабовидящих");
		$(this).removeClass("active");
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

		$("#js-text-button-spec-version").text("Версия по умолчанию");
		$(this).addClass("active");
		
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



	// Обработчики клика
	$("#fz-normal").click(function() { normalFontSize(); });
	$("#fz-medium").click(function() { mediumFontSize(); });
	$("#fz-large").click(function()  { largeFontSize(); });

	$("#theme-white").click(function() { whiteTheme(); });
	$("#theme-black").click(function() { blackTheme(); });
	$("#theme-blue").click(function()  { blueTheme(); });


	/* Картинки*/
	$("#img-disable").click(function () {

		if ( $("#img-disable").prop("checked") ) {
			imageOn();
		} 
		else {
			imageOff();
		};
		
	});

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
	/* Картинки */


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


	/**************************   КОНЕЦ ВЕРСИИ ДЛЯ СЛАБОВИДЯЩИХ   **************************/

});