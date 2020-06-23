class Animacao {

    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        this.matriz = matriz
        this.imagem = imagem
        this.x = x
        this.largura = largura
        this.altura = altura
        this.y = height - this.altura
        this.larguraSprite = larguraSprite
        this.alturaSprite = alturaSprite
        this.frameAtual = 0
        this.velocidade = 10
    }
    
    exibe(){

        image(this.imagem,
            this.x,
            this.y,
            this.largura,
            this.altura,
            this.matriz[this.frameAtual][0],
            this.matriz[this.frameAtual][1],
            this.larguraSprite,
            this.alturaSprite)

        this.anima()
      }
      
      anima(){
          this.frameAtual >= this.matriz.length - 1 ? this.frameAtual = 0 : this.frameAtual++
        }

        move() {
            this.x < -this.largura ? this.x = width : this.x = this.x - this.velocidade
        }
}