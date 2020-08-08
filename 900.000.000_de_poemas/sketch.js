let verbos;
let font,
  fontsize = 48;
let y = 60
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
  canvasWidth = 480;
  canvasHeight = 480;

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

  //tempo_random_1 = "Presente";
  //verbo_random_1 = "declamar";

  verbo1 = verbos[verbo_random_1][tempo_random_1][0]
  verbo2 = verbos[verbo_random_2][tempo_random_2][2]


  radio_label = createElement("p", "Modo:");
  radio_label.position(0,10);

  radio = createRadio();
  radio.option('automático');
  radio.option('manual');
  radio.style('width', '130px');
  radio.class("radios");

  //radio.selected("automático");
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

  if (val != "manual" && val != "automático"){
    textAlign(LEFT);
    div = createDiv("<h2>900 milhões de poemas</h2><p>Poema/experimento de proliferação polissêmica.</p><p>O experimento efetua aleatoriamente a permuta de verbos, alterando os sentidos, implodindo as relações de significado e proliferando as recombinações semânticas.</p><p>São 5.000 verbos conjugados em seus 6 tempos verbais do modo Indicativo.</p><p>30 mil possibilidades por estrofe resultando em <br>900 milhões de variações do poema.</p><p>Há dois modos de funcionamento:</p><p>No modo manual cada verbo é individualmente trocado ao clicar sobre ele.</p><p>No modo autômato os verbos são trocados automaticamente em dado intervalo de tempo.</p><p>Altere o modo no seletor ao lado.</p><br><div class='span_div'><span>antropoiese / 2020<br>AntiCopyRight: Todos os direitos dispersos!</span></div>");
    div.position(windowWidth / 2 - 240, y+30)
    div.class("texto");
    /*
    texto = createElement("h2", "900 milhões de poemas");
    texto.position(windowWidth / 2 - 150, y);
    texto = createElement("p", "Poema/experimento de proliferação polissêmica.");
    texto.position(windowWidth / 2 - 370, y+70);
    texto = createElement("p", "O experimento efetua aleatoriamente a permuta de verbos, alterando os sentidos, <br>implodindo relações de significado e proliferando recombinações semânticas.");
    texto.position(windowWidth / 2 - 370, y+110);
    texto = createElement("p", "São 5.000 verbos conjugados em seus 6 tempos verbais do modo Indicativo.");
    texto.position(windowWidth / 2 - 370, y+180);
    texto = createElement("p", "30 mil possibilidades por estrofe, 900 milhões de possibilidades no total.");
    texto.position(windowWidth / 2 - 370, y+210);
    texto = createElement("p", "Há dois modos de funcionamento:");
    texto.position(windowWidth / 2 - 370, y+260);
    texto = createElement("p", "No modo manual cada verbo é individualmente trocado ao clicar sobre ele.");
    texto.position(windowWidth / 2 - 370, y+290);
    texto = createElement("p", "No modo autômato os verbos são trocados automaticamente em dado intervalo de tempo.");
    texto.position(windowWidth / 2 - 370, y+320);*/
  }

  if (val == "manual"){
    removeElements(); // this will remove the div and p, not canvas
    radio_label = createElement("p", "Modo:");
    radio_label.position(0,10);

    textAlign(CENTER, CENTER);
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
    removeElements(); // this will remove the div and p, not canvas
    radio_label = createElement("p", "Modo:");
    radio_label.position(0,10);

    ra++;
    textAlign(CENTER, CENTER);
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
    if (mouseX > canvasWidth / 2 - textWidth(verbo1)/2 && mouseX < canvasWidth / 2 + textWidth(verbo1)/2  && mouseY > y+100 - fontsize/2 && mouseY < y+100 + fontsize/2){
      tempo_random_1 = tempos[Math.floor(Math.random() * tempos.length)];
      verbo_random_1 = keys[Math.floor(Math.random() * keys.length)];
      verbo1 = verbos[verbo_random_1][tempo_random_1][0]
      //v1.html(verbo2);
      //v1.position( windowWidth / 2, y+300);
    }

    width_text2 = textWidth(verbo2);
    if (mouseX > canvasWidth / 2 - textWidth(verbo2)/2 && mouseX < canvasWidth / 2 + textWidth(verbo2)/2  && mouseY > y+300 - fontsize/2 && mouseY < y+300 + fontsize/2){
      tempo_random_2 = tempos[Math.floor(Math.random() * tempos.length)];
      verbo_random_2 = keys[Math.floor(Math.random() * keys.length)];
      //tempo_random_2 = "Presente";
      verbo2 = verbos[verbo_random_2][tempo_random_2][2]
      //verbo2 = verbos['latir'][tempo_random_2][2]
    }
  }


}
