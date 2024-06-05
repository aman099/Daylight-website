function openNav() {
	document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
	document.getElementById("mySidenav").style.display = "none";
}

// Hero Video play on hover
const heroBgVid = document.querySelector(".slideshow span.hero-vid");
const slideshow = document.querySelector(".slideshow");

slideshow.addEventListener("mouseover", () => {
	heroBgVid.style.zIndex = "4";
});
slideshow.addEventListener("mouseleave", () => {
	heroBgVid.style.zIndex = "1";
});

// overlay
const overlay = document.querySelector(".overlay");
const hamburgerIcon = document.querySelector(".flex-column span:last-of-type");
const x = document.querySelector('nav[id="mySidenav"] .closebtn');

hamburgerIcon.addEventListener("click", () => {
	overlay.classList.add("active");
});
x.addEventListener("click", () => {
	overlay.classList.remove("active");
});
