const targets = document.querySelectorAll(".animated"),
	avatar = document.getElementById("avatar"),
	mainContainer = document.getElementById("main-container");
content = document.getElementById("content");

let scrolling = mainContainer.scrollTop,
	currentScrolling,
	state;

function checkTargets(state) {
	targets.forEach((el, key) => {
		if (state === "down") {
			if (
				mainContainer.clientHeight - el.getBoundingClientRect().y >= 35 &&
				el.getBoundingClientRect().height + el.getBoundingClientRect().y >= 35
			) {
				el.classList.add("visible");
			} else {
				el.classList.remove("visible");
			}
		} else {
			if (
				el.getBoundingClientRect().height + el.getBoundingClientRect().y >=
					35 &&
				el.getBoundingClientRect().y + 35 <= mainContainer.clientHeight
			) {
				el.classList.add("visible");
			} else {
				el.classList.remove("visible");
			}
		}
	});
}

mainContainer.addEventListener("scroll", () => {
	currentScrolling = mainContainer.scrollTop;
	if (currentScrolling > scrolling) {
		state = "down";
	} else {
		state = "up";
	}
	scrolling = currentScrolling;
	checkTargets(state);
});

window.onload = function () {
	avatar.classList.add("visible");
	content.classList.add("visible");
};
