jQuery(document).ready(function($){

	var desktopLarge = 1170,
		resizedWidth;

	moveNavigation();

	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	function checkwindowWidth(){

		var windowWidth = $(window).width();

		$(window).resize(function() {
			resizedWidth = $(window).width();
		});

		if( resizedWidth >= desktopLarge || windowWidth >= desktopLarge ){
			return true;
		} else {
			return false;
		}
	};
	
	function moveNavigation(){

		var desktop = checkwindowWidth();

		if ( desktop ) {
        	console.log('desktop');
			// navigation.detach();
			// navigation.insertBefore('.cd-header-buttons');
		} else {
			console.log('mobile');
			// navigation.detach();
			// navigation.insertAfter('.cd-main-content');
		}
	}
	
});