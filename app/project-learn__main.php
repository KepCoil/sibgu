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
							<a href="#project-learn-students" aria-controls="profile" role="tab" data-toggle="tab">Студенту</a>
						</li>
						<li role="presentation">
							<a href="#project-learn-clients" aria-controls="profile" role="tab" data-toggle="tab">Заказчику</a>
						</li>
					</ul>


					<div class="tab-content">
						<div role="tabpanel" class="tab-pane fade in active" id="project-learn-info">
							<div class="project-learn-page__tab-item">
								<h3>Общая информация о проектной деятельности</h3>

								<div class="personal-info">

									<div class="personal-info__left">
										<div class="personal-info__photo-wrap">
											<img class="personal-info__photo-img" src="img/sibgu_no_photo.png" />
										</div>
									</div>

									<div class="personal-info__right">
										<div class="personal-info__content">


											<div class="personal-info__item personal-info__item--name">
												<span class="personal-info__item-text">Соколов Владислав Львович</span>
											</div>
											<div class="personal-info__item personal-info__item--job">
												<span class="personal-info__item-text">Начальник отдела основных образовательных программ и современных образовательных технологий</span>
											</div>


											<div class="personal-info__item personal-info__item--location">
												<i class="fa fa-map-marker personal-info__item-icon" aria-hidden="true"></i>
												<span class="personal-info__item-text">
													Корпус «Цл», проспект Мира, 82, каб. Цл-201
												</span>
											</div>
											<div class="personal-info__item personal-info__item--phone">
												<a class="personal-info__item-link" href="tel:227-51-60">
													<i class="fa fa-phone personal-info__item-icon" aria-hidden="true"></i>	
													<span class="personal-info__item-text">227-51-60</span>
												</a>
											</div>

											<div class="personal-info__item personal-info__item--email">
												<a class="personal-info__item-link" href="mailto:sokolov@sibsau.ru">
													<i class="fa fa-at personal-info__item-icon" aria-hidden="true"></i>
													<span class="personal-info__item-text">sokolov@sibsau.ru</span>
												</a>
											</div>

										</div>
									</div>
								</div>

								<p><strong>Проектная деятельность</strong> - это ...</p>
								<br/>
								<h5 class="project-learn-page__local-title">Цели проектной деятельности</h5>
								<ul class="ul-accent project-learn-page__local-list">
									<li>Цель 1</li>
									<li>Цель 2</li>
									<li>Цель 3</li>
								</ul>
								<p><a href="#" class="doc-file doc-file--pdf">Положение об организации и осуществлении проектной деятельности</a></p>
							</div>
						</div>


						<div role="tabpanel" class="tab-pane fade" id="project-learn-students">
							<div class="project-learn-page__tab-item project-learn-page__tab-item--learn-department">

								<h5 class="project-learn-page__local-title">Направления подготовки:</h5>
								<ul class="ul-accent project-learn-page__local-list">
									<li><a href="#">01.03.04 Прикладная математика</a></li>
									<li><a href="#">03.03.02 Физика</a></li>
									<li><a href="#">09.03.01 Информатика и вычислительная техника</a></li>
									<li><a href="#">09.03.02 Информационные системы и технологии</a></li>
									<li><a href="#">09.03.03 Прикладная информатика</a></li>
									<li><a href="#">11.03.02 Инфокоммуникационные технологии и системы связи</a></li>
								</ul>
							</div>
						</div>


						<div role="tabpanel" class="tab-pane fade" id="project-learn-clients">
							<div class="project-learn-page__tab-item">
								<p>Информация и документы для заказчика. Скорее всего статические данные</p>
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