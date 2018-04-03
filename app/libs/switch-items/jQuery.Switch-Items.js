/*!
 * Copyright 2015 WebDesign Master.
 * (http://webdesign-master.ru)
 * modification
 */

(function($) {
	$.fn.switchItems = function() {
		return this.addClass("switch-items-daddy").append("<div class='tmb-wrap'><div class='tmb-wrap-table'>").append("<div class='image-wrap'>").each(function() {
			var this_wrapper = $(this);
			this_wrapper.find(".switcher-item").appendTo(this_wrapper.find(".image-wrap")).each(function() {
				this_wrapper.find(".tmb-wrap-table").append("<div class='switcher-col'>");
			});
		}).find(".tmb-wrap-table").bind('touchmove', function(event) {
			event.preventDefault();
			var myLocation = event.originalEvent.changedTouches[0];
			var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
			var this_img = $(realTarget).parent(".tmb-wrap-table").closest(".switch-items-daddy").find(".switcher-item");
			var all_thmbs = $(realTarget).parent(".tmb-wrap-table").find(".switcher-col");
			this_img.hide().eq($(realTarget).index()).css("display", "block");
			all_thmbs.removeClass("active");
			$(realTarget).addClass("active");
		}).find(".switcher-col").hover(function() {
			var this_img = $(this).parent(".tmb-wrap-table").closest(".switch-items-daddy").find(".switcher-item");
			var all_thmbs = $(this).parent(".tmb-wrap-table").find(".switcher-col");
			this_img.hide().eq($(this).index()).css("display", "block");
			all_thmbs.removeClass("active");
			$(this).addClass("active");
		}).parent().find(":first").addClass("active");
	};
})(jQuery);