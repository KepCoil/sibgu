
/* https://tech.yandex.ru/maps/jsbox/2.1/object_list */
// Группы объектов
var groups = [
	{
		name: 'Учебные объекты (правый берег):',
		color: 'islands#blueIcon',
		items: [
		{
			center: [56.011892406804606,92.97379780051426],
			name: 'Корпус «А»',
			address: 'пр.им. газеты «Красноярский рабочий», 31',
			caption: 'Корпус «А»'
		},
		{
			center: [56.01570855978735,92.98856238283236],
			name: 'Корпус «Б»',
			address: 'пр.им. газеты «Красноярский рабочий», 29',
			caption: 'Корпус «Б»'
		},
		{
			center: [56.01581072418076,92.98890034116822],
			name: 'Корпус «В»',
			address: 'пр.им. газеты «Красноярский рабочий», 29, строение 94',
			caption: 'Корпус «В»'
		},
		{
			center: [55.9893050687413,92.88071599999995],
			name: 'Корпус «Г»',
			address: 'ул. Гладкова, 6',
			caption: 'Корпус «Г»'
		},
		{
			center: [56.01428521400653,92.9751156211168],
			name: 'Корпус «Д»',
			address: 'пр.им. газеты «Красноярский рабочий», 56',
			caption: 'Корпус «Д»'
		},
		{
			center: [56.01567452751124,92.97995877450201],
			name: 'Корпус «Е»',
			address: 'пр.им. газеты «Красноярский рабочий», 48б',
			caption: 'Корпус «Е»'
		},
		{
			center: [56.01182893485795,92.97388147819159],
			name: 'Корпус «К»',
			address: 'пр.им. газеты «Красноярский рабочий», 31а',
			caption: 'Корпус «К»'
		},
		{
			center: [56.012703374205444,92.97420847605736],
			name: 'Корпус «Л»',
			address: 'пр.им. газеты «Красноярский рабочий», 31',
			caption: 'Корпус «Л»'
		},
		{
			center: [55.9856805987371,93.00565276324089],
			name: 'Корпус «М»',
			address: 'пр. Машиностроителей, 54',
			caption: 'Корпус «М»'
		},
		{
			center: [56.01239638394403,92.97455350237287],
			name: 'Корпус «Н»',
			address: 'пр.им. газеты «Красноярский рабочий», 31, стр. 5',
			caption: 'Корпус «Н»'
		},
		{
			center: [55.983327833665065,92.89797110280715],
			name: 'Корпус «О»',
			address: 'ул. 60 лет Октября, 109',
			caption: 'Корпус «О»'
		},
		{
			center: [56.012297215587154,92.97459641771712],
			name: 'Корпус «П»',
			address: 'пр.им. газеты «Красноярский рабочий», 31, стр. 5',
			caption: 'Корпус «П»'
		},
		{
			center: [56.04284331369482,93.02798491567506],
			name: 'Корпус «Р»',
			address: 'ул. Рейдовая, 69',
			caption: 'Корпус «Р»'
		},
		{
			center: [55.99935221241152,92.95020144802034],
			name: 'Корпус «С»',
			address: 'ул. Семафорная, 433/1',
			caption: 'Корпус «С»'
		},
		// {
		// 	center: [56.00385025333352,92.95758139814743],
		// 	name: 'Корпус «Ф»',
		// 	address: 'ул. Волгоградская, 2, помещение 69',
		// 	caption: 'Корпус «Ф»'
		// },
		// {
		// 	center: [56.00524189757415,92.95775305952442],
		// 	name: 'Корпус «Ф1»',
		// 	address: 'ул. Волгоградская, 7а',
		// 	caption: 'Корпус «Ф1»'
		// },
		{
			center: [56.01503718872841,92.97255391560451],
			name: 'Корпус «Ю»',
			address: 'ул. Юности, 39',
			caption: 'Корпус «Ю»'
		},
		// {
		// 	center: [56.01540371471132,92.9713634828032],
		// 	name: 'Корпус «НБ»',
		// 	address: 'ул. Чайковского, 10',
		// 	caption: 'Корпус «НБ»'
		// },
		{
			center: [56.01167957582372,92.97464581487911],
			name: 'Аэрокосмический колледж',
			address: 'пр.им. газеты «Красноярский рабочий», 31',
			caption: 'Аэрокосмический колледж'
		},
		{
			center: [56.018509750972434,92.97761722565103],
			name: 'Аэрокосмическая школа',
			address: 'ул. Иркутская 2',
			caption: 'Аэрокосмическая школа'
		},
		{
			center: [56.01515807621881,92.9716035483704],
			name: 'Научная библиотека',
			address: 'ул. Чайковского, 10',
			caption: 'Научная библиотека'
		},
		]
	},

	{
		name: 'Учебные объекты (левый берег):',
		color: 'islands#greenIcon',
		items: [
		{
			center: [56.01223026248396,92.86903418650816],
			name: 'Корпус «Гл»',
			address: 'пр. Мира, 82',
			caption: 'Корпус «Гл»'
		},
		{
			center: [56.01270807213798,92.8689000760574],
			name: 'Корпус «Цл»',
			address: 'пр. Мира, 82',
			caption: 'Корпус «Цл»'
		},
		{
			center: [56.0130837044914,92.86885716071318],
			name: 'Корпус «СК»',
			address: 'пр. Мира, 82',
			caption: 'Корпус «СК»'
		},
		{
			center: [56.01363508134737,92.86828202808195],
			name: 'Корпус «УСК»',
			address: 'ул. Ленина, 80',
			caption: 'Корпус «УСК»'
		},
		{
			center: [56.01311074987929,92.87074543585965],
			name: 'Корпус «7»',
			address: 'пр. Мира, 82',
			caption: 'Корпус 7'
		},
		{
			center: [56.01223927781539,92.86780586451],
			name: 'Корпус «8»',
			address: 'пр. Мира, 82',
			caption: 'Корпус №8'
		},
		{
			center: [56.014780, 92.868008],
			name: 'Корпус «Ал»',
			address: 'ул. Марковского, 57',
			caption: 'Корпус «Ал»'
		},
		{
			center: [56.014213, 92.868035],
			name: 'Корпус «Бл»',
			address: 'ул. Марковского, 57',
			caption: 'Корпус «Бл»'
		},
		{
			center: [56.014124, 92.867589],
			name: 'Корпус «Вл»',
			address: 'ул. Марковского, 57',
			caption: 'Корпус «Вл»'
		},
		{
			center: [56.0051680687223,92.84327399999995],
			name: 'Корпус «Сл»',
			address: 'ул. Робеспьера, 2',
			caption: 'Корпус «Сл»'
		},
		{
			center: [56.012663484563845,92.87059415554096],
			name: 'Научная библиотека',
			address: 'пр. Мира, 82',
			caption: 'Научная библиотека'
		},
		]
	},

	{
		name: 'Спортивно-оздоровительные объекты:',
		color: 'islands#redIcon',
		items: [
		{
			center: [56.01745756872401,92.98091399999997],
			name: 'Спортзал №1',
			address: 'ул. Юности, 18а',
			caption: 'Спортзал №1'
		},
		{
			center: [56.019303705580604,92.98115060185228],
			name: 'Дворец водного спорта',
			address: 'ул. Центральный проезд, 7',
			caption: 'Дворец водного спорта'
		},
		{
			center: [56.01363508134737,92.86828202808195],
			name: 'Корпус «УСК»',
			address: 'ул. Ленина, 80',
			caption: 'Корпус «УСК»'
		},
		{
			center: [56.031359202060756,93.02904742121382],
			name: 'Стадион',
			address: 'ул. 26 бакинских комиссаров, 3б',
			caption: 'Стадион'
		},
		{
			center: [56.015540568719075,92.87021449999999],
			name: 'Бассейн «Технологический»',
			address: 'ул. Марковского, 70а',
			caption: 'Бассейн'
		},
		{
			center: [55.99972758091366,92.7847168134918],
			name: 'Лыжная база',
			address: 'ул. Ленинградская, 7а',
			caption: 'Лыжная база'
		},
		{
			center: [56.01278130588934,92.9740634680335],
			name: 'Тренажерный зал в корпусе «Л»',
			address: 'пр.им. газеты «Красноярский рабочий», 31, ст. 1',
			caption: 'Тренажерный зал'
		},
		]
	},
	{
		name: 'Социальные объекты:',
		color: 'islands#greyIcon',
		items: [
		{
			center: [55.9689815838767,92.74356358248149],
			name: 'Сад Крутовского',
			address: 'ул. Сад Крутовского, 11г',
			caption: 'Сад Крутовского'
		},
		{
			center: [56.031128, 93.026195],
			name: 'Студенческий дворец культуры «Аэрокосмический»',
			address: 'ул. 26 Бакинских Комиссаров, 9а',
			caption: 'Студенческий дворец культуры «Аэрокосмический»'
		},
		// {
		// 	center: [56.01298301124437,92.86801421070865],
		// 	name: 'Профессорская столовая',
		// 	address: 'ул. Ленина, 73',
		// 	caption: 'Профессорская столовая'
		// },
		{
			center: [56.01288946916109,92.97409328769679],
			name: 'Мед. пункт в корпусе «Л»',
			address: 'пр.им. газеты «Красноярский рабочий», 31, ст. 7',
			caption: 'Мед. пункт'
		},
		{
			center: [56.011445601460615,92.97494059735088],
			name: 'Мед. пункт в корпусе «К»',
			address: 'пр.им. газеты «Красноярский рабочий», 31а',
			caption: 'Мед. пункт'
		},
		{
			center: [56.015775504747104,92.86960004232786],
			name: 'Мед. пункт в общежитие №5',
			address: 'ул. Марковского, 70',
			caption: 'Мед. пункт'
		},
		]
	},
	{
		name: 'Общежития (правый берег):',
		color: 'islands#yellowIcon',
		items: [
		{
			center: [55.98571506873206,93.00573449999999],
			name: 'Общежитие №1',
			address: 'пр. Машиностроителей, 54',
			caption: 'Общежитие №1'
		},
		{
			center: [56.0148155687172,92.97459899999996],
			name: 'Общежитие №2',
			address: 'ул. Инструментальная, 1',
			caption: 'Общежитие №2'
		},
		{
			center: [56.00694506872687,92.96912799999993],
			name: 'Общежитие №3',
			address: 'ул. Волгоградская, 35',
			caption: 'Общежитие №3'
		}]
	},
	{
		name: 'Общежития (левый берег):',
		color: 'islands#orangeIcon',
		items: [
		{
			center: [56.01438806874598,92.88171299999995],
			name: 'Общежитие №2',
			address: 'ул. Ленина, 32',
			caption: 'Общежитие №2'
		},
		{
			center: [56.013260568713214,92.87295449999989],
			name: 'Общежитие №3',
			address: 'ул. Ленина, 61',
			caption: 'Общежитие №3'
		},
		{
			center: [56.01321056871308,92.87227150000001],
			name: 'Общежитие №4',
			address: 'ул. Ленина, 63',
			caption: 'Общежитие №4'
		},
		{
			center: [56.01550506874885,92.86962149999997],
			name: 'Общежитие №5',
			address: 'ул. Марковского, 70',
			caption: 'Общежитие №5'
		},
		{
			center: [56.015263568718375,92.86882249999994],
			name: 'Общежитие №6',
			address: 'ул. Марковского, 72',
			caption: 'Общежитие №6'
		},
		{
			center: [56.01570656871948,92.86889399999998],
			name: 'Общежитие №7',
			address: 'ул. Ады Лебедевой, 47',
			caption: 'Общежитие №7'
		},
		{
			center: [56.01446356871627,92.86889399999998],
			name: 'Общежитие №8, Дом молодых ученых',
			address: 'ул. Марковского, 57а',
			caption: 'Общежитие №8'
		}
		]
	},
];

