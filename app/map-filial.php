<?php include("_head.php") ?>
<?php include("_header.php") ?>
<?php include("_inner-menu.php") ?>

<main>
	<div id="wrap">
		<div class="container">
			<h2 class="inner-title">Карта корпусов</h2>
		</div>
		<div id="map-filial" style="width: 100%; height: 768px;"></div>
		
		<script src="libs/yandex-map/yandex-api.js"></script>
		<script type="text/javascript">	
			ymaps.ready(init);
			var myMap;

			function init() {     
				myMap = new ymaps.Map("map-filial", {
					center: [56.017747, 92.925971],
					zoom: 15,
					controls : ["zoomControl", "fullscreenControl"]
				});

				var 
					glyphIcon1 = new ymaps.Placemark([56.012813, 92.974124], {
						hintContent: 'Корпуск А', 
						balloonContent: 'Корпуск А. пр.им.газеты "Красноярский рабочий", 31'
					}, {
			      	preset: 'islands#blueGlyphIcon',
			      	iconGlyphColor: 'yellow'
				   });

				myMap.geoObjects.add(glyphIcon1);
			};

		
		</script>
</div>
</main>

<?php include ("_footer.php"); ?>
<?php include ("_end.php"); ?>