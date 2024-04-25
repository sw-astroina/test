function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  background(0, 0, 100);
  
  let stepSize = 50;
  for(let i = stepSize; i < width; i+=stepSize) {
  
    let hue = map(i, stepSize, width, 0, 360)
    fill(hue, 100, 100);
    
    let y = map(sin(500*frameCount/i), -1, 1, 100, height-100)
    ellipse(i, y, stepSize/2) 
  }
  //text (frameCount, width/2, height/2)
  
  
  
  
}