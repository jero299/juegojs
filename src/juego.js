const canvas = document.getElementById('canvas');
canvas.width = 1024;
canvas.height = 576;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = '/assets/personaje.gif';
image.onload = function() {
    ctx.drawImage(image, 0, 0, 200, 200)
}

