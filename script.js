function colorSwitch(e) {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}


const grid = document.querySelector("#grid")
for (i = 0; i <= 16*16; i++) {
    grid.appendChild(document.createElement('div'));
}
const gridCells = document.querySelectorAll("#grid>div");
gridCells.forEach(cell => cell.addEventListener('mouseover', colorSwitch));



