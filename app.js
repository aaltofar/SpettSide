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

const motionOff = {
	waveSpeed: 0,
};

const motionOn = {
	waveSpeed: 0.8,
	color: 0xc0c0c,
};

let effect = VANTA.WAVES({
	el: "#vanta-bg",
	mouseControls: false,
	touchControls: false,
	gyroControls: false,
	minHeight: 200.0,
	minWidth: 200.0,
	scale: 1.0,
	scaleMobile: 1.0,
	color: 0xc0c0c,
	shininess: 0.0,
	waveHeight: 22.0,
	waveSpeed: 0.8,
	zoom: 1.0,
});

function motionSwitch() {
	if (motionTrigger) {
		document.getElementById("reduserBevegelighet").innerHTML = "Skru på bevegelighet";
		effect.setOptions(motionOff);
		hiddenElements.forEach((el) => el.classList.add("show"));
	} else {
		document.getElementById("reduserBevegelighet").innerHTML = "Reduser bevegelighet";
		effect.setOptions(motionOn);
		hiddenElements.forEach((el) => el.classList.remove("show"));
		hiddenElements[0].classList.add("show");
	}

	motionTrigger = !motionTrigger;
}

function goToElement(element) {
	document.getElementById(element).scrollIntoView();
}
