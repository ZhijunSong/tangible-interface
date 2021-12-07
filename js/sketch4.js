let angle = 0;
let atarget = 0;
let atargetoff = -360;
let g = 0;
let gtarget = 0;
let gtl = 0;
let gth = 255;
let size;

function setup() {
	createCanvas(200,200);
	angleMode(DEGREES);
	size = height / 4;
}

function draw() {
	background(0);
	translate((width / 2) - (height / 2), 0);

	let xpos = constrain(mouseX, 0, width);
	atarget = map(xpos, 0, width, -360, 360);
	atarget = (45) * round(atarget / 45);
	angle = lerp(angle, atarget + atargetoff, 0.05);
	gtarget = map(mouseY, 100, height - 100, gtl, gth);
	g = lerp(g, gtarget, 0.02);
	// fill(g);
  let index=0;
  noStroke();
	for (let y = 0; y < height+40; y += 40) {
		for (let x = 0; x < width+40; x += 40) {
      index+=1;

      fill(255 - g);
      arc(x, y,40,40, angle + 0, angle + 45*index);

		}
  }

}
function mousePressed() {
	atargetoff *= -1;
	gtl = 255 - gtl;
	gth = 255 - gth;
}