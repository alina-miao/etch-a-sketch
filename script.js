const gridContainer = document.getElementById("grid-container");
const sizeSelector = document.getElementById("size-selector");
const gridItems = document.getElementsByClassName("grid-item");
const penColor = document.getElementById("pen-color");

createCanvas();

//creates a grid for the canvas, default size 16x16
function createCanvas() {
	gridContainer.style.gridTemplateColumns = `repeat(${sizeSelector.value}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${sizeSelector.value}, 1fr)`;
	for (let i = 0; i < sizeSelector.value * sizeSelector.value; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item")
		gridContainer.appendChild(gridItem);
	};
};

//size selector
sizeSelector.addEventListener("change", function() {
	gridContainer.innerHTML = "";
	createCanvas();
	etch();
})

//pen color and drawing
function etch() {
	for (let i = 0; i < gridItems.length; i++) {
	gridItems[i].addEventListener("mousemove", function(event) {
		event.target.style.backgroundColor = penColor.value;
		});
	};
};

const penButton = document.getElementById("pen-button");
penButton.addEventListener("click", function(event) {
	event.target.style.cssText = `background-color: #000000; color: #ffffff;`;
	eraserButton.style.cssText = `background-color: #ffffff; color: #000000;`;
	etch();
})

//eraser function

function erase() {
	for (let i = 0; i < gridItems.length; i++) {
		gridItems[i].addEventListener("mousemove", function(event) {
			event.target.style.backgroundColor = "#ffffff";
		});
	};
};

const eraserButton = document.getElementById("eraser-button");
eraserButton.addEventListener("click", function(event) {
	event.target.style.cssText = `background-color: #000000; color: #ffffff;`;
	penButton.style.cssText = `background-color: #ffffff; color: #000000;`;
	erase();
});

//clears the Canvas
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function() {
	penButton.style.cssText = `background-color: #ffffff; color: #000000;`;
	eraserButton.style.cssText = `background-color: #ffffff; color: #000000;`;
	gridContainer.innerHTML = "";
	createCanvas();
});


/*
Still need to set up better hover/drawing and eraser and css
https://levelup.gitconnected.com/build-an-etch-a-sketch-knock-off-with-plain-js-css-and-html-9ab9e104b43f
*/