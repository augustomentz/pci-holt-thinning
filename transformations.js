
const lodash = _;
const checkIfPixelIsBlack = (color) => color < 255

const isEdge = (matrix, x, y) => {
  var L = matrix[ x + 1][y][0];
  var SO = matrix[x - 1][y + 1][0];
  var S = matrix[x][y + 1][0];
  var SE = matrix[x + 1][y + 1][0];
  var NO = matrix[x - 1][y - 1][0];
  var N = matrix[x][y - 1][0];
  var NE = matrix[x + 1][y - 1][0];
  var O = matrix[x - 1][y][0];

  let neighbors = 
  checkIfPixelIsBlack(NO) + 
  checkIfPixelIsBlack(N) + 
  checkIfPixelIsBlack(NE) + 
  checkIfPixelIsBlack(O) + 
  checkIfPixelIsBlack(L) + 
  checkIfPixelIsBlack(SO) + 
  checkIfPixelIsBlack(S) + 
  checkIfPixelIsBlack(SE);

  if (neighbors < 2 || neighbors > 6) return false;
    
  let connectivity = 0;

  if (!checkIfPixelIsBlack(N) && checkIfPixelIsBlack(NE)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(NE) && checkIfPixelIsBlack(L)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(L) && checkIfPixelIsBlack(SE)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(SE) && checkIfPixelIsBlack(S)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(S) && checkIfPixelIsBlack(SO)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(SO) && checkIfPixelIsBlack(O)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(O) && checkIfPixelIsBlack(NO)) {
    connectivity++;
  }

  if (!checkIfPixelIsBlack(NO) && checkIfPixelIsBlack(N)) {
    connectivity++;
  }

  if (connectivity == 1) {
    return true;
  } else {
    return false;
  }
}

const holt = (image, pixels) => {
  return new Promise((resolve) => {
    var matrix = lodash
      .chain(pixels)
      .chunk(4)
      .chunk(image.width)
      .value()

    var newMatrix = lodash.cloneDeep(matrix)

    var removeList = []
    var noPixelsDeleted = false

    while (noPixelsDeleted == false) {
      noPixelsDeleted = true

      for (let y = 1; y < image.height-1; y++) {
        for (let x = 1; x < image.width-1; x++) {
          let color = newMatrix[x][y][0]

          if (checkIfPixelIsBlack(color)) {
            let L = newMatrix[x+1][y][0]
            let S = newMatrix[x][y+1][0]
            let N = newMatrix[x][y-1][0]
            let O = newMatrix[x-1][y][0]

            if ((!isEdge(newMatrix, x, y) || (checkIfPixelIsBlack(L) && checkIfPixelIsBlack(S) && (checkIfPixelIsBlack(N) || checkIfPixelIsBlack(O)))) == false) {
              noPixelsDeleted = false

              removeList.push({ 'x': x, 'y': y })
            }
          }
        }
      }

      removeList.forEach((pix) => {
        newMatrix[pix.x][pix.y] = [255, 255, 255, 255]
      })
      removeList = []

      for (let y = 1; y < image.height-1; y++) {
        for (let x = 1; x < image.width-1; x++) {
          let color = newMatrix[x][y][0]

          if (checkIfPixelIsBlack(color)) {
            let L = newMatrix[x+1][y][0]
            let S = newMatrix[x][y+1][0]
            let N = newMatrix[x][y-1][0]
            let O = newMatrix[x-1][y][0]

            if ((!isEdge(newMatrix, x, y) || (checkIfPixelIsBlack(O) && checkIfPixelIsBlack(N) && (checkIfPixelIsBlack(S) || checkIfPixelIsBlack(L)))) == false) {
              noPixelsDeleted = false
              removeList.push({ 'x': x, 'y': y })
            }
          }
        }
      }

      removeList.forEach((pix) => {
        newMatrix[pix.x][pix.y] = [255, 255, 255, 255]
      })
      removeList = []
    }

    console.log(lodash.flattenDeep(newMatrix))
    
    resolve(lodash.flattenDeep(newMatrix))
  })
}
