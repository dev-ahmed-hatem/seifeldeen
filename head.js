const head = document.getElementById("head");

mainContainer.addEventListener("scroll", () => {
	if (mainContainer.scrollTop >= 400) {
		head.classList.add("sticky-head");
	} else {
		head.classList.remove("sticky-head");
	}
});
