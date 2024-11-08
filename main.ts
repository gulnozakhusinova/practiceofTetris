import { localShapes, Shape } from './shapes.js'


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
const shapeKey = shapeKeys[shapeKeyIndex];

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





// const tetrisPlaygroundTarget = document.querySelector<HTMLDivElement>(".tetris-playground")

// function drawTetrisPlayground(x:number, y:number, target?: HTMLDivElement | null) {

//   for (let rowsCount = 0; rowsCount < y; rowsCount++) {
//     const row = document.createElement('div')
//     row.className = ('row')
//     row.dataset['row'] = rowsCount

//     for (let cellsCount = 0; cellsCount < x; cellsCount++) {
//       const cell = document.createElement('div')
//       cell.className = ('cell')
//       cell.dataset['cell'] = cellsCount
//       row.append(cell)
//     }

//     tetrisPlaygroundTarget?.append(row)

//   }
// }
// drawTetrisPlayground(20, 10, tetrisPlaygroundTarget)


// const shapeKeys = Object.keys(shapes)
// const shapeKeyIndex = Math.floor(Math.random() * shapeKeys.length)
// const shapeKey = shapeKeys[shapeKeyIndex]

// // console.log(shapes[shapeKey]);

// const currentShape = shapes[shapeKey]

// const rowsToColor = currentShape.shape.length
// const cellsToColor = currentShape.shape[0].length

// console.log(rowsToColor, cellsToColor)




// ///

// function renderShape() {
//   const rowsToColor = currentShape.shape.length
//   const cellsToColor = currentShape.shape[0].length

//   for (let rowIndex = 0; rowIndex < rowsToColor; rowIndex++) {
//     const row = tetrisPlaygroundTarget.children[rowIndex]

//     for (let cellIndex = 0; cellIndex < cellsToColor; cellIndex++) {
//       const cell = row.children[cellIndex]
//       if (currentShape.shape[rowIndex][cellIndex]) {
//         cell.style.backgroundColor = currentShape.color
//       }
//     }
//   }
// }


// // [[1, 0], [1, 0],  [1, 1]]
// function rotateShape(shape) {
//   if (shape.length === 2 && shape[0].length === 2) return shape
//   console.log(shape, 'shape');

//   const rotatedShape = []

//   for (let rowsCount = 0; rowsCount < shape[0].length; rowsCount++) {
//     const row = []
//     rotatedShape.push(row)
//   }
//   console.log(rotatedShape, 'rotatedShape before 2 for')

//   for (let i = shape.length - 1, k = 0; i >= 0; i--, k++) {
//     for (let j = 0; j < shape[0].length; j++) {
//       rotatedShape[j][k] = shape[i][j]
//     }
//   }
//   console.log(rotatedShape, 'rotatedShape');

//   return rotatedShape
// }



// function removePreviousShape() {
//   const rows = tetrisPlaygroundTarget.children;

//   for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
//     const row = rows[rowIndex];

//     for (let cellIndex = 0; cellIndex < row.children.length; cellIndex++) {
//       const cell = row.children[cellIndex];

//       cell.style.backgroundColor = "";
//     }
//   }
// }


// renderShape()

// document.addEventListener('keydown', (e) => {
//   if (e.code === 'Space') {
//     currentShape.shape = rotateShape(currentShape.shape)
//     removePreviousShape()
//     renderShape()
//   }
// })