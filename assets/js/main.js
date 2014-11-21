jQuery(document).ready(function($){

	var desktopLarge = 1170;

	var windowWidth = $(window).width();
	console.log("on load " + windowWidth);

	var innerWidth = $(window).innerWidth();
	console.log("inner width2 " + innerWidth);

	$(window).resize(function() {
		var wi = $(window).width();
		console.log("resize" + wi);
	});
});