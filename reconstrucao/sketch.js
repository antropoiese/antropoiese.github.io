var palavras = ['bêbado', 'flácido', 'lágrima', 'lógico', 'mágico', 'máquina', 'máximo', 'música', 'náufrago', 'pássaro', 'príncipe', 'pródigo', 'próximo', 'público', 'sábado', 'sólido', 'tímido', 'tráfego', 'último', 'único']
var base = ['Amou daquela vez como se fosse ', 'Beijou sua mulher como se fosse ', 'E cada filho seu como se fosse ', 'E atravessou a rua com seu passo ', 'Subiu a construção como se fosse ', 'Ergueu no patamar quatro paredes ', 'Tijolo com tijolo num desenho ', 'Seus olhos embotados de cimento e ', 'Sentou pra descansar como se fosse ', 'Comeu feijão com arroz como se fosse ', 'Bebeu e soluçou como se fosse ', 'Dançou e gargalhou como se fosse ', 'E tropeçou no céu como se fosse ', 'E flutuou no ar como se fosse ', 'E se acabou no chão feito um pacote ', 'Agonizou no meio do passeio ', 'Morreu na contramão atrapalhando ']
var pos;
var canvasWidth = 420;
var canvasHeight = 420;
let font;

function preload() {
  // Get the most recent earthquake in the database
  font = loadFont('fonts/Kingthings Trypewriter 2.ttf');
  //font = loadFont('fonts/Orwell.ttf');
  //font = loadFont('fonts/Albertsthal Typewriter.ttf');
  }

function setup() {
  // put setup code here
  //createCanvas(windowWidth, windowHeight);
  createCanvas(canvasWidth, canvasHeight);
  background("#ffb52a");
  font = loadFont('fonts/Kingthings Trypewriter 2.ttf');
    //texto();

  div = createDiv("<h2>Quarenta quatrilhões de variações.</h2><br><p>Experimento combinatório com a canção Construção, de Chico Buarque.</p><p>São 20 finais possíveis para 17 versos.</p><p>O resultando totaliza 40.548.366.8029.440.000 variações da canção.</p><p>A cada clique, uma nova recombinação...</p><br><p>Clique para iniciar</p><br><br><br><br><br><br><br><div class='span_div'><span>antropoiese / 2020<br>AntiCopyRight: Todos os direitos dispersos!</span></div>");
  div.position(0, 50)
  div.class("texto");
}

function draw() {
  // put drawing code here
}

function texto(){
  removeElements(); // this will remove the div and p, not canvas
  background("#ffb52a");
  palavras = shuffle(palavras);
  //textFont(font);
  textSize(15);
  textAlign(LEFT);
  fill(0);
  //textStyle(BOLD);

  var y = 20;

  fill(0);
  text(base[0], 10, y);
  fill(255,0,0);
  text(palavras[0], 10+textWidth(base[0]), y);
  y=y+20;

  fill(0);
  text(base[1], 10, y);
  fill(255,0,0);
  text(palavras[1], 10+textWidth(base[1]), y);
  y=y+20;

  fill(0);
  text(base[2], 10, y);
  fill(255,0,0);
  text(palavras[2], 10+textWidth(base[2]), y);
  y=y+20;

  fill(0);
  text(base[3], 10, y);
  fill(255,0,0);
  text(palavras[3], 10+textWidth(base[3]), y);
  y=y+40;


  fill(0);
  text(base[4], 10, y);
  fill(255,0,0);
  text(palavras[4], 10+textWidth(base[4]), y);
  y=y+20;

  fill(0);
  text(base[5], 10, y);
  fill(255,0,0);
  text(palavras[5], 10+textWidth(base[5]), y);
  y=y+20;

  fill(0);
  text(base[6], 10, y);
  fill(255,0,0);
  text(palavras[6], 10+textWidth(base[6]), y);
  y=y+20;

  fill(0);
  text(base[7], 10, y);
  fill(255,0,0);
  text(palavras[7], 10+textWidth(base[7]), y);
  y=y+40;


  fill(0);
  text(base[8], 10, y);
  fill(255,0,0);
  text(palavras[8], 10+textWidth(base[8]), y);
  y=y+20;

  fill(0);
  text(base[9], 10, y);
  fill(255,0,0);
  text(palavras[9], 10+textWidth(base[9]), y);
  y=y+20;

  fill(0);
  text(base[10], 10, y);
  fill(255,0,0);
  text(palavras[10], 10+textWidth(base[10]), y);
  y=y+20;

  fill(0);
  text(base[11], 10, y);
  fill(255,0,0);
  text(palavras[11], 10+textWidth(base[11]), y);
  y=y+40;


  fill(0);
  text(base[12], 10, y);
  fill(255,0,0);
  text(palavras[12], 10+textWidth(base[12]), y);
  y=y+20;

  fill(0);
  text(base[13], 10, y);
  fill(255,0,0);
  text(palavras[13], 10+textWidth(base[13]), y);
  y=y+20;

  fill(0);
  text(base[14], 10, y);
  fill(255,0,0);
  text(palavras[14], 10+textWidth(base[14]), y);
  y=y+20;

  fill(0);
  text(base[15], 10, y);
  fill(255,0,0);
  text(palavras[15], 10+textWidth(base[15]), y);
  y=y+20;

  fill(0);
  text(base[16], 10, y);
  fill(255,0,0);
  text(palavras[16], 10+textWidth(base[16]), y);
  y=y+20;

}


function mouseClicked() {
  texto();
}
