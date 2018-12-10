/*	window.load is used instead of document.ready
	when height calculations are needed. This is
	for the sake of webkit-based browsers */


jQuery(window).load(function() {
	
	// define window position and scroll tracking variables
	var windowHeight, windowScrollPosTop, windowScrollPosBottom = 0;
	
	// calculate window position and scroll tracking variables
	function calcScrollValues() {
		windowHeight = jQuery(window).height();
		windowScrollPosTop = jQuery(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
	} // end calcScrollValues
	
	// create revealOnScroll method
	jQuery.fn.revealOnScroll = function(direction, speed) {
		return this.each(function() {
			
			var objectOffset = jQuery(this).offset();
			var objectOffsetTop = objectOffset.top;
			
			// only hide and offset elements once
			if (!jQuery(this).hasClass("hidden")) {
				
				// if argument is "right"
				if (direction == "right") {
					jQuery(this).css({
						"opacity"	: 0,
						"right"		: "700px",
						"position"	: "relative"
					});
				// if argument is "left"
				} else {
					jQuery(this).css({
						"opacity"	: 0,
						"right"		: "-700px",
						"position"	: "relative"
					});
					
				} // end if argument is right/left check
				
				jQuery(this).addClass("hidden");	
			} // end only hide and offset elements once logic
			
			// only reveal the element once
			if (!jQuery(this).hasClass("animation-complete")) {
				
				// if the page has been scrolled far enough to reveal the element
				if (windowScrollPosBottom > objectOffsetTop) {
					jQuery(this).animate({"opacity" : 1, "right" : 0}, speed).addClass("animation-complete");
				} // end if the page has scrolled enough check

			} // end only reveal the element once
			
		});
	} // end revealOnScroll function

	// reveal commands
	function revealCommands() {
		//jQuery("img:nth-of-type(1)").revealOnScroll("right", 800);
		//jQuery("img:nth-of-type(2)").revealOnScroll("left", 400);
		//jQuery("img:nth-of-type(3)").revealOnScroll("right", 1200);
		//jQuery("ul li:even").revealOnScroll("left", 800);
		//jQuery("ul li:odd").revealOnScroll("right", 800);
		//jQuery(".sidebar").revealOnScroll("left", 1500);
        $(".sidebar").revealOnScroll("right" , 2000);
        $(".example-photo").revealOnScroll("left" , 2000);
        $(".example-photo-2").revealOnScroll("right" , 2000);
        $("ul li").revealOnScroll("",2000);
        
	} // end reveal commands
	
	// run the following on initial page load
	calcScrollValues();
	revealCommands();
	
	// run the following on every scroll event
	jQuery(window).scroll(function() {
		calcScrollValues()
		revealCommands();
	}); // end on scroll
	
});