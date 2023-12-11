const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

let motionTrigger = true;
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function motionSwitch() {
	if (motionTrigger) {
		document.getElementById("reduserBevegelighet").innerHTML = "Skru på bevegelighet";
		hiddenElements.forEach((el) => el.classList.add("show"));
		hiddenElements.forEach((el) => el.classList.remove("hidden"));
	} else {
		document.getElementById("reduserBevegelighet").innerHTML = "Reduser bevegelighet";
		hiddenElements.forEach((el) => el.classList.remove("show"));
		hiddenElements.forEach((el) => el.classList.add("hidden"));
		hiddenElements[0].classList.add("show");
	}

	motionTrigger = !motionTrigger;
}

function goToElement(element) {
	document.getElementById(element).scrollIntoView({
		behavior: "smooth",
	});
}
