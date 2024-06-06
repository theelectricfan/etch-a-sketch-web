let gridContainer = document.querySelector(".container");
function createGrid(rows, cols) {
	gridContainer.innerHTML = "";
	for (let i = 0; i < rows; i++) {
		let row = document.createElement("div");
		gridContainer.appendChild(row);
		row.classList.add("row");
		for (let j = 0; j < cols; j++) {
			let square = document.createElement("div");
			row.appendChild(square);
			square.classList.add("square");
			console.log(`${i} ${j}`);
		}
	}
	let squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		square.style.height = 960 / rows + "px";
		square.style.width = 960 / cols + "px";
	});
}

createGrid(16, 16);
function changeColour(e) {
	if (e.target.classList.contains("square"))
		e.target.style.backgroundColor = "black";
}

gridContainer.addEventListener("mouseover", changeColour);

let gridSizeButton = document.querySelector(".grid-size-button");

gridSizeButton.addEventListener("click", () => {
    let rows=101;
    let cols=101;
	do {
		rows = prompt("Enter number of rows (<100)");
	} while (rows > 100);
	do {
		cols = prompt("Enter number of columns (<100)");
	} while (cols > 100);
	createGrid(rows, cols);
});
