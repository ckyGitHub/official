var Cover = $('.g-cover');

$(document).on('tap','.u-show-hide-btn',function(){
	var LeftNav = $('.g-left-nav');
	var IsShow = LeftNav.data('show');
	if(IsShow == 0){
		LeftNav.attr('data-show',1).addClass('show');
		var Height = $(window).height() + $(window).scrollTop();
		console.log(Height);
		Cover.css('height',Height).show();
	}else{
		LeftNav.attr('data-show',0).removeClass('show');
		Cover.hide();
	}
});

Cover.click(function(){
	$('.g-left-nav').attr('data-show',0).removeClass('show');
	$(this).hide();
});

$(".menu>li a").click(function(){
	var secondMenu = $(this).siblings('ul');
	var parentLi = $(this).parents('li');
	var isShow = secondMenu.css('display');
	if(isShow=="none"){
		secondMenu.show();
		parentLi.addClass('menu-active');
	}else if(isShow=="block"){
		secondMenu.hide();
		parentLi.removeClass('menu-active');
	}
});

		