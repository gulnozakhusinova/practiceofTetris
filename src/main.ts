import { localShapes, Shape, ShapeKey } from './shapes'

const tetrisPlaygroundTarget = document.querySelector<HTMLDivElement>(".tetris-playground");

function drawTetrisPlayground(x: number, y: number, target: HTMLDivElement | null = tetrisPlaygroundTarget) {
  for (let rowsCount = 0; rowsCount < y; rowsCount++) {
    const row = document.createElement("div");
    row.className = "row";
    row.dataset['row'] = rowsCount.toString();

    for (let cellsCount = 0; cellsCount < x; cellsCount++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset['cell'] = cellsCount.toString();
      row.append(cell);
    }

    target?.append(row);
  }
}
drawTetrisPlayground(20, 10);

const shapeKeys = Object.keys(localShapes);
const shapeKeyIndex = Math.floor(Math.random() * shapeKeys.length);
const shapeKey = shapeKeys[shapeKeyIndex] as ShapeKey



const currentShape: Shape = localShapes[shapeKey];

function renderShape() {
  const rowsToColor = currentShape.shape.length;
  const cellsToColor = currentShape.shape[0].length;

  for (let rowIndex = 0; rowIndex < rowsToColor; rowIndex++) {
    const row = tetrisPlaygroundTarget?.children[rowIndex] as HTMLElement;

    for (let cellIndex = 0; cellIndex < cellsToColor; cellIndex++) {
      const cell = row.children[cellIndex] as HTMLElement;
      if (currentShape.shape[rowIndex][cellIndex]) {
        cell.style.backgroundColor = currentShape.color;
      }
    }
  }
}

function rotateShape(shape: number[][]): number[][] {
  if (shape.length === 2 && shape[0].length === 2) return shape;

  const rotatedShape: number[][] = Array.from({ length: shape[0].length }, () => []);

  for (let i = shape.length - 1, k = 0; i >= 0; i--, k++) {
    for (let j = 0; j < shape[0].length; j++) {
      rotatedShape[j][k] = shape[i][j];
    }
  }

  return rotatedShape;
}

function removePreviousShape() {
  const rows = tetrisPlaygroundTarget?.children as HTMLCollectionOf<HTMLElement>;

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];

    for (let cellIndex = 0; cellIndex < row.children.length; cellIndex++) {
      const cell = row.children[cellIndex] as HTMLElement;
      cell.style.backgroundColor = "";
    }
  }
}

renderShape();

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    currentShape.shape = rotateShape(currentShape.shape);
    removePreviousShape();
    renderShape();
  }
});


const playground = []

for (let row = 0; row < 20; row++) {
  const shapeRow = currentShape.shape[row]

  if (shapeRow) {
    const emptyRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const rowCenter = Math.floor(emptyRow.length / 2)
    const centerOfShape = Math.floor(shapeRow.length / 2)
    const placementIndex = rowCenter - centerOfShape
    emptyRow.splice(placementIndex, shapeRow.length, ...shapeRow)
    playground[row] = emptyRow
  } else {
    const emptyRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    playground[row] = emptyRow
  }
}

console.log(playground);





 