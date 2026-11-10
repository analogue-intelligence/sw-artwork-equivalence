let t = 0;

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 360, 100, 100, 1);
  strokeWeight(1);
}

function draw() {
  background(0);
  t += 0.01;

  let widthHalf = width / 2;

  // Fluid Flow 
  push();
  clip(() => {
    rect(0, 0, widthHalf, height);
  });
  renderGrid(widthHalf / 2, height / 2, "FLUID");
  pop();

  // Mandala
  push();
  translate(widthHalf, 0);
  clip(() => {
    rect(0, 0, widthHalf, height);
  });
  renderGrid(widthHalf / 2, height / 2, "GEOMETRY");
  pop();

  stroke(0, 0, 40);
  line(widthHalf, 0, widthHalf, height);
}

function renderGrid(centerX, centerY, mode) {
  let rows = 12;
  let cols = 12;
  let spacing = 22;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      let dista = dist(i, j, rows / 2, cols / 2);
      let angle = atan2(j - cols / 2, i - rows / 2);
      let wave = sin(dista * 0.8 - t * 2) + cos(angle * 4 + t);

      if (mode === "FLUID") {
        // Continuous spatial offset
        let x = centerX + (i - rows / 2) * spacing + wave * 15;
        let y = centerY + (j - cols / 2) * spacing + wave * 15;
        let radius = map(wave, -2, 2, 4, 28);
        let hueVal = (dista * 15 + t * 50) % 360;

        noFill();
        stroke(hueVal, 70, 90, 0.6);
        circle(x, y, radius);
      } else if (mode === "GEOMETRY") {
        // Polar symmetry & rotation
        let symmetry = 8;
        let radiusOffset = (i * spacing) + wave * 20;

        stroke((dista * 25 + 180) % 360, 80, 100, 0.5);
        noFill();

        for (let s = 0; s < symmetry; s++) {
          let rotAngle = (TWO_PI / symmetry) * s + t * 0.2;
          let px = centerX + cos(rotAngle + angle) * radiusOffset;
          let py = centerY + sin(rotAngle + angle) * radiusOffset;

          push();
          translate(px, py);
          rotate(rotAngle + wave);
          rectMode(CENTER);
          rect(0, 0, wave * 12, wave * 12);
          pop();
        }
      }
    }
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('artwork', 'png');
  }
}