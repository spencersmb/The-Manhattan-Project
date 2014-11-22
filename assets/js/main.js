jQuery(document).ready(function($){

	var desktopLarge = 1170;

	function windowWidth(){

		var windowWidth = $(window).width(),
			resizeWidth;

		$(window).resize(function() {
			resizeWidth = $(window).width();
		//console.log("resize" + wi);
		});

		if( resizeWidth || windowWidth >= desktopLarge){
			console.log('desktop Large');
		} else {
			console.log('desktop not Large');
		}
	}
	
	//console.log("on load " + windowWidth);

	var innerWidth = $(window).innerWidth();
	console.log("inner width2 " + innerWidth);
	var desktop = windowWidth();
	console.log(desktop);
	
});