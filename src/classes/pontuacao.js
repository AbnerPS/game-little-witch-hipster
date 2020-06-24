class Pontuacao {
    constructor(){
        this.pontos = 0
    }

    exibe(){
        textAlign(RIGHT)
        textSize(50)
        fill('#FFF')
        text(parseInt(this.pontos), width - 50, 50)
    }

    addPonto(){
        this.pontos = this.pontos + 0.2
    }
}