const isBlack = (color) => color < 255
const isEdge = (newMatrix, x, y) => {
  var NO = newMatrix[x-1][y-1][0];
  var N = newMatrix[x][y-1][0];
  var NE = newMatrix[x+1][y-1][0];
  var O = newMatrix[x-1][y][0];
  var L = newMatrix[x+1][y][0];
  var SO = newMatrix[x-1][y+1][0];
  var S = newMatrix[x][y+1][0];
  var SE = newMatrix[x+1][y+1][0];

  let vizinhos = isBlack(NO) + isBlack(N) + isBlack(NE) + isBlack(O) + isBlack(L) + isBlack(SO) + isBlack(S) + isBlack(SE);

  if (vizinhos < 2 || vizinhos > 6) {
    return false;
  }

  let conectividade = 0;

  if (!isBlack(N) && isBlack(NE)) {
    conectividade++;
  }

  if (!isBlack(NE) && isBlack(L)) {
    conectividade++;
  }

  if (!isBlack(L) && isBlack(SE)) {
    conectividade++;
  }

  if (!isBlack(SE) && isBlack(S)) {
    conectividade++;
  }

  if (!isBlack(S) && isBlack(SO)) {
    conectividade++;
  }

  if (!isBlack(SO) && isBlack(O)) {
    conectividade++;
  }

  if (!isBlack(O) && isBlack(NO)) {
    conectividade++;
  }

  if (!isBlack(NO) && isBlack(N)) {
    conectividade++;
  }

  if (conectividade == 1) {
    return true;
  } else {
    return false;
  }
}

var transformations = {}

transformations.holt = (pixels) => {
  var matrix = _
    .chain(pixels)
    .chunk(4)
    .chunk(image.width)
    .value()

  var newMatrix = _.cloneDeep(matrix)

  var removeList = []
  var noPixelsDeleted = false

  while (noPixelsDeleted == false) {
    noPixelsDeleted = true
    console.log('Iteração')

    for (let y = 1; y < image.height-1; y++) {
      for (let x = 1; x < image.width-1; x++) {
        let color = newMatrix[x][y][0]

        if (isBlack(color)) {
          let L = newMatrix[x+1][y][0]
          let S = newMatrix[x][y+1][0]
          let N = newMatrix[x][y-1][0]
          let O = newMatrix[x-1][y][0]

          if ((!isEdge(newMatrix, x, y) || (isBlack(L) && isBlack(S) && (isBlack(N) || isBlack(O)))) == false) {
            noPixelsDeleted = false
            removeList.push({ 'x': x, 'y': y })
          }
        }
      }
    }

    // Remove pixels
    console.log(removeList.length)
    removeList.forEach((pix) => {
      newMatrix[pix.x][pix.y] = [255, 255, 255, 255]
    })
    removeList = []

    for (let y = 1; y < image.height-1; y++) {
      for (let x = 1; x < image.width-1; x++) {
        let color = newMatrix[x][y][0]

        if (isBlack(color)) {
          let L = newMatrix[x+1][y][0]
          let S = newMatrix[x][y+1][0]
          let N = newMatrix[x][y-1][0]
          let O = newMatrix[x-1][y][0]

          if ((!isEdge(newMatrix, x, y) || (isBlack(O) && isBlack(N) && (isBlack(S) || isBlack(L)))) == false) {
            noPixelsDeleted = false
            removeList.push({ 'x': x, 'y': y })
          }
        }
      }
    }

    // Remove pixels
    console.log(removeList.length)
    removeList.forEach((pix) => {
      newMatrix[pix.x][pix.y] = [255, 255, 255, 255]
    })
    removeList = []
  }

  return _.flattenDeep(newMatrix)
}
