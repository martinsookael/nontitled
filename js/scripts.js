

	// move the clouds
	// declare variables
	var scrollSpeed = 110;       // Speed in milliseconds
	var step = 1;               // How many pixels to move per step
	var current = 0;            // The current pixel row
	var imageHeight = 2400;     // Background image height
	var headerHeight = 1200;     // How tall the header is.
	
	//The pixel row where to start a new loop
	var restartPosition = -(imageHeight - headerHeight);
	
	function scrollBg(){
		
		//Go to next pixel row.
		current -= step;
		
		//If at the end of the image, then go to the top.
		if (current == restartPosition){
				current = 0;
		}
		
		//Set the CSS of the header.
		$('#clouds').css("background-position",""+current+"px 0");
		
	}
	
	//Calls the scrolling function repeatedly
	var init = setInterval("scrollBg()", scrollSpeed);

	 
		// FB like button
		(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=447481895288765";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));