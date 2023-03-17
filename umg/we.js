var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var t = 0;
let obi =1;
let start_czas;
let koniec_czas;
let punkty = 100000;

let dodatki = ["blank.png", "1.png", "7.png", "9.png", "2.png", "blank.png", "blank.png",]
const button = document.getElementById('start');
const plansza = document.getElementById('board');
const instr = document.getElementById('kontener');

const obecny_wydzial = "we.php";

let button1 = document.getElementById("zdj1");
let button2 = document.getElementById("zdj2");
let button3 = document.getElementById("zdj3");
let button4 = document.getElementById("zdj4");
let button5 = document.getElementById("zdj5");
let button6 = document.getElementById("zdj6");
let button7 = document.getElementById("zdj7");
let button8 = document.getElementById("zdj8");
let button9 = document.getElementById("zdj9");


button.addEventListener('click', function handleClick() {
    plansza.style.visibility = "visible";
    main();
    button.style.visibility = "hidden";
    instr.innerHTML="";
    setCookie("we", obecny_wydzial,1);
});

function main() {
    instr.innerHTML="";
    myInterval = setInterval(function () {if(document.getElementById("zdj1").style.transform==`rotate(0deg)` && document.getElementById("zdj2").style.transform==`rotate(0deg)` &&document.getElementById("zdj3").style.transform==`rotate(0deg)` &&document.getElementById("zdj4").style.transform==`rotate(0deg)` &&document.getElementById("zdj5").style.transform==`rotate(0deg)` &&document.getElementById("zdj6").style.transform==`rotate(0deg)` &&document.getElementById("zdj7").style.transform==`rotate(0deg)` &&document.getElementById("zdj8").style.transform==`rotate(0deg)` &&document.getElementById("zdj9").style.transform==`rotate(0deg)`){
            koniec_czas = new Date().getTime();
            let czas = koniec_czas - start_czas;
            punkty = punkty - czas;
            document.getElementById("p1").style.background="green";
            document.getElementById("p2").style.background="green";
            document.getElementById("p3").style.background="green";
            document.getElementById("p4").style.background="green";
            document.getElementById("p5").style.background="green";
            document.getElementById("p6").style.background="green";
            document.getElementById("p7").style.background="green";
            plansza.style.visibility = "hidden";
            console.log(getCookie("wydzial"));
            let w = parseInt(getCookie("wynik"));
            w = Math.round(w+(punkty/1000));
            deleteCookie("wynik");
            setCookie("wynik",w,1);
            let we_wynik = punkty/1000;
            deleteCookie("we_wynik");
            setCookie("we_wynik",we_wynik,1);
            document.getElementById("wynik").innerText+="Brawo! Twój wynik to:" + w;
            przycisk_dalej();
        clearInterval(myInterval);
    }}, 100);
    
    start_czas= new Date().getTime();
    let pieces = [];
    for (let i=0; i <= rows*columns; i++) {
        pieces.push(i.toString()); 
    }

    let obrot = [];
    let kat = 90; 
    for (let i=0; i <= rows*columns; i++) {
        if(i==3 || i==7)
        {
            kat = kat+90;
            obrot.push(kat);
        }
        else 
        {
            obrot.push(kat);
        }
    }
    obrot.reverse();
    for (let i =0; i < obrot.length; i++) {
        let j = Math.floor(Math.random() * obrot.length);

        let tmp = obrot[i];
        obrot[i] = obrot[j];
        obrot[j] = tmp;
    }

    dodatki.reverse();
    for (let i =0; i < dodatki.length; i++) {
        let j = Math.floor(Math.random() * dodatki.length);

        let tmp = dodatki[i];
        dodatki[i] =dodatki[j];
        dodatki[j] = tmp;
    }

     
    for(let i=1; i <= rows*columns; i++){ 
        let b = document.getElementById("zdj"+i);
        console.log(b);
        b.style.backgroundImage = 'url("'+i+'.png")';
        b.style.transform =`rotate(`+obrot[obi]+`deg)`;
        obi ++;
   }

   obi=0; 
   for(let i=1; i <= 7; i++){
    let p = document.getElementById("p"+i);
    p.style.backgroundImage = 'url("'+dodatki[t]+'")';
    p.style.transform =`rotate(`+obrot[obi]+`deg)`;
    obi ++;
    t++;
}


    button1.addEventListener('click', function myFunction(){
        let img = document.getElementById("zdj1");
        if(img.style.transform=='rotate(90deg)')
        {
            img.style.transform =`rotate(180deg)`;
        }
        else if(img.style.transform=='rotate(180deg)')
        {
            img.style.transform =`rotate(270deg)`;
        }
        else if (img.style.transform=='rotate(270deg)')
        {
            img.style.transform =`rotate(0deg)`;
        }
        else
        {
            img.style.transform =`rotate(90deg)`;
        }
        //console.log(img.style.transform);
    })

        
    button2.addEventListener('click', function myFunction(){
        let img = document.getElementById("zdj2");
        if(img.style.transform=='rotate(90deg)')
        {
            img.style.transform =`rotate(180deg)`;
        }
        else if(img.style.transform=='rotate(180deg)')
        {
            img.style.transform =`rotate(270deg)`;
        }
        else if (img.style.transform=='rotate(270deg)')
        {
            img.style.transform =`rotate(0deg)`;
        }
        else
        {
            img.style.transform =`rotate(90deg)`;
        }
        //console.log(img.style.transform);
    })

        button3.addEventListener('click', function myFunction(){
            let img = document.getElementById("zdj3");
            if(img.style.transform=='rotate(90deg)')
            {
                img.style.transform =`rotate(180deg)`;
            }
            else if(img.style.transform=='rotate(180deg)')
            {
                img.style.transform =`rotate(270deg)`;
            }
            else if (img.style.transform=='rotate(270deg)')
            {
                img.style.transform =`rotate(0deg)`;
            }
            else
            {
                img.style.transform =`rotate(90deg)`;
            }
            //console.log(img.style.transform);
        })

        button4.addEventListener('click', function myFunction(){
            let img = document.getElementById("zdj4");
            if(img.style.transform=='rotate(90deg)')
            {
                img.style.transform =`rotate(180deg)`;
            }
            else if(img.style.transform=='rotate(180deg)')
            {
                img.style.transform =`rotate(270deg)`;
            }
            else if (img.style.transform=='rotate(270deg)')
            {
                img.style.transform =`rotate(0deg)`;
            }
            else
            {
                img.style.transform =`rotate(90deg)`;
            }
            //console.log(img.style.transform);
        })

        button5.addEventListener('click', function myFunction(){
            let img = document.getElementById("zdj5");
            if(img.style.transform=='rotate(90deg)')
            {
                img.style.transform =`rotate(180deg)`;
            }
            else if(img.style.transform=='rotate(180deg)')
            {
                img.style.transform =`rotate(270deg)`;
            }
            else if (img.style.transform=='rotate(270deg)')
            {
                img.style.transform =`rotate(0deg)`;
            }
            else
            {
                img.style.transform =`rotate(90deg)`;
            }
            //console.log(img.style.transform);
        })

        button6.addEventListener('click', function myFunction(){
            let img = document.getElementById("zdj6");
            if(img.style.transform=='rotate(90deg)')
            {
                img.style.transform =`rotate(180deg)`;
            }
            else if(img.style.transform=='rotate(180deg)')
            {
                img.style.transform =`rotate(270deg)`;
            }
            else if (img.style.transform=='rotate(270deg)')
            {
                img.style.transform =`rotate(0deg)`;
            }
            else
            {
                img.style.transform =`rotate(90deg)`;
            }
            //console.log(img.style.transform);
        })

        button7.addEventListener('click', function myFunction(){
            let img = document.getElementById("zdj7");
            if(img.style.transform=='rotate(90deg)')
            {
                img.style.transform =`rotate(180deg)`;
            }
            else if(img.style.transform=='rotate(180deg)')
            {
                img.style.transform =`rotate(270deg)`;
            }
            else if (img.style.transform=='rotate(270deg)')
            {
                img.style.transform =`rotate(0deg)`;
            }
            else
            {
                img.style.transform =`rotate(90deg)`;
            }
            //console.log(img.style.transform);
        })

        button8.addEventListener('click', function myFunction(){
            let img = document.getElementById("zdj8");
            if(img.style.transform=='rotate(90deg)')
            {
                img.style.transform =`rotate(180deg)`;
            }
            else if(img.style.transform=='rotate(180deg)')
            {
                img.style.transform =`rotate(270deg)`;
            }
            else if (img.style.transform=='rotate(270deg)')
            {
                img.style.transform =`rotate(0deg)`;
            }
            else
            {
                img.style.transform =`rotate(90deg)`;
            }
            //console.log(img.style.transform);
        })

        button9.addEventListener('click', function myFunction(){
            let img = document.getElementById("zdj9");
            if(img.style.transform=='rotate(90deg)')
            {
                img.style.transform =`rotate(180deg)`;
            }
            else if(img.style.transform=='rotate(180deg)')
            {
                img.style.transform =`rotate(270deg)`;
            }
            else if (img.style.transform=='rotate(270deg)')
            {
                img.style.transform =`rotate(0deg)`;
            }
            else
            {
                img.style.transform =`rotate(90deg)`;
            }
            //console.log(img.style.transform);
        })

       
    let p1 = document.getElementById("p1");
   p1.addEventListener('click', function myFunction(){
        let img = document.getElementById("p1");
        if(img.style.transform=='rotate(90deg)')
        {
            img.style.transform =`rotate(180deg)`;
        }
        else if(img.style.transform=='rotate(180deg)')
        {
            img.style.transform =`rotate(270deg)`;
        }
        else if (img.style.transform=='rotate(270deg)')
        {
            img.style.transform =`rotate(0deg)`;
        }
        else
        {
            img.style.transform =`rotate(90deg)`;
        }
        //console.log(img.style.transform);
    })

    let p2 = document.getElementById("p2");
    p2.addEventListener('click', function myFunction(){
         let img = document.getElementById("p2");
         if(img.style.transform=='rotate(90deg)')
         {
             img.style.transform =`rotate(180deg)`;
         }
         else if(img.style.transform=='rotate(180deg)')
         {
             img.style.transform =`rotate(270deg)`;
         }
         else if (img.style.transform=='rotate(270deg)')
         {
             img.style.transform =`rotate(0deg)`;
         }
         else
         {
             img.style.transform =`rotate(90deg)`;
         }
         //console.log(img.style.transform);
     })
 
     let p3 = document.getElementById("p3");
     p3.addEventListener('click', function myFunction(){
          let img = document.getElementById("p3");
          if(img.style.transform=='rotate(90deg)')
          {
              img.style.transform =`rotate(180deg)`;
          }
          else if(img.style.transform=='rotate(180deg)')
          {
              img.style.transform =`rotate(270deg)`;
          }
          else if (img.style.transform=='rotate(270deg)')
          {
              img.style.transform =`rotate(0deg)`;
          }
          else
          {
              img.style.transform =`rotate(90deg)`;
          }
          //console.log(img.style.transform);
      })
  
      let p4 = document.getElementById("p4");
      p4.addEventListener('click', function myFunction(){
           let img = document.getElementById("p4");
           if(img.style.transform=='rotate(90deg)')
           {
               img.style.transform =`rotate(180deg)`;
           }
           else if(img.style.transform=='rotate(180deg)')
           {
               img.style.transform =`rotate(270deg)`;
           }
           else if (img.style.transform=='rotate(270deg)')
           {
               img.style.transform =`rotate(0deg)`;
           }
           else
           {
               img.style.transform =`rotate(90deg)`;
           }
           //console.log(img.style.transform);
       })
   
       let p5 = document.getElementById("p5");
       p5.addEventListener('click', function myFunction(){
            let img = document.getElementById("p5");
            if(img.style.transform=='rotate(90deg)')
            {
                img.style.transform =`rotate(180deg)`;
            }
            else if(img.style.transform=='rotate(180deg)')
            {
                img.style.transform =`rotate(270deg)`;
            }
            else if (img.style.transform=='rotate(270deg)')
            {
                img.style.transform =`rotate(0deg)`;
            }
            else
            {
                img.style.transform =`rotate(90deg)`;
            }
            //console.log(img.style.transform);
        })
    

        let p6 = document.getElementById("p6");
        p6.addEventListener('click', function myFunction(){
             let img = document.getElementById("p6");
             if(img.style.transform=='rotate(90deg)')
             {
                 img.style.transform =`rotate(180deg)`;
             }
             else if(img.style.transform=='rotate(180deg)')
             {
                 img.style.transform =`rotate(270deg)`;
             }
             else if (img.style.transform=='rotate(270deg)')
             {
                 img.style.transform =`rotate(0deg)`;
             }
             else
             {
                 img.style.transform =`rotate(90deg)`;
             }
             //console.log(img.style.transform);
         })
     

         let p7 = document.getElementById("p7");
         p7.addEventListener('click', function myFunction(){
              let img = document.getElementById("p7");
              if(img.style.transform=='rotate(90deg)')
              {
                  img.style.transform =`rotate(180deg)`;
              }
              else if(img.style.transform=='rotate(180deg)')
              {
                  img.style.transform =`rotate(270deg)`;
              }
              else if (img.style.transform=='rotate(270deg)')
              {
                  img.style.transform =`rotate(0deg)`;
              }
              else
              {
                  img.style.transform =`rotate(90deg)`;
              }
              //console.log(img.style.transform);
          })
}

