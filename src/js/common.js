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


/**
 * 下方弹出框
 */
$(function(){

	var open = function(content){
		if(typeof content == 'object'){
			content = content.html();
		}
		var maskobj = $('<div class="weui-mask"></div>').appendTo(document.body);
		var conentobj = $('<div class="weui-actionsheet">'+content+'</div>').appendTo(document.body);
		conentobj.addClass('weui-actionsheet_toggle');

		maskobj.addClass('fadein');
		setTimeout(function(){
			$('.weui-mask').removeClass('fadein');
		},200)

		maskobj.on('click',function(event) {
			event.preventDefault();
			conentobj.removeClass('weui-actionsheet_toggle');
			maskobj.addClass('fadeout');
			setTimeout(function(){
				$('.weui-mask').remove();
				$('.weui-actionsheet').remove();
			},200)
		});
	}

	window.actionsheet = {
		open:open
	};
})