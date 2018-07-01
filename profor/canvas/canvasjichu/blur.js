var canvasWidth = 500;
var canvasHeight = 500;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();

//剪辑区域
var clippingRegion = {x: 200, y: 200, r: 20}

image.src = "1.png";
//图片加载完成之后执行的方法
image.onload = function (e) {
    initCanvas()
}

function initCanvas() {

    draw(image)
}

function setClippingRegion(clippingRegion) {

    context.beginPath()

    context.arc(200, 200, 110, 0, Math.PI * 2, false) //圆心位置xy，半径，起始位置，0-2PI

    context.clip() //剪辑区域
}

function draw(image, clippingRegion) {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.save()
    setClippingRegion(clippingRegion)
    context.drawImage(image, 0, 0) //起始的xy位置0,0
    context.restore()
}