ymaps.ready(init);

function init() {

	// Создаем карты
	var 
		mapCorpuses = new ymaps.Map('js-corpuses-map', {
			center: [56.01839, 92.86717],
			zoom: 13,
			controls: ["zoomControl", "fullscreenControl"],
		});

	mapCorpuses.behaviors.enable('scrollZoom');


	var menu = $('<ul class="corpuses-list"></ul>');
      
	for (var i = 0, l = groups.length; i < l; i++) {
		createMenuGroup(groups[i]);
	}

	function createMenuGroup(group) {
		// Пункт меню.
		var 
			menuItem = $('<li class="corpuses-item"><a class="corpuses-item-title" href="#">' + group.name + '</a></li>'),
			submenu = $('<ol class="corpuses-item-submenu"></ol>'),
			// Коллекция для геообъектов группы.
			collection = new ymaps.GeoObjectCollection(null, { preset: group.color});

		// Добавляем коллекцию на карту.
		mapCorpuses.geoObjects.add(collection);

		// Добавляем подменю.
		menuItem
         .append(submenu)
			.appendTo(menu)
			.find('a')
			.bind('click', function () {
				if (!placemark.balloon.isOpen()) {
	         	placemark.balloon.open();
	         } else {
	        		placemark.balloon.close();
	         }
				return false;
		});

		for (var j = 0, m = group.items.length; j < m; j++) {
			createSubMenu(group.items[j], collection, submenu);
		}
   }

	function createSubMenu(item, collection, submenu) {
		var 
			submenuItem = $('<li><a href="#">' + item.name + ' (' + item.address + ')' + '</a></li>'),
			// Метка
			placemark = new ymaps.Placemark(
				item.center,
				{ 
					balloonContentHeader: item.name, 
					balloonContentBody: item.address,
					iconCaption: item.caption
				});

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
	menu.appendTo($('.map-corpuses'));
}