const canvas = document.getElementById('canvas');
canvas.width = 1024;
canvas.height = 576;
const ctx = canvas.getContext('2d');


// Framerate y posicion
let y = 0;
let x = 0;
function animate () {
    window.requestAnimationFrame(animate);
    // console.log("Hello")
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(x,y,100,100);
    checkCollision();
}

// Colisiones -- Es - 100 porque el rectangulo es de 100x100
function checkCollision() {
    if (y > canvas.height - 100) {
        y = canvas.height - 100;
    }
    y += 13 ;
}



animate();

