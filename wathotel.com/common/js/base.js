$(function(){

	var offsetY = -60;
	var offsetY2 = -140;
	var time = 800;

	$('#scroll_link01').click(function() {
		var target = $(this.hash);
		if(!target.length) return;
		var targetY = target.offset().top + offsetY;
		$('html,body').animate({scrollTop: targetY}, time, 'swing');
		window.history.pushState(null, null, this.hash);
		return false;
	});

	var $header = $('#scroll_link01');
	$header.addClass('dsp_fixed');
	$(window).scroll(function() {
		if($(window).scrollTop() > 300) {
			$header.removeClass('dsp_fixed');
		} else {
			$header.addClass('dsp_fixed');
		}
	});

	$('.page_anchor').click(function() {
		var target = $(this.hash);
		if(!target.length) return;
		var targetY = target.offset().top + offsetY2;
		$('html,body').animate({scrollTop: targetY}, time, 'swing');
		window.history.pushState(null, null, this.hash);
		return false;
	});

	var headerHight = 140;
	var url = $(location).attr('href');
	if(url.indexOf("?id=") == -1) {

	} else {
		var url_sp		= url.split("?id=");
		var hash		= '#' + url_sp[url_sp.length - 1];
		var target2		= $(hash);
		var position2	= target2.offset().top - headerHight;
		$("html, body").animate({scrollTop:position2}, 550, "swing");
	}

});
