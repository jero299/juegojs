const canvas = document.getElementById('canvas');
canvas.width = 1024;
canvas.height = 576;
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#76943B';
ctx.fillRect(100, 475, 100, 100);
ctx.fillRect(400, 400, 100, 400)
ctx.fillRect(400, 0, 100, 300)
ctx.fillRect(800, 300, 100, 300)



const image = new Image();
image.src = '/assets/personaje.gif';
image.onload = function() {
    ctx.drawImage(image, 0, 0, 200, 200)
}

