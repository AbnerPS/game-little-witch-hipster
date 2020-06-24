let imagemCenario
let imagemPersonagem
let imagemGotinha
let imagemTroll
let imagemGotinhaVoadora
let imagemGameOver
let musica
let somPulo
let personagem
let pontuacao

const inimigos = []

const matrizGotinha = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]

const matrizTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizGotinhaVoadora = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

function preload() {
  imagemCenario = loadImage('./images/cenario.png')
  imagemPersonagem = loadImage('./images/personagem.png')
  imagemGotinha = loadImage('./images/gotinha.png')
  imagemTroll = loadImage('./images/troll.png')
  imagemGotinhaVoadora = loadImage('./images/gotinha-voadora.png')
  imagemGameOver = loadImage('./assets/game-over.png')
  musica = loadSound('./sounds/trilha_jogo.mp3')
  somPulo = loadSound('./sounds/somPulo.mp3')

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 2);

  pontuacao = new Pontuacao()

  personagem = new Personagem(matrizPersonagem,
    imagemPersonagem,
    0,
    20,
    110,
    135,
    220,
    270)

  const inimigoGotinha = new Inimigo(matrizGotinha,
    imagemGotinha,
    width - 52,
    20,
    52,
    52,
    104,
    104)

  const inimigoTroll = new Inimigo(matrizTroll,
    imagemTroll,
    width - 52,
    0,
    200,
    200,
    380,
    380)

  const inimigoVoador = new Inimigo(matrizGotinhaVoadora,
    imagemGotinhaVoadora,
    width - 52,
    200,
    100,
    75,
    200,
    140)

  inimigos.push(inimigoGotinha, inimigoTroll, inimigoVoador)

  // musica.loop()

  frameRate(40)
}

function keyPressed() {
    if(key === 'ArrowUp') {
      personagem.pula()
      somPulo.play()
    }
}

function draw() {
  cenario.exibe()
  cenario.move()
  pontuacao.exibe()
  pontuacao.addPonto()
  personagem.exibe()
  personagem.aplicaGravidade()

  inimigos.forEach(inimigo => {
    inimigo.exibe()
    inimigo.move()

    if(personagem.colidindo(inimigo)){
      image(imagemGameOver, width/2 - 200, height/2)
      noLoop()
      musica.stop()
    }
  })
}

