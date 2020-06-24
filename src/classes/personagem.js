class Personagem extends Animacao {

  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.velocidade = 10
    this.gravidade = 3
    this.velocidadePulo = 0
    this.variacaoY = variacaoY
    this.yInicial = height - this.altura - this.variacaoY
    this.y = this.yInicial
    this.alturaPulo = -30
    this.pulos = 0
  }

  pula() {
    if(this.pulos < 2){
      this.velocidadePulo = this.alturaPulo
      this.pulos++
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadePulo
    this.velocidadePulo = this.velocidadePulo + this.gravidade

    if(this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0
    }
  }

  colidindo(inimigo){
    const precisao = .7
    const colisao = collideRectRect(this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao)

      return colisao
  }
}