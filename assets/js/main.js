jQuery(document).ready(function($){



//**Check offset of element
//--------------------------------------
	var h1Offset = $('h1').offset().top;
	console.log('offset '+h1Offset);

	var h1height = $('h1').height();
	console.log('height '+h1height);

	var totalh1 = h1height + h1Offset;
	console.log('total '+totalh1);

	var h1parse = parseInt($('h1').css('margin-Top').replace('px', ''));
	//just add + px to add px to the end of the string,
	console.log('h1 parse '+h1parse);
	
//**Check where browser vertical distance
//--------------------------------------

	windowScrollTop();

	function windowScrollTop() {

		var windowTop = $(window).scrollTop();

		$(window).on('scroll', function(){
			var scrollTop = $(window).scrollTop();
			console.log('window on scroll' +scrollTop);
	});
	console.log("window on load" +windowTop);
	};




//**Check browser window size & remove nav
//--------------------------------------
	var nav = $('.nav');

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
			nav.detach();
			nav.insertBefore('#logo');
		} else {
			console.log('mobile');
			nav.detach();
			nav.insertAfter('.container');
		}
		}
	

	//smooth scrolling when clicking on the secondary navigation items
	nav.find('li.go-back a').on('click',function(event){
		event.preventDefault();
		var target = $(this.hash);
		$('body,html').animate({
			'scrollTop': target.offset().top - h1height
		}, 400
		);
	});

});//end jquery


	
