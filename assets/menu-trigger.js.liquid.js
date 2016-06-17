jQuery(document).ready(function($){

	// open menu
	$('.menu-trigger').on('click', function(event){
		event.preventDefault();
		$('#main-nav').addClass('is-visible');
	});
	
	// close menu
	$('.close-menu').on('click', function(event){
		event.preventDefault();
		$('#main-nav').removeClass('is-visible');
	});

});