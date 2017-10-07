$(document).ready(function () {
	
	//Slow scroll from menu-item to current section
	$(".nav__item").on("click","a", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 700);
	});
	
	
})