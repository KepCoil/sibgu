<?php include("_head.php") ?>
<?php include("_header.php") ?>
<?php include("_inner-menu.php") ?>

<!-- 
	Шаблонная страница, предназначенная для выкладывания в плиточном стиле ссылки с иконками font-awesome,
	например для "Студенту", "Ученому", "Сотруднику"
-->

<main>
	<div id="wrap">
		<div class="container">
			<h2 class="inner-title">Студенту</h2>

			<div class="row">


				<div class="col-lg-6 col-md-8 col-sm-12">
					<div class="wrap-standart-item">
						<a href="/page/studencheskie-organizatsii">
							<span class="wrap-icon">
								<i class="fa fa-group"></i>
							</span>
							<span class="standart-item-content">
								<h3>Студенческие организации</h3>
								<p>Союз студентов, совет обучающихся, штаб студенческих отрядов</p>
							</span>
						</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-8 col-sm-12">
					<div class="wrap-standart-item">
						<a href="https://timetable.pallada.sibsau.ru/">
							<span class="wrap-icon">
								<i class="fa fa-calendar"></i>
							</span>
							<span class="standart-item-content">
								<h3>Расписание</h3>
								<p>Расписание занятий, консультации, сессия</p>
							</span>
						</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-8 col-sm-12">
					<div class="wrap-standart-item">
						<a href="https://portfolio.pallada.sibsau.ru/web/login">
							<span class="wrap-icon">
								<i class="fa fa-line-chart"></i>
							</span>
							<span class="standart-item-content">
								<h3>Успеваемость</h3>
								<p>Модуль портфолио. АСУ вузом "Паллада"</p>
							</span>
						</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-8 col-sm-12">
					<div class="wrap-standart-item">
						<a href="/page/hostel">
							<span class="wrap-icon">
								<i class="fa fa-home"></i>
							</span>
							<span class="standart-item-content">
								<h3>Общежития</h3>
								<p>Студенческий городок, информация об общежитиях, локальные нормативные акты</p>
							</span>
						</a>
					</div>
				</div>


				<div class="col-lg-6 col-md-8 col-sm-12">
					<div class="wrap-standart-item">
						<a href="http://ctsv.sibsau.ru/">
							<span class="wrap-icon">
								<i class="fa fa-user"></i>
							</span>
							<span class="standart-item-content">
								<h3>Трудоустроиство студентов и выпускников</h3>
								<p>Веб-ресурс "Центр трудоустройства студентов и выпускников"</p>
							</span>
						</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-8 col-sm-12">
					<div class="wrap-standart-item">
						<a href="/page/sports-culture">
							<span class="wrap-icon">
								<i class="fa fa-futbol-o" aria-hidden="true"></i>
							</span>
							<span class="standart-item-content">
								<h3>Спорт</h3>
								<p>Спортивные секции, бассейн, тренажерные залы</p>
							</span>
						</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-8 col-sm-12">
					<div class="wrap-standart-item">
						<a href="/page/sports-culture">
							<span class="wrap-icon">
								<i class="fa fa-flag-checkered"></i>
							</span>
							<span class="standart-item-content">
								<h3>Культура и творчество</h3>
								<p>Информация о возможностях творческого развития в университете</p>
							</span>
						</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-8 col-sm-12">
					<!-- Для отключения элемента необходимо добавить класс item-no-work и отключить ссылку onclick="return false"-->
					<div class="wrap-standart-item item-no-work">
						<a href="https://antiplagiat.pallada.sibsau.ru/web/login?redirect=http%3A%2F%2Fantiplagiat.pallada.sibsau.ru%2Fantiplagiat" onclick="return false">
							<span class="wrap-icon">
								<i class="fa fa-check-square-o" aria-hidden="true"></i>
							</span>
							<span class="standart-item-content">
								<h3>Сервис "Проверка диплома в системе Антиплагиат"</h3>
								<p>Раздел в разработке...</p>
							</span>
						</a>
					</div>
				</div>

			</div>
		</div>
	</div>
</main>

<?php include ("_footer.php"); ?>
<?php include ("_end.php"); ?>