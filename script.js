const bars = document.getElementById("bars-icon");
const menu = document.querySelector(".left-section");
const closeMark = document.getElementById("xmark");
const closedMenuSection = document.querySelector(".main-content")

// after clicking on the bars of left-section it closes and opens
bars.addEventListener("click", () => {
    closedMenuSection.classList.toggle("menu-closed");
});

//after clicking on the xmark of left-section it closes and opend
closeMark.addEventListener("click", () => {
    closedMenuSection.classList.toggle("menu-closed");
});







