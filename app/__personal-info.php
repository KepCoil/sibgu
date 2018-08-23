
<!-- 
	Фотографии необходимо предвательно обрезать и задать размеры 130x130 пикселей 
-->


<!-- Разметка если карточка должна быть на весь экран -->
<div class="personal-info">

	<div class="personal-info__left">
		<div class="personal-info__photo-wrap">
			<img class="personal-info__photo-img" src="img/test/kustova.jpg" />
		</div>
	</div>

	<div class="personal-info__right">
		<div class="personal-info__content">


			<div class="personal-info__item personal-info__item--name">
				<span class="personal-info__item-text">Гильмудинов Юрий Григорьевич</span>
			</div>
			<div class="personal-info__item personal-info__item--job">
				<span class="personal-info__item-text">Директор</span>
			</div>


			<div class="personal-info__item personal-info__item--location">
				<i class="fa fa-map-marker personal-info__item-icon" aria-hidden="true"></i>
				<span class="personal-info__item-text">
					Дворец водного спорта, Центральный проезд, 7, г. Красноярск 
				</span>
			</div>

			<!-- Вариант размертки если требуется указать более одно телефона. 
				Если один телефон не должен быть кликабельным, например внутренний, нужно убрать ссылку -->
				<div class="personal-info__item personal-info__item--phone">
					<a class="personal-info__item-link" href="tel:+73912645751">
						<i class="fa fa-phone personal-info__item-icon" aria-hidden="true"></i>	
						<span class="personal-info__item-text">+7(391) 264-57-51</span>
					</a>
				</div>

				<!-- Факс без ссылки -->
				<div class="personal-info__item personal-info__item--fax">
					<i class="fa fa-fax personal-info__item-icon" aria-hidden="true"></i>	
					<span class="personal-info__item-text">+7(391) 264-45-51</span>
				</div>

				<div class="personal-info__item personal-info__item--email">
					<a class="personal-info__item-link" href="mailto:gilmydinov@sibsau.ru">
						<i class="fa fa-at personal-info__item-icon" aria-hidden="true"></i>
						<span class="personal-info__item-text">gilmydinov@sibsau.ru</span>
					</a>
				</div>
				<div class="personal-info__item personal-info__item--site">
					<a class="personal-info__item-link" href="sport.sibsau.ru" target="_blank">
						<i class="fa fa-globe personal-info__item-icon" aria-hidden="true"></i>
						<span class="personal-info__item-text">sport.sibsau.ru</span>
					</a>
				</div>


			</div>
		</div>
	</div>
	<!-- Конец Разметка если карточка должна быть на весь экран -->



<!-- 
	Разметка, если карточек в ряду должно быть 2. 
	Каточка оборачивается в колонку с классами "col-lg-12 col-md-24 col-sm-12 col-xs-24"
	2 карточки оборачиваются и ряд с классом "row"
