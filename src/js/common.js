$(function(){
	$(document.body).delegate('.screen_options .screen_option_item', 'click', function(event) {
		var that = $(this);
		var obj = $(this).parents('.screen_options');
		if(obj.attr('type')=='checkbox'){
			if(that.hasClass('active')){
				that.removeClass('active');
			}else{
				that.addClass('active');
			}
		}else{
			$(obj).find('.active').removeClass('active');
			that.addClass('active');
		}
	});
})