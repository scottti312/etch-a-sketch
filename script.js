var container = document.querySelector("#container");
for (i = 0; i < 16 * 16; i++) {
  var cell = document.createElement("div");
  // cell.innerHTML = "#-" + i;
  cell.setAttribute('style', 'height: 100%; width: 100%; border: 1px solid black;');
  cell.classList.add('cell');
  cell.classList.add('cell-' + i);
  container.appendChild(cell);
}


var cells = document.querySelectorAll(".cell");
for (const cell of cells) {
  cell.addEventListener('mouseover', () => {
    cell.setAttribute('style', 'background-color: black');
  });
}
