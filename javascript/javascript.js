window.onload = function() {
	
	// Navbar items
	var home = document.getElementById("HomeBtn");
	var about = document.getElementById("AboutBtn");
	var projects = document.getElementById("ProjectsBtn");
	var education = document.getElementById("EducationBtn");
	var contact = document.getElementById("ContactBtn");
	
	// Project images
	var becauseItsThere = document.getElementById("BecauseItsThere");
	var vrad = document.getElementById("V-Rad");
	var gui = document.getElementById("ResearchVR");
	
	// Navbar hover-over Functions
	home.onmouseover = function() {
		home.className = "navbarItemHover";
	}

	education.onmouseover = function() {
		education.className = "navbarItemHover";
	}

	about.onmouseover = function() {
		about.className = "navbarItemHover";
	}
	
	projects.onmouseover = function() {
		projects.className = "navbarItemHover";
	}
	
	contact.onmouseover = function() {
		contact.className = "navbarItemHover";
	}
	
	
	// Navbar hover-off Functions
	education.onmouseout = function() {
		education.className = "navbarItem";
	}

	home.onmouseout = function() {
		home.className = "navbarItem";
	}

	about.onmouseout = function() {
		about.className = "navbarItem";
	}
	
	projects.onmouseout = function() {
		projects.className = "navbarItem";
	}
	
	contact.onmouseout = function() {
		contact.className = "navbarItem";
	}
	
	
	// Image Hover in and outs for projects
	becauseItsThere.onmouseover = function() {
		becauseItsThere.src = "images/BecauseItsThereImageHover.jpg";
	}
	
	becauseItsThere.onmouseout = function() {
		becauseItsThere.src = "images/BecauseItsThereImage.JPG";
	}
	
	vrad.onmouseover = function() {
		vrad.src = "images/371project1Hover.jpg";
	}
	
	vrad.onmouseout = function() {
		vrad.src = "images/371project1.JPG";
	}
	
	gui.onmouseover = function() {
		gui.src = "images/481project1Hover.jpg";
	}
	
	gui.onmouseout = function() {
		gui.src = "images/481project1.JPG";
	}
	
	// Grabbing the navbar 
	var nav = document.getElementById("navbar");
	// Grab the current position of the screen
	var sticky = nav.offsetTop;
	// Grab about section
	var aboutTop = document.getElementById("aboutSection");

	window.onscroll = function(){scrollNavbar()};
	
	// The check the position of the navbar to see if it needs to stay fixed
	function scrollNavbar() {
		if (window.pageYOffset >= sticky) {
			nav.classList.add("stickyNavbar");
			aboutTop.className = "aboutSticky";
		} else {
			nav.classList.remove("stickyNavbar");
			aboutTop.className = "about";
		}
	}
}
