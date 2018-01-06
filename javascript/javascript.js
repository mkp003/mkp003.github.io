window.onload = function() {
	var home = document.getElementById("HomeBtn");
	var about = document.getElementById("AboutBtn");
	var projects = document.getElementById("ProjectsBtn");
	var education = document.getElementById("EducationBtn");
	var contact = document.getElementById("ContactBtn");
	
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
}