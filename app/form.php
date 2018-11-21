<?php include("_head.php") ?>
<?php include("_header.php") ?>
<?php include("_audit-menu-inner.php") ?>

<main>
	<div id="wrap">

		<div class="container">
			<?php include("__breadcrumbs.php") ?>
		</div>


		<div class="container">
			<h2 class="inner-title">Вопрос ректору</h2>
		</div>
		
		<div class="container">
			<div class="row">
				<div class="col-lg-18 col-md-offset-3">


					<form class="form-group" t-att-action="questions" method="post" enctype="multipart/form-data">

						<div class="form-group">
							<i class="fa font-icons-icon fa-user"></i>&amp;nbsp;
							<label for="category">Статус:* </label><br/>
							<select name="category" id="category" required="required">
								<option value="student">Студент</option>
								<option value="teacher">Преподователь</option>
								<option value="personal">Сотрудник</option>
							</select>
						</div>

						<div class="form-group form-group--experience hidden">
							<i class="fa fa-briefcase" aria-hidden="true"></i>
							<label for="experience">Стаж:*</label><br/>
							<input data-toggle="tooltip" data-placement="top" placeholder="Укажите Ваш стаж работы в университете" id="experience" name="experience" class="form-control" cols="50" type="text" />
						</div>

						<div class="form-group form-group--departament hidden">
							<i class="fa font-icons-icon fa-university" aria-hidden="true"></i>&amp;nbsp;
							<label for="learn-departament">Учебное подразделение:*</label><br/>
							<input data-toggle="tooltip" data-placement="top" placeholder="Учебное подразделение" id="learn-departament" name="learn-departament" class="form-control" cols="50" type="text" />
						</div>

						<div class="form-group">
							<i class="fa font-icons-icon fa-edit"></i>&amp;nbsp;
							<label for="question">Ваш вопрос:*</label></label><br/>
							<textarea required="required" rows="7" cols="50" name="question" id="question" class="form-control" data-toggle="tooltip" data-placement="top" placeholder="Вопрос"></textarea>
						</div>

						<input type="hidden" name="csrf_token" t-att-value="request.csrf_token()"/>
						<div class="cent_div" style="margin-top:10px; margin-bottom:20px;">
							<input type="submit" name="ok" class="btn btn-info" value="Отправить"/>
						</div>


					</form>

					<script>
						$(function() {
							$('#category').change(function() {
								console.log($(this).val());

							   if ( $(this).val() == "student" ) {
							   	$('.form-group--experience').addClass('hidden').children('input').removeAttr('required');
							   	$('.form-group--departament').addClass('hidden').children('input').removeAttr('required');
							   } 
							   else if ( $(this).val() == "personal" ) {
							   	$('.form-group--experience').removeClass('hidden').children('input').addAttr('required', required);
							   	$('.form-group--departament').addClass('hidden').children('input').removeAttr('required');
							   }
							   else if ( $(this).val() == "teacher" ) {
							   	$('.form-group--experience').removeClass('hidden').children('input').addAttr('required', required);
							   	$('.form-group--departament').removeClass('hidden').children('input').addAttr('required', required);
							   }
							});
						});
					</script>

				</div>
			</div>
		</div>


	</div>


</main>

<?php include ("_footer.php"); ?>
<?php include ("_end.php"); ?>