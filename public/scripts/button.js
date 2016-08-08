"use strict";

function toggleDrawerMenu(button, event) {

	event.preventDefault();

	var navDrawer = document.getElementsByClassName("header-nav")[0];

	if (navDrawer.className.indexOf("drawer-active") > -1) {
		navDrawer.className = navDrawer.className.replace(/ drawer-active/i, "");
	} else {
		navDrawer.className += " drawer-active";
	}	
}