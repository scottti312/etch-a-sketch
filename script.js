let res = 32;

var container = document.querySelector("#container");
container.setAttribute('style', `display: grid;
grid-template-columns: repeat(${res}, ${100 / res}%);
grid-template-rows: repeat(${res}, ${100 / res}%);
position: absolute;
right: 20%;
height: 600px;
width: 600px;
border: 2px solid black;`);


for (i = 0; i < res * res; i++) {
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
