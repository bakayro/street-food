var lazyLoadInstance = new LazyLoad({ }); 

$(document).ready( function(){

	new WOW().init();
	
  $('.header-icon li[data-tooltip]').hover(
    function(){
      var tooltip = $('.header-icon li')+$(this).data('data-tooltip');
      $(this).append('<span class="tooltip">test</span>');
    },
    function(){
      $(this).find('.tooltip').remove();
    }
  );
});

$(document).ready(function() {
	/*
	$('.menu ul li a').click(function () {
		$(this).toggleClass('active');
	});
	*/
	$('.header-icon a').click(function () {
		$('.header-icon a').remoweClass('active');
		$(this).toggleClass('active');
	});
	
	$('.burger').click(function () {
		$('.mobile-menu').toggleClass('show-menu');
	});

	$('.basket-btn').click(function () {
		$(this).toggleClass('added-to-basket');
		$('.basket-count').show();
	});

	/* CHANGE VALUE OF INPUT */
	/*
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	*/
});

/* CATEGORY */

$(function() {
	
	let selectedClass = "";
	
	$(".filter-category").click(function() {

		selectedClass = $(this).attr("data-rel");
		
		$(this).siblings().removeClass("category-selected");
		$(this).addClass("category-selected");
		$("#category").fadeTo(300, 0);
		$("#category .card").not("." + selectedClass).fadeOut();
		
		setTimeout(function() {
	  
			$("." + selectedClass).fadeIn();
			$("#category").fadeTo(300, 1);
		}, 600);
	});
	
});