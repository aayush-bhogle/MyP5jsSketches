img = 1;

function preload() {
  img = loadImage("DoughnutTexture.jpg");
}
function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(0);

  translate(30, 0, 0);
  push();
  //rotateZ(frameCount * 0.03);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  texture(img);

  noStroke();
  torus(80, 45);

  pop();
}
