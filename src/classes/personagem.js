class Personagem extends Animacao {

  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
    this.velocidade = 10
    this.gravidade = 3
    this.velocidadePulo = 0
    this.yInicial = height - this.altura
    this.y = this.yInicial
  }

  pula() {
    if(this.y === this.yInicial){
      this.velocidadePulo = - 40
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadePulo
    this.velocidadePulo = this.velocidadePulo + this.gravidade

    if(this.y > this.yInicial) {
      this.y = this.yInicial

    }
  }

  colidindo(){
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