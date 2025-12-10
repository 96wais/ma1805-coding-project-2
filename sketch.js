let page = 1; 
let font;
let scareSound; // This is the scaery sound that plays on  all pages
let flagImg; // image of kashmir flag

function preload() {
  // The font used on all pages
  font = loadFont('whoaskssatan.ttf');

  flagImg = loadImage('kashmir.png');
  



  scareSound = new Audio('horror-rumbling-threat-253850.mp3');
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); // black background for all pages

  if (page === 1) {
    // PAGE 1 – title
    drawBloodGradient();
    drawTitle();
  } else if (page === 2) {
    // PAGE 2 – scary freedom text
    page2();
  } else if (page === 3) {
    // PAGE 3 – kashmir flag with bloody hands to indicate struggle and freedom
    page3();
  } else if (page === 4) {
    // PAGE 4 – something random
    drawBloodGradient();
    page4();
  }

 
}

// Page 1
function drawTitle() {
  textFont(font);
  textSize(50);
  fill('darkred');
  text("The Silence Of Kashmir", width / 2, height / 2);
//subheading 
textSize(24);
fill('white');
text("A hidden country with a silent story", width / 2, height / 2 + 40);

  // subtitle
textSize(18);
fill('white');
text("Click to continue...", width / 2, height / 2 + 60);
    }








// Page 2
function page2() {
  drawBloodGradient();

  textFont(font);
  textSize(48);
  fill('red');

  // glitch affect for the text
  let dx = random(-3, 3);
  let dy = random(-3, 3);

  push();
  translate(width / 2 + dx, height / 2 + dy);
  text("YOU WILL NEVER", 0, -30);
  text("GET FREEDOM", 0, 30);
  pop();

  //some instructtion 
  textSize(22);
  fill(255,200); //white color
  text("move your cursour around", width / 2, height /2 + 90);



  // flicking white overlay to make it scary 
  if (random() < 0.45) {
    push();
    fill (255, 255, 255, 40);
    rect(0, 0, width, height);
    pop();

    // scary eyes 
    drawEye(width / 2 - 150, height / 2 - 80, 60); // left eye
    
    drawEye(width / 2 + 150, height / 2 - 80, 60); // right eye 
      function drawEye(x, y, size) {
  push();
  noStroke();

  // white of the eye
  
  fill(255);
  ellipse(x, y, size, size * 0.75);

  // tbis is where the pupil follows the mouse
  let dx = constrain(mouseX - x, -size * 0.15, size * 0.15);
  let dy = constrain(mouseY - y, -size * 0.15, size * 0.15);

  fill(0);
   ellipse(x + dx, y + dy, size * 0.35);



  // small reflection
  fill(255, 80);
  ellipse(x + dx - 5, y + dy - 5, size * 0.12);
 // cool blood drips
  stroke(100, 0, 0);     
  strokeWeight(3);

  // drips falling from the bottom of the eye
  line(x - size * 0.15, y + size * 0.4, x - size * 0.15, y + size * 0.65);
  line(x + size * 0.15, y + size * 0.4, x + size * 0.15, y + size * 0.72);
  pop();
}
 



  }
  


}
// page 3
function page3() {
  drawBloodGradient();
  if (flagImg) {
    push();
    imageMode(CENTER);
    
    tint(255, 150); // makes the image slightly transparent
    image (flagImg, width / 2, height / 2, 400, 300);
    noTint();
    pop();
  
//i was making bloody hands here and they came out wierd
    function drawBloodyHand(x, y, s = 1, flip = false) {
    push();
    translate(x, y);

    scale(s * (flip ? -1 : 1), s);
    noStroke();
    fill(150, 0, 0, 230);
    // palm 
    ellipse(0, 0, 60, 80);
    // fingers
    const fingerWidth = 18;
    for (let i = -2; i <= 2; i++) {
        ellipse( i * fingerWidth, -30, fingerWidth, 50);
    }
    // thubm
    ellipse(-40, -15, 25, 45);

    //wrsit
    rectMode(CENTER);
    rect(0, 50, 26, 40, 10);
    // blood drips
    stroke(120, 0, 0, 230);
    strokeWeight(4);
    line(-15, 70, -15, 90);
    line(0, 70, 0, 95);
    noStroke();
    pop();
  }



  

  {

  // bloody hands on top the flag 
  // left hand
  drawBloodyHand(width / 2 - 120, height /2 - 20, 1.1, false)  ;
  // right hand
  drawBloodyHand (width / 2 + 120, height /2 - 20, 1.1, true) ;
  }
   textFont(font);
    textAlign(CENTER, CENTER);
    textSize(32);
   fill(255, 255, 255, 230);
    text("ITS JUST A DREAMMMMM...", width / 2, height * 0.85);
    
  }
}

// blood gradient background
function drawBloodGradient() {
  for (let y = 0; y < height; y++) {
    let r = map(y, 0, height, 120, 40);
    let g = 0;
    let b = map(y, 0, height, 40, 10);
    stroke(r, g, b);
    line(0, y, width, y);
  }
}

// mouse click to go to other pages 
function mouseClicked() {
  page++;

  // plays a scary sound when entering page 2
  if (page === 2 && scareSound) {
    scareSound.currentTime = 0;
    scareSound.play().catch(() => {});
  }

  // loop pages 1–4
  if (page > 4) {
    page = 1;
  }
}




//page 4
function page4() {
drawBloodGradient(); //keeping things simple in this page 
textFont(font);
textAlign(CENTER, CENTER);
textSize(18);
fill(255);
  fill(255);

  let lines = [
    "SPEAK ABOUT KASHMIR",
    "A SILENCE THAT HAUNTS",
    "STORIES THAT WERE NEVER TOLD",
    "SOME PEOPLE NEVER FOUND AN ENDING",
    "EVERY SOUL LURKING IN THE SHADOWS OF KASHMIR",
    "NOT ALL SECRETS ARE MEANT TO SLEEP"



  ];

for (let i = 0; i < lines.length; i++) {
  let x = random(50, width - 50)
  let y = random(50, height -50)
    fill(255, 200); //brightness added
    text(lines[i], x, y);
}
}
