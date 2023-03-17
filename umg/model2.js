class ModelGry {
    constructor(ctx) {
        this.ctx = ctx 
        this.aktualny = null // piece
        this.siatka = this.siatkaStartowa()
    }

    siatkaStartowa() {
        let siatka = [] 
        for (var i = 0; i < WIERSZE; i++) {
            siatka.push([])
            for (var j = 0; j < KOLUMNY; j++) {
                siatka[siatka.length - 1].push(0)
            }
        }
        return siatka 
    }

   
    kolizja(x, y, k=null) {
        const ksztalt = k || this.aktualny.ksztalt 
        const n = ksztalt.length; 
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (ksztalt[i][j] > 0) {
                    let p = x + j 
                    let q = y + i  
                    if (p >= 0 && p < KOLUMNY && q < WIERSZE) {
                        // in bounds
                        if (this.siatka[q][p] > 0) {
                            return true
                        }
                    } else {
                        return true
                    }
                }
            }
        }
        return false
    }

    stanGry() {
        for (let i = 0; i < this.siatka.length; i++) {
            for (let j = 0; j < this.siatka[i].length; j++) {
                let kom = this.siatka[i][j] 
                this.ctx.fillStyle = KOLORY[kom] 
                this.ctx.fillRect(j, i, 1, 1)
            }
        }

        if (this.aktualny !== null) {
            this.aktualny.renderujElement()
        }
    }


    wDol() {
        if (this.aktualny === null) {
            this.stanGry() 
            return
        } else if (this.kolizja(this.aktualny.x, this.aktualny.y + 1)) {
            const ksztalt = this.aktualny.ksztalt 
            const x = this.aktualny.x 
            const y = this.aktualny.y 
            ksztalt.map((wiersz, i) => {
                wiersz.map((kom, j) => {
                    let p = x + j 
                    let q = y + i 
                    if (p >= 0 && p < KOLUMNY && q < WIERSZE && kom > 0) {
                        this.siatka[q][p] = ksztalt[i][j]
                    }
                })
            })
            // check game over 
            if (this.aktualny.y === 0) {
                //alert("Koniec Gry!") 
                let wm_wynik=5;
                setCookie("wm_wynik",wm_wynik,1);
                wyniki.innerHTML = "Niestety nie udało się ukończyć gry, Twoja nagroda pocieszenia to: " + wm_wynik;
                //przycisk_dalej();
                //this.siatka = this.siatkaStartowa()
            }
            this.aktualny = null
        } else {
            this.aktualny.y += 1
        }
        this.stanGry()
    }

    porusz(prawo) {
        if (this.aktualny === null) {
            return
        }

        let x = this.aktualny.x 
        let y = this.aktualny.y 
        if (prawo) {
            // move right
            if (!this.kolizja(x + 1, y)) {
                this.aktualny.x += 1
            }
        } else {
            // move left
            if (!this.kolizja(x - 1, y)) {
                this.aktualny.x -= 1
            }
        }
        this.stanGry()
    }

    obroty() {
        if (this.aktualny !== null) {
            let ksztalt = [...this.aktualny.ksztalt.map((wiersz) => [...wiersz])]
            // transpose of matrix 
            for (let y = 0; y < ksztalt.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    [ksztalt[x][y], ksztalt[y][x]] = 
                    [ksztalt[y][x], ksztalt[x][y]]
                }
            }
            // reverse order of rows 
            ksztalt.forEach((wiersz => wiersz.reverse()))
            if (!this.kolizja(this.aktualny.x, this.aktualny.y, ksztalt)) {
                this.aktualny.ksztalt = ksztalt
            }
        }
        this.stanGry()
    }
}