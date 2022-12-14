const canvas = document.getElementById('myCanvas');
canvas.width = 200;

const canvasContext = canvas.getContext('2d');
const car = new Car(100, 100, 30, 50);
car.draw(canvasContext);

animate();

function animate() {
  car.update();
  canvas.height = window.innerHeight;
  car.draw(canvasContext);
  requestAnimationFrame(animate);
}
