const gridContainer = document.querySelector("#grid-container");
createCanvas();
etch();

//creates a 16x16 grid
function createCanvas() {
	for (let i = 0; i < 256; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item")
		gridContainer.appendChild(gridItem);
	};
};

//adds event listeners on all grid items to change color
function etch() {
	const gridItems = document.getElementsByClassName("grid-item");
	const penColor = document.getElementById("pen-color");

	for (let i = 0; i < gridItems.length; i++) {
	gridItems[i].addEventListener("mousemove", function(event) {
		event.target.style.backgroundColor = penColor.value;
		});
	};
};

//clears the Canvas
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function() {
	gridContainer.innerHTML = "";
	createCanvas();
	etch();
});


/*
Still need to set up grid customization and better hover/drawing and CSS styling
https://levelup.gitconnected.com/build-an-etch-a-sketch-knock-off-with-plain-js-css-and-html-9ab9e104b43f
*/