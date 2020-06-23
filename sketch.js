let imagemCenario;
let imagemPersonagem;
let musica;
let personagem;

function preload() {
  imagemCenario = loadImage('./images/floresta.png')
  imagemPersonagem = loadImage('./images/correndo.png')
  musica = loadSound('./sounds/trilha_jogo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 2);
  personagem = new Personagem(imagemPersonagem)
  musica.loop()
  frameRate(40)
}

function draw() {
  cenario.exibe()
  cenario.move()
  personagem.exibe()
  
}

