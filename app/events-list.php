<?php include("_head.php") ?>
<?php include("_header.php") ?>
<?php include("_audit-menu-inner.php") ?>

<main>
	<div id="wrap" class="wrap-bg-grey">
		<div class="container">

			<div class="breadcrumbs">
				<ul class="breadcrumbs__line clearfix">

					<li class="breadcrumbs__line-element">
						<a href="/" class="breadcrumbs__link breadcrumbs__link--home">
							<i class="fa fa-home breadcrumbs__link--home-icon"></i>
							<span class="breadcrumbs__link--home-text">Главная</span>
						</a>
					</li>

					<li class="breadcrumbs__line-element">
						<a href="#" class="breadcrumbs__link breadcrumbs__link--disabled js-breadcrumbs__link--disabled">Мероприятия</a>
					</li>
				</ul>
			</div>

			<div class="page-sidebars">
				<div class="wrap-events-list">
					<div class="row">

						<div class="col-lg-19 col-md-18 page-sidebars__colums">
							<div class="page-sidebars__content">

								<div class="title-border">
									<h2 class="inner-title">Все мероприятия</h2>
								</div>

								<div class="wrap-events-date-filter">
									<ul class="clearfix">
										<li class="active"><a href="#">Текущие</a></li>
										<li><a href="#">Будущие</a></li>
										<li><a href="#">Прошедщие</a></li>
									</ul>
								</div>
								<div class="wrap-events-content">
									<div class="table-responsive">
										<table class="table table-striped table-events">
											<thead>
												<tr>
													<th>Дата</th>
													<th>Мероприятия</th>
													<th class="fix-width-180">Место проведения</th>
													<th class="fix-width-180">Контакты</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<time>24.11.2017</time>
														<time>24.11.2017</time>
													</td>
													<td class="event-title"><a href="#">Краевой форум одаренных детей Красноярского края «Поколение НТИ»</a></td>
													<td>пр. Мира 82, ауд. 338</td>
													<td>+7 (391) 212-26-55</td>
												</tr>
												<tr>
													<td>
														<time>24.11.2017</time>
														<time>28.11.2017</time>
													</td>
													<td class="event-title"><a href="#">Мастер-класс для абитуриентов по направлению «Биотехнология»</a></td>
													<td>пр. Мира 82, ауд. 338 </td>
													<td>+7 (391) 212-26-55</td>
												</tr>
												<tr>
													<td>
														<time>24.11.2017</time>
														<time>28.11.2017</time>
													</td>
													<td class="event-title"><a href="#">ХII Региональная научно-практическая конференция «Основные тенденции развития Российского законодательства»</a></td>
													<td>пр. Мира 82, ауд. 338 </td>
													<td>+7 (391) 212-26-55</td>
												</tr>
												<tr>
													<td>
														<time>24.11.2017</time>
														<time>28.11.2017</time>
													</td>
													<td class="event-title"><a href="#">Творческий конкурс «Бессмертные идеи», посвященный Всемирному дню философии</a></td>
													<td>пр. Мира 82, ауд. 338 </td>
													<td>+7 (391) 212-26-55</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>

							</div>

						</div>

						<div id="js-sticky-sidebar" class="col-lg-5 col-md-6 page-sidebars__colums">
							<div class="page-sidebars__sidebar">
								<div class="sidebar sidebar-navigation wrap-events-category">
									<ul class="sidebar-navigation__list">
										<li class="sidebar-navigation__item">
											<a href="#" class="sidebar-navigation__link  sidebar-navigation__link--active">Все мероприятия</a>
										</li>
										<li  class="sidebar-navigation__item">
											<a href="#" class="sidebar-navigation__link">Официальные мероприятия</a>
										</li>
										<li  class="sidebar-navigation__item">
											<a href="#" class="sidebar-navigation__link">Культурные мероприятия</a>
										</li>
										<li  class="sidebar-navigation__item">
											<a href="#" class="sidebar-navigation__link">Конференции</a>
										</li>
										<li  class="sidebar-navigation__item">
											<a href="#" class="sidebar-navigation__link">Иные мероприятия</a>
										</li>
									</ul>
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