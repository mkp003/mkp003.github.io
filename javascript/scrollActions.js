window.onload = function() {
	// Grabbing the navbar 
	var nav = document.getElementById("navbar");
	// Grab the current position of the screen
	var sticky = nav.offsetTop;

	window.onscroll = function(){scrollNavbar()};
	
	// The check the position of the navbar to see if it needs to stay fixed
	function scrollNavbar() {
		if (window.pageYOffset >= sticky) {
			nav.classList.add("stickyNavbar");
		} else {
			nav.classList.remove("stickyNavbar");
		}
	}
}