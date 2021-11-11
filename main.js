const categories = document.getElementById("categories"),
	articles = document.getElementsByClassName("article"),
	backButton = document.getElementById("back-button"),
	literature = document.getElementById("literature"),
	literatureEl = document.getElementById("literature-el"),
	literatureContent = document.getElementById("literature-content"),
	socialMedia = document.getElementById("extra"),
	discover = document.getElementById("discover"),
	placeholder = document.getElementById("placeholder");

discover.addEventListener("click", () => {
	education.scrollIntoView();
});

function isSmall() {
	if (window.innerWidth <= 1083 || window.innerHeight <= 554) {
		mainContainer.classList.add("small");
		placeholder.classList.add("visible");
	} else {
		mainContainer.classList.remove("small");
		placeholder.classList.remove("visible");
	}
}

isSmall();

window.addEventListener("resize", isSmall);

let dataContents = document.querySelectorAll(".act-content");

for (let article = 0; article < articles.length; article++) {
	articles[article].addEventListener("click", () => {
		let dataTitle = articles[article].getAttribute("data-title"),
			currentAct = document.querySelector(`[data-content=${dataTitle}]`);
		for (let act = 0; act < dataContents.length; act++) {
			if (dataContents[act] == currentAct) {
				continue;
			}
			dataContents[act].classList.remove("clicked");
		}
		currentAct.classList.toggle("clicked");
	});
}
