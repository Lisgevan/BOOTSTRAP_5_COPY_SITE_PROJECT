"use strict";

//Active link script
function changeActive(id, clss) {
	let allLinks = document.querySelectorAll(".active");
	let clickedClass = document.getElementById(id).classList; //

	// Remove active state
	allLinks.forEach((item) => {
		let allClasses = item.classList;
		if (allClasses != "carousel-item active") {
			allClasses.forEach((item) => {
				if (item == "active") {
					allClasses.remove(item);
				}
			});
		}
	});

	// Add active state to dropdown
	if ((clickedClass = "dropdown-item")) {
		let gonios = document.getElementById(id).parentElement.parentElement.parentElement.firstElementChild.classList;
		console.log(gonios);
		console.dir(gonios);
		gonios.value = `${gonios} active`;
	}

	// Add avtive state to clicked
	document.querySelectorAll(".nav-link").classList = clss;
	document.getElementById(id).classList = `${clss} active`;
}
//Active link script end
