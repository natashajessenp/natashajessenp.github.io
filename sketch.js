function setup() {
  createCanvas(600,400)
}

function draw() {
  background('lightgreen');
//this circle will follow my mouse
  fill("gray");
  ellipse(mouseX, mouseY, 40, 40);

  fill ("blue");
  textSize(32);
  text("happy copenhagen", 50, 100);

}
