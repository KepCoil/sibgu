<?php include("_head.php") ?>
<?php include("_header.php") ?>
<?php include("_inner-menu.php") ?>

<main>
	<div id="wrap">

		<div class="container">
			<h2 class="inner-title">Карта корпусов</h2>
			<div class="list-filials"></div>
		</div>

		<div id="map" style="width: 100%; height: 768px;"></div>
		
		<script src="libs/yandex-map/yandex-api.js"></script>
		<script>
			// Группы объектов
			var groups = [
				{
					name: "Учебные объекты",
					color: "islands#greenIcon",
					icon: "left",
					items: [
					{
						center: [56.012813, 92.974124],
						name: "Корпус Л"
					},
					{
						center: [56.012431, 92.974429],
						name: "Корпус Н"
					},
					{
						center: [56.014117, 92.974753],
						name: "Корпус Д"
					}]
				},
				{
					name: "Спортивно-оздоровительные объекты",
					color: "islands#redIcon",
					icon: "right",
					items: [
					{
						center: [56.012533, 92.973218],
						name: "Ракета"
					}]
				},
				{
					name: "Спортивно-оздоровительные объекты",
					color: "islands#blueIcon",
					icon: "top",
					items: [
					{
						center: [56.021319, 92.858755],
						name: "соц. объект"
					}]
				}
			];

			ymaps.ready(init);
			function init() {

				// Создаем карты
				var myMap = new ymaps.Map('map', {
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
						collection = new ymaps.GeoObjectCollection(null, { preset: group.color, iconGlyph: group.icon });

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
						submenuItem = $('<li><a href="#">' + item.name + '</a></li>'),
						// Метка
						placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });

					// Добавляем метку в коллекцию.
					collection.add(placemark);
					// Добавляем пункт в подменю.
					submenuItem
						.appendTo(submenu)
						.find('a')
						.bind('click', function () {
							if (!placemark.balloon.isOpen()) {
								placemark.balloon.open();
							} else {
								placemark.balloon.close();
							}
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