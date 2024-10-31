const tetrisPlaygroundTarget = document.querySelector(".tetris-playground")

function drawTetrisPlayground(x, y, target) {

  for (let rowsCount = 0; rowsCount < y; rowsCount++) {
    const row = document.createElement('div')
    row.className = ('row')
    row.dataset['row'] = rowsCount

    for (let cellsCount = 0; cellsCount < x; cellsCount++) {
      const cell = document.createElement('div')
      cell.className = ('cell')
      cell.dataset['cell'] = cellsCount
      row.append(cell)
    }

    tetrisPlaygroundTarget.append(row)

  }
}
drawTetrisPlayground(20, 10, tetrisPlaygroundTarget)

const shapes = {

s:{
  shape: [[0,1,1],
          [1,1,0]],
  color:'lightgreen'
},
z:{
  shape: [[1,1,0],
          [0,1,1]],
  color:'red'
},
t:{
  shape: [[1,1,1],
          [0,1,0]],
  color:'purple'
},
i:{
  shape: [[1],
          [1],
          [1],
          [1]],
  color:'aqua'
},
j:{
  shape: [[0,1],
          [0,1],
          [1,1]],
  color:'blue'
},
l:{
  shape: [[1,0],
          [1,0],
          [1,1]],
  color:'orange'
},
o:{
  shape: [[1,1],
          [1,1]],
  color:'yellow'
}
}

const shapeKeys = Object.keys(shapes)
const shapeKeyIndex = Math.floor(Math.random() * shapeKeys.length)
const shapeKey = shapeKeys[shapeKeyIndex]

// console.log(shapes[shapeKey]);

const currentShape = shapes[shapeKey]

const rowsToColor = currentShape.shape.length
const cellsToColor = currentShape.shape[0].length

console.log(rowsToColor,cellsToColor)

for (let rowIndex = 0; rowIndex < rowsToColor; rowIndex++) {
  const row = tetrisPlaygroundTarget.children[rowIndex];

  for (let cellIndex = 0; cellIndex < cellsToColor; cellIndex++) {
      const cell = row.children[cellIndex];
      if (currentShape.shape[rowIndex][cellIndex]) {
          cell.style.backgroundColor = currentShape.color;
      }
  }
}

console.log()