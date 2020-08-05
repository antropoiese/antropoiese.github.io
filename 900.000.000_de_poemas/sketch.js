let verbos;
let font,
  fontsize = 48;
let y = 100
let keys;
let random;
let tempos = ["Presente", "PreteritoPerfeito", "PreteritoImperfeito", "PreteritoMaisQuePerfeito", "FuturoDoPresente", "FuturoDoPreterito"];
let verb_1, verb_2;
let radio;
let canvasWidth;
let canvasHeight;
let radio_label;
let val;
let ra=0, rb=0, startT, deltaT = 5000, doit = false;

function preload() {
  // Get the most recent earthquake in the database
  let url = 'files/verbos.json';
  verbos = loadJSON(url);
  //font = loadFont('fonts/Orwell.ttf');
  //font = loadFont('fonts/Albertsthal Typewriter.ttf');
  font = loadFont('fonts/Kingthings Trypewriter 2.ttf');

}

function setup() {
  // put setup code here
  //canvasWidth = windowWidth;
  //canvasHeight = windowHeight;
  canvasWidth = 800;
  canvasHeight = 600;

  let cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.position(windowWidth/2-canvasWidth/2, 100);
  keys = Object.keys(verbos)
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  tempo_random_1 = tempos[Math.floor(Math.random() * tempos.length)];
  verbo_random_1 = keys[Math.floor(Math.random() * keys.length)];

  tempo_random_2 = tempos[Math.floor(Math.random() * tempos.length)];
  verbo_random_2 = keys[Math.floor(Math.random() * keys.length)];

  verbo1 = verbos[verbo_random_1][tempo_random_2][0]
  verbo2 = verbos[verbo_random_2][tempo_random_1][2]


  radio_label = createElement("p", "Modo:");
  radio_label.position(15,10);

  radio = createRadio();
  radio.option('automático<br>');
  radio.option('manual');
  radio.style('width', '130px');
  radio.selected("automático");
  radio.position(10,50);
  fill(255, 0, 0);

  startT=millis();

}

function myTimer() {
  if (millis() > startT + deltaT) {
    startT = millis()
    console.log("it is time for it now"); // do what you have to do!
    doit = true;
    rb=0;                  // repeats second circle as loop
  }
  else {
    doit = false;
  }
}


function draw() {
  // put drawing code here
  //background(255, 190, 0)
  background(255,181,42)
  val = radio.value();

  if (val == "manual"){
    fill(0);
    text("Eu", canvasWidth / 2, y);
    text("te", canvasWidth / 2, y+50);
    fill(255, 0, 0);
    text(verbo1, canvasWidth / 2, y+100);

    fill(0);
    text("Você", canvasWidth / 2, y+200);
    text("me", canvasWidth / 2, y+250);
    fill(255, 0, 0);
    text(verbo2, canvasWidth / 2, y+300);

    if (mouseX > canvasWidth / 2 - textWidth(verbo1)/2 && mouseX < canvasWidth / 2 + textWidth(verbo1)/2  && mouseY > y+100 - fontsize/2 && mouseY < y+100 + fontsize/2 || mouseX > canvasWidth / 2 - textWidth(verbo2)/2 && mouseX < canvasWidth / 2 + textWidth(verbo2)/2  && mouseY > y+300 - fontsize/2 && mouseY < y+300 + fontsize/2){
    cursor('pointer');
    }
    else {
      cursor(ARROW);
    }
  }

  if (val == "automático"){
    ra++;
    fill(0);
    text("Eu", canvasWidth / 2, y);
    text("te", canvasWidth / 2, y+50);
    fill(255, 0, 0);
    text(verbo1, canvasWidth / 2, y+100);

    fill(0);
    text("Você", canvasWidth / 2, y+200);
    text("me", canvasWidth / 2, y+250);
    fill(255, 0, 0);
    text(verbo2, canvasWidth / 2, y+300);

    if (doit){
      rb++;
      tempo_random_1 = tempos[Math.floor(Math.random() * tempos.length)];
      verbo_random_1 = keys[Math.floor(Math.random() * keys.length)];
      verbo1 = verbos[verbo_random_1][tempo_random_1][0]

      tempo_random_2 = tempos[Math.floor(Math.random() * tempos.length)];
      verbo_random_2 = keys[Math.floor(Math.random() * keys.length)];
      verbo2 = verbos[verbo_random_2][tempo_random_1][2]

    }
    myTimer();
  }


}
function mouseClicked() {

  if (val == "manual"){
    width_text1 = textWidth(verbo1);
    x1 = canvasWidth / 2;
    y1 = 200;
    if (mouseX > x1 - width_text1/2 && mouseX < x1 + width_text1/2  && mouseY > y1 - fontsize/2 && mouseY < y1 + fontsize/2){
      tempo_random_1 = tempos[Math.floor(Math.random() * tempos.length)];
      verbo_random_1 = keys[Math.floor(Math.random() * keys.length)];
      verbo1 = verbos[verbo_random_1][tempo_random_1][0]
      //v1.html(verbo2);
      //v1.position( windowWidth / 2, y+300);
    }

    width_text2 = textWidth(verbo2);
    x2 = canvasWidth / 2;
    y2 = 400;
    if (mouseX > x2 - width_text2/2 && mouseX < x2 + width_text2/2  && mouseY > y2 - fontsize/2 && mouseY < y2 + fontsize/2){
      tempo_random_2 = tempos[Math.floor(Math.random() * tempos.length)];
      verbo_random_2 = keys[Math.floor(Math.random() * keys.length)];
      verbo2 = verbos[verbo_random_2][tempo_random_2][2]
      //verbo2 = verbos['latir'][tempo_random_2][2]
    }
  }


}
