<?php include("_head.php") ?>
<?php include("_header.php") ?>
<?php include("_inner-menu.php") ?>

<main>
	<div id="wrap">

		<div class="container">
			<h2 class="inner-title">Карта корпусов</h2>
			<div class="list-filials"></div>
		</div>

		<div id="js-corpuses-map" class="ya-maps" style="width: 100%; height: 600px; margin-bottom: -50px;"></div>
		
		<script src="libs/yandex-map/yandex-api.js"></script>
		<script>
			/* https://tech.yandex.ru/maps/jsbox/2.1/object_list */
			// Группы объектов
			var groups = [
				{
					name: 'Учебные объекты',
					color: 'islands#greenIcon',
					items: [
					{
						center: [56.011892406804606,92.97379780051426],
						name: 'Корпус «А»',
						address: 'пр.им. газеты «Красноярский рабочий», 31'
					},
					{
						center: [56.0148690366325,92.98331259872668],
						name: 'Корпус «Б»',
						address: 'пр.им. газеты «Красноярский рабочий», 29/1'
					},
					{
						center: [56.0148690366325,92.98331259872668],
						name: 'Корпус «В»',
						address: 'пр.им. газеты «Красноярский рабочий», 29/1'
					},
					{
						center: [55.9893050687413,92.88071599999995],
						name: 'Корпус «Г»',
						address: 'ул. Гладкова, 6'
					},
					{
						center: [56.01428521400653,92.9751156211168],
						name: 'Корпус «Д»',
						address: 'пр.им. газеты «Красноярский рабочий», 56'
					},
					{
						center: [56.01567452751124,92.97995877450201],
						name: 'Корпус «Е»',
						address: 'пр.им. газеты «Красноярский рабочий», 48Б'
					},
					{
						center: [56.01182893485795,92.97388147819159],
						name: 'Корпус «К»',
						address: 'пр.им. газеты «Красноярский рабочий», 31А'
					},
					{
						center: [55.9856805987371,93.00565276324089],
						name: 'Корпус «М»',
						address: 'пр. Машиностроителей, 54'
					},
					{
						center: [56.01239638394403,92.97455350237287],
						name: 'Корпус «Н»',
						address: 'пр.им. газеты «Красноярский рабочий», 31, стр. 5'
					},
					{
						center: [55.999324077754615,92.95013061359595],
						name: 'Корпус «О»',
						address: 'ул. 60 лет Октября, 109'
					},
					{
						center: [56.012297215587154,92.97459641771712],
						name: 'Корпус «П»',
						address: 'пр.им. газеты «Красноярский рабочий», 31, стр. 5'
					},
					{
						center: [56.04284331369482,93.02798491567506],
						name: 'Корпус «Р»',
						address: 'ул. Рейдовая, 69'
					},
					{
						center: [56.01503718872841,92.97255391560451],
						name: 'Корпус «Ю»',
						address: 'ул. Юности, 39'
					},
					{
						center: [56.01167957582372,92.97464581487911],
						name: 'Аэрокосмический колледж',
						address: 'пр.им. газеты «Красноярский рабочий», 31'
					},
					{
						center: [56.018509750972434,92.97761722565103],
						name: 'Аэрокосмическая школа',
						address: 'ул. Иркутская 2'
					},
					{
						center: [56.01515807621881,92.9716035483704],
						name: 'Научная библиотека',
						address: 'ул. Чайковского, 10'
					},
					]
				},
				{
					name: 'Спортивно-оздоровительные объекты',
					color: 'islands#redIcon',
					items: [
					{
						center: [56.012533, 92.973218],
						name: 'Ракета',
						address: 'Планета Земля 4'
					}]
				},
				{
					name: 'Социальные объекты',
					color: 'islands#blueIcon',
					items: [
					{
						center: [56.021319, 92.858755],
						name: 'соц. объект',
						address: 'Планета Земля 5'
					}]
				}
			];

			ymaps.ready(init);
			function init() {

				// Создаем карты
				var myMap = new ymaps.Map('js-corpuses-map', {
					center: [56.01839, 92.86717],
					zoom: 13,
					controls : ["zoomControl", "fullscreenControl"]
				});
				myMap.behaviors.enable('scrollZoom');

				var menu = $('<ul class="filials-list"></ul>');
	            
				for (var i = 0, l = groups.length; i < l; i++) {
					createMenuGroup(groups[i]);
				}

				function createMenuGroup (group) {
					// Пункт меню.
					var 
						menuItem = $('<li><a href="#">' + group.name + '</a></li>'),
						submenu = $('<ol class="submenu"></ol>'),
						// Коллекция для геообъектов группы.
						collection = new ymaps.GeoObjectCollection(null, { preset: group.color});

					// Добавляем коллекцию на карту.
					myMap.geoObjects.add(collection);
					// Добавляем подменю.
					menuItem
		            .append(submenu)
						.appendTo(menu)
						.find('a')
						.bind('click', function () {
							return false;
						});

					for (var j = 0, m = group.items.length; j < m; j++) {
						createSubMenu(group.items[j], collection, submenu);
					}
	         };

				function createSubMenu (item, collection, submenu) {
					var 
						submenuItem = $('<li><a href="#">' + item.name + ' (' + item.address + ')' + '</a></li>'),
						// Метка
						placemark = new ymaps.Placemark(item.center, { balloonContentHeader: item.name, balloonContentBody: item.address });

					// Добавляем метку в коллекцию.
					collection.add(placemark);
					// Добавляем пункт в подменю.
					submenuItem
						.appendTo(submenu)
						.find('a')
						.bind('click', function () {
							// $('html, body').animate({scrollTop: $("#js-corpuses-map").offset().top}, 500);
							placemark.balloon.open();
							return false;
						});
				}

				// Добавим меню в нужный блок
				menu.appendTo($('.list-filials'));
			}
		</script>

</div>
</main>

<?php include ("_footer.php"); ?>
<?php include ("_end.php"); ?>