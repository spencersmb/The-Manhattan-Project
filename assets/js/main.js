jQuery(document).ready(function($){

	var desktopLarge = 1170,
	resizeWidth;

	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(checkwindowWidth, 300) : window.requestAnimationFrame(checkwindowWidth);
	});

	var windowWidth = $(window).width();

	function checkwindowWidth(){

		
			var width = $(window).width();
			//console.log("width " + width);
		// $(window).resize(function() {
		// 	resizeWidth = $(window).width();
		// //console.log("resize" + wi);
		// });

		// if( resizeWidth || windowWidth >= desktopLarge){
		// 	console.log('desktop Large');
		// } else {
		// 	console.log('desktop small');
		// }
	};
	
	//console.log("on load " + windowWidth);

	// var innerWidth = $(window).innerWidth();
	// console.log("inner width2 " + innerWidth);
	var desktop = checkwindowWidth();
	console.log("window width" + windowWidth);

	console.log("width" + desktop);

		$(window).resize(function() {
			var wi = $(window).width();
		console.log("resize" + wi);
	});
	
});