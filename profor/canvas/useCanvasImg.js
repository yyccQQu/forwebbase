var canvasWidth = 800;
var canvasHeight = 600;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
image.src = "image.jpg";
image.onload = function(e) {
    initCanvas()
}

function initCanvas() {

    draw(image)
}

function draw(image) {  
    context.clearRect(0,0,canvas.width,canvas.height)
    context.save()
    context.drawImage(image, 0, 0)
    context.restore()
}