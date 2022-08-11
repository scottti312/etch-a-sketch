function generateGrid(res) {
  let indicator = document.querySelector(".resolution");
  indicator.textContent = `Resolution: ${res} x ${res}`;
  let body = document.querySelector("body");
  let container1 = document.createElement("div");
  container1.setAttribute('id', 'container');
  // let container = document.querySelector("#container");
  container1.setAttribute('style', `display: grid;
  grid-template-columns: repeat(${res}, ${100 / res}%);
  grid-template-rows: repeat(${res}, ${100 / res}%);
  position: absolute;
  right: 60%;
  height: 600px;
  width: 600px;
  border: 2px solid black;`);
  for (i = 0; i < res * res; i++) {
    let cell = document.createElement("div");
    // cell.innerHTML = "#-" + i;
    cell.setAttribute('style', `height: 100%;
    width: 100%;
    border: 1px solid black;`);
    cell.classList.add('cell');
    cell.classList.add('cell-' + i);
    container1.appendChild(cell);
  }
  body.appendChild(container1);
  var cells = document.querySelectorAll(".cell");
  for (const cell of cells) {
    cell.addEventListener('mouseover', () => {
      cell.setAttribute('style', 'background-color: black');
    });
  }
}

function deleteGrid() {
  let html = document.querySelector("body")
  let container = document.querySelector("#container");
  html.removeChild(container);
}

function changeRes() {
  let res = prompt("Enter a new resolution");
  deleteGrid();
  generateGrid(res);
}

generateGrid(16);



