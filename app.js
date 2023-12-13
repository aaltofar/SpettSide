const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) entry.target.classList.add("show");
		else entry.target.classList.remove("show");
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function motionSwitch(elem) {
	hiddenElements.forEach((el) => el.classList.add("show"));
	hiddenElements.forEach((el) => el.classList.remove("hidden"));
	elem.remove();
}

function goToElement(element) {
	document.getElementById(element).scrollIntoView({
		behavior: "smooth",
	});
}
