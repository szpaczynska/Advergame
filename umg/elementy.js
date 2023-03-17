class Element {
    constructor(ksztalt, ctx) {
        this.ksztalt = ksztalt 
        this.ctx = ctx 
        this.y = 0 
        this.x = Math.floor(KOLUMNY / 2)
    }

   
    renderujElement() {
        this.ksztalt.map((wiersz, i) => {
            wiersz.map((kom, j) => {
                if (kom > 0) {
                    this.ctx.fillStyle = KOLORY[kom] 
                    this.ctx.fillRect(this.x + j, this.y + i, 1, 1)
                }
            })
        })
    }
}
