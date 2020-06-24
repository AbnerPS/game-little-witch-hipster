class Personagem {

    constructor(imagem){
      this.imagem = imagem
      this.frameAtual = 0
      this.alturaPersonagem = 140
      this.larguraPersonagem = 110
      this.tamX = 220
      this.tamY = 270
      this.totalFrames = 16
    }
    
    exibe(){
      let x = this.frameAtual % 4 * this.tamX;
      let y = Math.floor(this.frameAtual / 4) * this.tamY;
  
      image(this.imagem,
        0,
        height - this.alturaPersonagem,
        this.larguraPersonagem,
        this.alturaPersonagem,
        x,
        y,
        this.tamX,
        this.tamY);
        
      this.anima(x, y);
      }
    
    anima(x, y){
      this.frameAtual++
  
      if(this.frameAtual >= this.totalFrames){
        this.frameAtual = 0
      }
    }
  }