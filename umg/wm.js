let canvas = document.getElementById("tetrisboard") 
let wyniki = document.getElementById("wynik") 
let blok = document.getElementById("blok") 
let instr = document.getElementById("kontener") 

let ctx = canvas.getContext("2d") 
ctx.scale(DLUGOSC_BLOKU, DLUGOSC_BLOKU) 
let model = new ModelGry(ctx)
const button = document.getElementById('start');
let start_czas=0;
let koniec_czas=0;
let punkty = 1000000;

let wynik = 0 

let myInterval;
const obecny_wydzial = "wm.php";
button.addEventListener('click', function handleClick() {
    setCookie("wm", obecny_wydzial,1);
    button.style.visibility = "hidden";
    instr.style.visibility = "hidden";
    blok.style.visibility = "visible";
    start_czas= new Date().getTime();
    myInterval = setInterval(() => {
        newGameState()
    }, ZEGAR_GRY); 
    
  });



let newGameState = () => {
    calosc() 
    if (model.aktualny === null) {
        const rand = Math.round(Math.random() * 6) + 1
        const nowy = new Element(KSZTALT[rand], ctx) 
        model.aktualny = nowy 
       try{model.wDol()} 
       catch{}
    } else {
        try{model.wDol()}
        catch{}
    }
}

const calosc = () => {
    if(wynik<50)
    {
        const wypelnione = (wiersz) => {
            for (let x of wiersz) {
                if (x === 0) {
                    return false
                }
            }
            return true
        }
    
        for (let i = 0; i < model.siatka.length; i++) {
            if (wypelnione(model.siatka[i])) {
                wynik += PUNKT 
                model.siatka.splice(i, 1) 
                model.siatka.unshift([0,0,0,0,0,0,0,0,0,0])
            }
        }
    
        wyniki.innerHTML = String(wynik) + " / 50"
    }
    else if(wynik>=50){
        koniec_czas = new Date().getTime();
        let czas = koniec_czas - start_czas;
        punkty = punkty - czas;
        canvas.style.visibility = "hidden";
        clearInterval(myInterval);
        let w = parseInt(getCookie("wynik"));
        w = Math.round(w+(punkty/10000));
        deleteCookie("wynik");
        setCookie("wynik",w,1);
        let wm_wynik=punkty/10000;
        setCookie("wm_wynik",wm_wynik,1);
        console.log(getCookie("wm_wynik"));
        wyniki.style.visibility="hidden";
        document.getElementById("wynik_koncowy").innerText= "Brawo Twój wynik to: " + wm_wynik;
        przycisk_dalej();
    }
    
}
  
function change_direction(event) 
{  
    event.preventDefault()
   const LEFT_KEY = 37;
   const RIGHT_KEY = 39;
   const UP_KEY = 38;
   const DOWN_KEY = 40;
 
   const keyPressed = event.keyCode;
 
     if (keyPressed === LEFT_KEY)
     {    
        model.porusz(false) 
     }
 
     if (keyPressed === UP_KEY)
     {    
        model.obroty() 
     }
 
     if (keyPressed === RIGHT_KEY)
     {    
        model.porusz(true) 
     }
 
     if (keyPressed === DOWN_KEY)
     {   
        model.wDol() 
     }
}



function przycisk_dalej()
{
  let lista = [];
    const tile = document.createElement("div");
    document.getElementById('wynik_koncowy').appendChild(tile);   
    if(getCookie("we")=="puste")
    lista.push("we.php");
    if(getCookie("wn")=="puste")
    lista.push("wn.php");
    if(getCookie("wz")=="puste")
    lista.push("wz.php");
    if(lista.length>0)
    tile.innerHTML = '<a href="'+lista.shift()+'"><button id="dalej">Dalej</button></a>';
    else
    tile.innerHTML = '<a href="koniec.php"><button id="dalej">Dalej</button></a>';
}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function deleteCookie(name) {
    const cookieName = encodeURIComponent(name);
    document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

document.addEventListener("keydown", change_direction);