function koniec(){
    
}


function przycisk_dalej()
{
    let lista = [];
    const tile = document.createElement("div");
    document.getElementById('wynik').appendChild(tile);
    //       for(let i =0; i<WYDZIALY.length; i++)
    //       {
    //         if(obecny_wydzial==WYDZIALY[i])
    //         WYDZIALY.splice(i,1);
    //         if(getCookie("we")==WYDZIALY[i])
    //         {WYDZIALY.splice(i,1);}
    //         if(getCookie("wm")==WYDZIALY[i])
    //         {WYDZIALY.splice(i,1);}
    //         if(getCookie("wn")==WYDZIALY[i])
    //         {WYDZIALY.splice(i,1);}
    //         if(getCookie("wz")==WYDZIALY[i])
    //         {WYDZIALY.splice(i,1);}
    //       }
    //       if(getCookie("we")!=""&&getCookie("wm")!=""&&getCookie("wz")!="")
    //       tile.innerHTML = '<a href="wn.html"><button id="dalej">Dalej</button></a>';
    //   else if(getCookie("we")!=""&&getCookie("wn")!=""&&getCookie("wz")!="")
    //     tile.innerHTML = '<a href=""wm.html""><button id="dalej">Dalej</button></a>';
    //   else if(getCookie("we")!=""&&getCookie("wn")!=""&&getCookie("wm")!="")
    //     tile.innerHTML = '<a href=""wz.html""><button id="dalej">Dalej</button></a>';
    //     else if(getCookie("wm")!=""&&getCookie("wn")!=""&&getCookie("wz")!=""&&getCookie("we")!="")
    //      tile.innerHTML = '<a>Koniec</a>';
    //   else
    //   tile.innerHTML = '<a href="'+WYDZIALY.shift()+'"><button id="dalej">Dalej</button></a>';
    //       console.log(WYDZIALY);
    console.log(getCookie("wm"), getCookie("wn"), getCookie("wz"));
    if(getCookie("wm")=="puste")
    lista.push("wm.php");
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