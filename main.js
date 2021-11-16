var image = new Image()
var imageData

window.drawOriginal = (event) => {
  var reader = new FileReader()
  var original = document.getElementById('original')

  reader.onload = function() {
    original.src = reader.result
  }

  reader.readAsDataURL(event.target.files[0])

  document.getElementById('original').onload = function()  {
    image.src = original.src

    var canvas = document.getElementById('original-canvas')
    canvas.width = image.width
    canvas.height = image.height

    var ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0)
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  }
}

window.transform = (type) => {
  var newCanvas = document.getElementById('new-canvas')
  newCanvas.width = image.width
  newCanvas.height = image.height

  var ctx = newCanvas.getContext('2d')

  var pixels = imageData.data.slice()
  var transformedPixels = transformations[type](pixels)

  var newImage = new ImageData(newCanvas.width, newCanvas.height)
  newImage.data.set(transformedPixels)

  ctx.putImageData(newImage, 0, 0)

  document.getElementById('type').innerHTML = type
}
