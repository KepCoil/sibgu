<?php include("_head.php") ?>
<?php include("_header.php") ?>
<?php include("_inner-menu.php") ?>

<main>
	<div id="wrap">

		<div class="container">
			<h2 class="inner-title">Карта корпусов</h2>
			<div class="list-filials"></div>
		</div>

		<div id="js-corpuses-map" class="ya-maps" style="width: 100%; height: 500px; margin-bottom: -50px;"></div>

		<script src="libs/yandex-map/yandex-api.js"></script>
		<script>
			/* https://tech.yandex.ru/maps/jsbox/2.1/object_list */
			// Группы объектов
			var groups = [
				{
					name: 'Учебные объекты (правый берег)',
					color: 'islands#blueIcon',
					items: [
					{
						center: [56.011892406804606,92.97379780051426],
						name: 'Корпус «А»',
						address: 'пр.им. газеты «Красноярский рабочий», 31'
					},
					{
						center: [56.01570855978735,92.98856238283236],
						name: 'Корпус «Б»',
						address: 'пр.им. газеты «Красноярский рабочий», 29'
					},
					{
						center: [56.01581072418076,92.98890034116822],
						name: 'Корпус «В»',
						address: 'пр.им. газеты «Красноярский рабочий», 29, строение 94'
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
						name: 'Корпус «К», «Км»',
						address: 'пр.им. газеты «Красноярский рабочий», 31А'
					},
					{
						center: [56.01195388972735,92.97381090939007],
						name: 'Корпус «Л»',
						address: 'пр.им. газеты «Красноярский рабочий», 31'
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
						center: [55.983327833665065,92.89797110280715],
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
						center: [55.99935221241152,92.95020144802034],
						name: 'Корпус «С1», «С2»',
						address: 'ул. Семафорная, 433'
					},
					{
						center: [56.00385025333352,92.95758139814743],
						name: 'Корпус «Ф»',
						address: 'ул. Волгоградская, 2, помещение 69'
					},
					{
						center: [56.00524189757415,92.95775305952442],
						name: 'Корпус «Ф1»',
						address: 'ул. Волгоградская, 7а'
					},
					{
						center: [56.01503718872841,92.97255391560451],
						name: 'Корпус «Ю»',
						address: 'ул. Юности, 39'
					},
					{
						center: [56.01540371471132,92.9713634828032],
						name: 'Корпус «НБ»',
						address: 'ул. Чайковского, 10'
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
					name: 'Учебные объекты (левый берег)',
					color: 'islands#greenIcon',
					items: [
					{
						center: [56.01223026248396,92.86903418650816],
						name: 'Корпус «Гл»',
						address: 'пр. Мира, 82'
					},
					{
						center: [56.01270807213798,92.8689000760574],
						name: 'Корпус «Цл»',
						address: 'пр. Мира, 82'
					},
					{
						center: [56.0130837044914,92.86885716071318],
						name: 'Корпус «СК»',
						address: 'пр. Мира, 82'
					},
					{
						center: [56.01311074987929,92.87074543585965],
						name: 'Корпус №2',
						address: 'пр. Мира, 82'
					},
					{
						center: [56.01363508134737,92.86828202808195],
						name: 'Корпус «УСК»',
						address: 'ул. Ленина, 80'
					},
					{
						center: [56.01223927781539,92.86780586451],
						name: 'Корпус №8',
						address: 'пр. Мира, 82'
					},
					{
						center: [56.014740855738836,92.86830748670336],
						name: 'Корпус «Ал», «Бл», «Вл»',
						address: 'ул. Марковского, 57'
					},
					{
						center: [56.0051680687223,92.84327399999995],
						name: 'Корпус «Сл»',
						address: 'ул. Робеспьера, 2'
					},
					{
						center: [56.012663484563845,92.87059415554096],
						name: 'Научная библиотека',
						address: 'пр. Мира, 82'
					},
					]
				},

				{
					name: 'Спортивно-оздоровительные объекты',
					color: 'islands#redIcon',
					items: [
					{
						center: [56.01745756872401,92.98091399999997],
						name: 'Спортзал №1',
						address: 'ул. Юности, 18а'
					},
					{
						center: [56.019303705580604,92.98115060185228],
						name: 'Дворец водного спорта',
						address: 'ул. Центральный проезд, 7'
					},
					{
						center: [56.031359202060756,93.02904742121382],
						name: 'Стадион',
						address: 'ул. 26 бакинских комиссаров, 3б'
					},
					{
						center: [56.015540568719075,92.87021449999999],
						name: 'Бассейн',
						address: 'ул. Марковского, 70а'
					},
					{
						center: [55.99972758091366,92.7847168134918],
						name: 'Лыжная база',
						address: 'ул. Ленинградская, 7а'
					},
					{
						center: [56.01278130588934,92.9740634680335],
						name: 'Тренажерный зал в корпусе «Л»',
						address: 'пр.им. газеты «Красноярский рабочий», 31, ст. 1'
					},
					
					]
				},
				{
					name: 'Социальные объекты',
					color: 'islands#greyIcon',
					items: [
					{
						center: [55.9689815838767,92.74356358248149],
						name: 'Сад Крутовского',
						address: 'ул. Сад Крутовского, 11г'
					},
					{
						center: [56.01298301124437,92.86801421070865],
						name: 'Профессорская столовая',
						address: 'ул. Ленина, 73'
					}]
				},
				{
					name: 'Общежития (правый берег)',
					color: 'islands#yellowIcon',
					items: [
					{
						center: [55.98571506873206,93.00573449999999],
						name: 'Общежитие №1',
						address: 'пр. Машиностроителей, 54'
					},
					{
						center: [56.0148155687172,92.97459899999996],
						name: 'Общежитие №2',
						address: 'ул. Инструментальная, 1'
					},
					{
						center: [56.00694506872687,92.96912799999993],
						name: 'Общежитие №3',
						address: 'ул. Ленина, 73'
					}]
				},
				{
					name: 'Общежития (левый берег)',
					color: 'islands#orangeIcon',
					items: [
					{
						center: [56.01438806874598,92.88171299999995],
						name: 'Общежитие №2',
						address: 'ул. Ленина, 32'
					},
					{
						center: [56.013260568713214,92.87295449999989],
						name: 'Общежитие №3',
						address: 'ул. Ленина, 61'
					},
					{
						center: [56.01321056871308,92.87227150000001],
						name: 'Общежитие №4',
						address: 'ул. Ленина, 63'
					},
					{
						center: [56.01550506874885,92.86962149999997],
						name: 'Общежитие №5',
						address: 'ул. Марковского, 70'
					},
					{
						center: [56.015263568718375,92.86882249999994],
						name: 'Общежитие №6',
						address: 'ул. Марковского, 72'
					},
					{
						center: [56.01570656871948,92.86889399999998],
						name: 'Общежитие №7',
						address: 'ул. Ады Лебедевой, 47'
					},
					{
						center: [56.01446356871627,92.86889399999998],
						name: 'Общежитие №8, Дом молодых ученых',
						address: 'ул. Марковского, 57А'
					}]
				},
			];

			console.log(groups);

			ymaps.ready(init);
			function init() {

				// Создаем карты
				var mapFilials = new ymaps.Map('js-corpuses-map', {
					center: [56.01839, 92.86717],
					zoom: 13,
					controls : ["zoomControl", "fullscreenControl"]
				});
				mapFilials.behaviors.enable('scrollZoom');

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
					mapFilials.geoObjects.add(collection);
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
							$('html, body').animate({scrollTop: $("#js-corpuses-map").offset().top-105}, 500);
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