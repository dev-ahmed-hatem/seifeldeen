const education = document.getElementById("education"),
    extra = document.getElementById("extra"),
    courses = document.getElementById("courses"),
    honors = document.getElementById("honors"),
    educationButton = document.getElementById("education-button"),
    extraButton = document.getElementById("extra-button"),
    coursesButton = document.getElementById("courses-button"),
    honorsButton = document.getElementById("honors-button");

honorsButton.addEventListener("click", () => {
    honors.scrollIntoView();
});

educationButton.addEventListener("click", () => {
    education.scrollIntoView();
});

extraButton.addEventListener("click", () => {
    extra.scrollIntoView();
});

coursesButton.addEventListener("click", () => {
    courses.scrollIntoView();
});
