$(function(){

	$('#mp-carousel').carousel({ 
		interval: false, 
		pause: false 
	}); 

	$("#mp-carousel").swiperight(function() {  
	   $("#mp-carousel").carousel('prev');  
	}); 

	$("#mp-carousel").swipeleft(function() {  
	   $("#mp-carousel").carousel('next');  
	}); 

	$('.mainNav').click(function(){
		$("#mobile-nav-modal-wrap").animate({"right":"0%"}, 400);
	});
	$('.close_menu').click(function(){
		$("#mobile-nav-modal-wrap").animate({"right":"-100%"}, 400);
	});


});