-->
<div class="row">
	<div class="col-lg-12 col-md-24 col-sm-12 col-xs-24">
		<div class="personal-info">


			<div class="personal-info__left">
				<div class="personal-info__photo-wrap">
					<img class="personal-info__photo-img" src="img/test/kustova.jpg" />
				</div>
			</div>


			<!-- Иконки возможно стоит вещать на before -->
			<div class="personal-info__right">
				<div class="personal-info__content">


					<!-- name -->
					<div class="personal-info__item personal-info__item--name">
						<span class="personal-info__item-text">Жарова Алла Викторовна</span>
					</div>
					<div class="personal-info__item personal-info__item--job">
						<span class="personal-info__item-text">Директор</span>
					</div>


					<!-- main -->
					<div class="personal-info__item personal-info__item--location">
						<i class="fa fa-map-marker personal-info__item-icon" aria-hidden="true"></i>
						<span class="personal-info__item-text">
							Корпус "Цл", ауд. Цл-209, пр.Мира, 82, г.Красноярск (режим работы: с понедельника по пятницу с 11:00 до 18:00)
						</span>
					</div>

				<!-- Вариант размертки если требуется указать более одно телефона. 
					Если один телефон не должен быть кликабельным, например внутренний, нужно убрать ссылку -->
					<div class="personal-info__item personal-info__item--phone">
						<i class="fa fa-phone personal-info__item-icon" aria-hidden="true"></i>
						<a class="personal-info__item-link" href="tel:+73912278949">	
							<span class="personal-info__item-text">+7(391) 227-89-49</span>
						</a>
						<span class="personal-info__item-text">Предварительная запись, работает автоответчик (круглосуточно)</span>
					</div>

					<div class="personal-info__item personal-info__item--email">
						<a class="personal-info__item-link" href="mailto:webmail@sibsau.ru">
							<i class="fa fa-at personal-info__item-icon" aria-hidden="true"></i>
							<span class="personal-info__item-text">webmail@sibsau.ru</span>
						</a>
					</div>
					<div class="personal-info__item personal-info__item--site">
						<a class="personal-info__item-link" href="#" target="_blank">
							<i class="fa fa-globe personal-info__item-icon" aria-hidden="true"></i>
							<span class="personal-info__item-text">website.sibsau.ru</span>
						</a>
					</div>
					<!-- main -->


					<!-- social -->
					<div class="personal-info__item personal-info__item--soc-vk">
						<a class="personal-info__item-link" href="https://vk.com/club148652228" target="_blank">
							<i class="fa fa-vk personal-info__item-icon" aria-hidden="true"></i>
							<span class="personal-info__item-text">https://vk.com/club148652228</span>	
						</a>
					</div>
					<div class="personal-info__item personal-info__item--soc-instagram">
						<a class="personal-info__item-link" href="#" target="_blank">
							<i class="fa fa-instagram personal-info__item-icon" aria-hidden="true"></i>
							<span class="personal-info__item-text">instagram.com/sibsau</span>
						</a>
					</div>
					<!-- social -->

				</div>
			</div>


		</div>
	</div>

	<div class="col-lg-12 col-md-24 col-sm-12 col-xs-24">
		<div class="personal-info">


			<div class="personal-info__left">
				<div class="personal-info__photo-wrap">
					<img class="personal-info__photo-img" src="img/test/30.11.2017_Institut_mashinovedenija_i_mehatroniki_1_.png" />
				</div>
			</div>


			<!-- Иконки возможно стоит вещать на before -->
			<div class="personal-info__right">
				<div class="personal-info__content">


					<!-- name -->
					<div class="personal-info__item personal-info__item--name">
						<span class="personal-info__item-text">Жарова Алла Викторовна</span>
					</div>
					<div class="personal-info__item personal-info__item--job">
						<span class="personal-info__item-text">Директор</span>
					</div>


					<!-- main -->
					<div class="personal-info__item personal-info__item--location">
						<i class="fa fa-map-marker personal-info__item-icon" aria-hidden="true"></i>
						<span class="personal-info__item-text">
							Корпус "Цл", ауд. Цл-209, пр.Мира, 82, г.Красноярск (режим работы: с понедельника по пятницу с 11:00 до 18:00)
						</span>
					</div>

				<!-- Вариант размертки если требуется указать более одно телефона. 
					Если один телефон не должен быть кликабельным, например внутренний, нужно убрать ссылку -->
					<div class="personal-info__item personal-info__item--phone">
						<i class="fa fa-phone personal-info__item-icon" aria-hidden="true"></i>
						<a class="personal-info__item-link" href="tel:+73912278949">	
							<span class="personal-info__item-text">+7(391) 227-89-49</span>
						</a>
						<span class="personal-info__item-text">Предварительная запись, работает автоответчик (круглосуточно)</span>
					</div>

					<div class="personal-info__item personal-info__item--email">
						<a class="personal-info__item-link" href="mailto:webmail@sibsau.ru">
							<i class="fa fa-at personal-info__item-icon" aria-hidden="true"></i>
							<span class="personal-info__item-text">webmail@sibsau.ru</span>
						</a>
					</div>
					<div class="personal-info__item personal-info__item--site">
						<a class="personal-info__item-link" href="#" target="_blank">
							<i class="fa fa-globe personal-info__item-icon" aria-hidden="true"></i>
							<span class="personal-info__item-text">website.sibsau.ru</span>
						</a>
					</div>
					<!-- main -->


				</div>
			</div>


		</div>
	</div>
</div>


