<?php include("_head.php") ?>
<?php include("_header.php") ?>
<?php include("_audit-menu-inner.php") ?>

<main>
	<div id="wrap">
		<div class="container">

			<!-- Хлебные крошки -->
			<?php include("__breadcrumbs.php"); ?>
			
			<h2 class="inner-title">Проектная деятельность</h2>

			<div class="project-learn-page">
				<div class="tabs-container">


					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active">
							<a href="#project-learn-info" aria-controls="home" role="tab" data-toggle="tab">Информация</a>
						</li>
						<li role="presentation">
							<a href="#project-learn-students" aria-controls="profile" role="tab" data-toggle="tab">Обущающемуся</a>
						</li>
						<li role="presentation">
							<a href="#project-learn-clients" aria-controls="profile" role="tab" data-toggle="tab">Заказчику</a>
						</li>
					</ul>


					<div class="tab-content">
						<div role="tabpanel" class="tab-pane fade in active" id="project-learn-info">
							<div class="project-learn-page__tab-item">
								<h3>Общая информация о проектной деятельности</h3>
								<p><strong>Проектная деятельность</strong> - это ...</p>
								<br/>
								<h5 class="project-learn-page__local-title">Цели проектной деятельности</h5>
								<ul class="ul-accent project-learn-page__local-list">
									<li>Цель 1</li>
									<li>Цель 2</li>
									<li>Цель 3</li>
								</ul>
							</div>
						</div>


						<div role="tabpanel" class="tab-pane fade" id="project-learn-students">
							<div class="project-learn-page__tab-item project-learn-page__tab-item--learn-department">
								<h3>Обущающемуся</h3>

								<h5 class="project-learn-page__local-title">Институты</h5>
								<ul class="ul-accent project-learn-page__local-list">
									<li><a href="#">Институт космической техники</a></li>
									<li><a href="#">Институт информатики и телекоммуникаций</a></li>
									<li><a href="#">Институт машиноведения и мехатроники </a></li>
									<li><a href="#">Институт гражданской авиации и таможенного дела </a></li>
									<li><a href="#">Институт социального инжиниринга </a></li>
									<li><a href="#">Инженерно-экономический институт </a></li>
								</ul>
								<h5 class="project-learn-page__local-title">Факультеты</h5>
								<ul class="ul-accent project-learn-page__local-list">
									<li><a href="#">Лесохозяйственный факультет</a></li>
									<li><a href="#">Лесоинженерный факультет</a></li>
									<li><a href="#">Факультет механической технологии древесины</a></li>
									<li><a href="#">Факультет химических технологий</a></li>
									<li><a href="#">Факультет переработки природных соединений</a></li>
									<li><a href="#">Факультет экономики и управления бизнес-процессами</a></li>
								</ul>
							</div>
						</div>


						<div role="tabpanel" class="tab-pane fade" id="project-learn-clients">
							<div class="project-learn-page__tab-item">
								<h3>Заказчику</h3>
								<p>Информация и документы для заказчика. Возможно статические данные</p>
							</div>
						</div>

					</div>
				</div>
			</div>


		</div>
	</div>
</main>

<?php include ("_footer.php"); ?>
<?php include ("_end.php"); ?>