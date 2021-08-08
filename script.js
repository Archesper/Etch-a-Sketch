const grid = document.querySelector("#grid")
fillGrid(16);

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener('click', newGrid)

function colorSwitch(e) {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}

function newGrid() {
    let newGridSize = window.prompt("Enter new grid size: (Max 100)");
    console.log(newGridSize);
    while (isNaN(newGridSize) || parseInt(newGridSize) > 100) {
        newGridSize = window.prompt("Please input a number lower than or equal to:");
    }
    if (newGridSize === null) {return;}
    fillGrid(parseInt(newGridSize));
}

function fillGrid(size) {
    grid.innerHTML = '';
    grid.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);
    grid.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
    for (i = 0; i <= size*size; i++) {
        grid.appendChild(document.createElement('div'));
    }
    const gridCells = document.querySelectorAll("#grid>div");
    gridCells.forEach(cell => cell.addEventListener('mouseover', colorSwitch));
}