<!-- Ряд -->
<div class="row">

	<div class="col-lg-12 col-md-24 col-sm-12 col-xs-24">
		<div class="personal-info">


			<div class="personal-info__left">
				<div class="personal-info__photo-wrap">
					<img class="personal-info__photo-img" src="img/test/testoedov_intro-text.jpg" />
				</div>
			</div>


			<!-- Иконки возможно стоит вещать на before -->
			<div class="personal-info__right">
				<div class="personal-info__content">


					<!-- name -->
					<div class="personal-info__item personal-info__item--name">
						<span class="personal-info__item-text">Жарова Алла Викторовна</span>
					</div>
					<div class="personal-info__item personal-info__item--job">
						<span class="personal-info__item-text">Директор</span>
					</div>


					<!-- main -->
					<div class="personal-info__item personal-info__item--location">
						<i class="fa fa-map-marker personal-info__item-icon" aria-hidden="true"></i>
						<span class="personal-info__item-text">
							Корпус "Цл", ауд. Цл-209, пр.Мира, 82, г.Красноярск (режим работы: с понедельника по пятницу с 11:00 до 18:00)
						</span>
					</div>

					<!-- Вариант размертки если требуется указать более одно телефона. 
						Если один телефон не должен быть кликабельным, например внутренний, нужно убрать ссылку -->
						<div class="personal-info__item personal-info__item--phone">
							<i class="fa fa-phone personal-info__item-icon" aria-hidden="true"></i>
							<a class="personal-info__item-link" href="tel:+73912278949">	
								<span class="personal-info__item-text">+7(391) 227-89-49</span>
							</a>
							<span class="personal-info__item-text">Предварительная запись, работает автоответчик (круглосуточно)</span>
						</div>

						<div class="personal-info__item personal-info__item--email">
							<a class="personal-info__item-link" href="mailto:webmail@sibsau.ru">
								<i class="fa fa-at personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">webmail@sibsau.ru</span>
							</a>
						</div>
						<div class="personal-info__item personal-info__item--site">
							<a class="personal-info__item-link" href="#" target="_blank">
								<i class="fa fa-globe personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">website.sibsau.ru</span>
							</a>
						</div>
						<!-- main -->


						<!-- social -->
						<div class="personal-info__item personal-info__item--soc-vk">
							<a class="personal-info__item-link" href="https://vk.com/club148652228" target="_blank">
								<i class="fa fa-vk personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">https://vk.com/club148652228</span>	
							</a>
						</div>
						<div class="personal-info__item personal-info__item--soc-instagram">
							<a class="personal-info__item-link" href="#" target="_blank">
								<i class="fa fa-instagram personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">instagram.com/sibsau</span>
							</a>
						</div>
						<div class="personal-info__item personal-info__item--soc-facebook">
							<a class="personal-info__item-link" href="#" target="_blank">
								<i class="fa fa-facebook personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">facebook.com/sibsau</span>
							</a>
						</div>
						<div class="personal-info__item personal-info__item--soc-twitter">
							<a class="personal-info__item-link" href="#" target="_blank">
								<i class="fa fa-twitter personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">twitter.com/sibsau</span>
							</a>
						</div>
						<!-- social -->

					</div>
				</div>


			</div>
		</div>

		<div class="col-lg-12 col-md-24 col-sm-12 col-xs-24">
			<div class="personal-info">


				<div class="personal-info__left">
					<div class="personal-info__photo-wrap">
						<img class="personal-info__photo-img" src="img/test/KuznetsovAA_IBS.jpg" />
					</div>
				</div>


				<!-- Иконки возможно стоит вещать на before -->
				<div class="personal-info__right">
					<div class="personal-info__content">


						<!-- name -->
						<div class="personal-info__item personal-info__item--name">
							<span class="personal-info__item-text">Жарова Алла Викторовна</span>
						</div>
						<div class="personal-info__item personal-info__item--job">
							<span class="personal-info__item-text">Директор</span>
						</div>


						<!-- main -->
						<div class="personal-info__item personal-info__item--location">
							<i class="fa fa-map-marker personal-info__item-icon" aria-hidden="true"></i>
							<span class="personal-info__item-text">
								Корпус "Цл", ауд. Цл-209, пр.Мира, 82, г.Красноярск (режим работы: с понедельника по пятницу с 11:00 до 18:00)
							</span>
						</div>

					<!-- Вариант размертки если требуется указать более одно телефона. 
						Если один телефон не должен быть кликабельным, например внутренний, нужно убрать ссылку -->
						<div class="personal-info__item personal-info__item--phone">
							<i class="fa fa-phone personal-info__item-icon" aria-hidden="true"></i>
							<a class="personal-info__item-link" href="tel:+73912278949">	
								<span class="personal-info__item-text">+7(391) 227-89-49</span>
							</a>
							<span class="personal-info__item-text">Предварительная запись, работает автоответчик (круглосуточно)</span>
						</div>

						<div class="personal-info__item personal-info__item--email">
							<a class="personal-info__item-link" href="mailto:webmail@sibsau.ru">
								<i class="fa fa-at personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">webmail@sibsau.ru</span>
							</a>
						</div>
						<div class="personal-info__item personal-info__item--site">
							<a class="personal-info__item-link" href="#" target="_blank">
								<i class="fa fa-globe personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">website.sibsau.ru</span>
							</a>
						</div>
						<!-- main -->


						<!-- social -->
						<div class="personal-info__item personal-info__item--soc-vk">
							<a class="personal-info__item-link" href="https://vk.com/club148652228" target="_blank">
								<i class="fa fa-vk personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">https://vk.com/club148652228</span>	
							</a>
						</div>
						<div class="personal-info__item personal-info__item--soc-instagram">
							<a class="personal-info__item-link" href="#" target="_blank">
								<i class="fa fa-instagram personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">instagram.com/sibsau</span>
							</a>
						</div>
						<div class="personal-info__item personal-info__item--soc-facebook">
							<a class="personal-info__item-link" href="#" target="_blank">
								<i class="fa fa-facebook personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">facebook.com/sibsau</span>
							</a>
						</div>
						<div class="personal-info__item personal-info__item--soc-twitter">
							<a class="personal-info__item-link" href="#" target="_blank">
								<i class="fa fa-twitter personal-info__item-icon" aria-hidden="true"></i>
								<span class="personal-info__item-text">twitter.com/sibsau</span>
							</a>
						</div>
						<!-- social -->

					</div>
				</div>


			</div>
		</div>
	</div>