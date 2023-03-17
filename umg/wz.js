const button = document.getElementById('start');
const obr = document.getElementById('obr');
const obrazki = document.getElementById('obrazki');
const wynik = document.getElementById('wynik');
const img = document.createElement("img");
const instr = document.getElementById("kontener");

const obecny_wydzial = "wz.php";
const opoznienie=1000;

let lista = ["11.png", "22.png", "33.png", "44.png", "55.png"];

let button1 = document.getElementById("f1");
let button2 = document.getElementById("f2");
let button3 = document.getElementById("f3");
let button4 = document.getElementById("f4");
let button5 = document.getElementById("f5");
let aktualne;
let punkty = 0;

let start_czas;
let koniec_czas;

let raz = false;

let koncowy_wynik=100000;


button.addEventListener('click', function handleClick() {
    obrazki.style.visibility = "visible";
    main();
    button.style.visibility = "hidden";
    button.remove();
    button1.style.visibility = "visible";
    button2.style.visibility = "visible";
    button3.style.visibility = "visible";
    button4.style.visibility = "visible";
    button5.style.visibility = "visible";
    setCookie("wz", obecny_wydzial,1);
    instr.style.visibility = "hidden";
    
});



function main()
{
    start_czas= new Date().getTime();
    mieszanie_listy(lista);
    for(let i = 1; i <= 5; i++)
    {
        let b = document.getElementById("f"+i);
        console.log(b);
        b.style.backgroundImage = 'url("img/zdjecia/'+i+'.png")';
    }

    aktualne = lista.shift();
    img.src = "img/zdjecia/"+aktualne;
    obrazki.appendChild(img);
    zmiana_czas();
    myInterval = setInterval(function () {if(punkty==1000){
        koniec_czas = new Date().getTime();
        let czas = koniec_czas - start_czas;
        let w = koncowy_wynik-czas;
        wynik.innerHTML="";
        let w2 = parseInt(getCookie("wynik"));
        w2 = Math.round(w2+(w/1000));
        deleteCookie("wynik");
        setCookie("wynik",w2,1);
        let wz_wynik = punkty/1000;
        deleteCookie("wz_wynik");
        setCookie("wz_wynik",wz_wynik,1);
        wynik.innerHTML+="Brawo! Twój wynik to:" + w2;
        przycisk_dalej();
    clearInterval(myInterval);
    clearInterval(int);
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";
    button4.style.visibility = "hidden";
    button5.style.visibility = "hidden";
    obrazki.style.visibility = "hidden";
}}, 100);

}


function mieszanie_listy(lista) {
    for(var i = lista.length - 1; i > 0; --i) {
        zamiana(lista, i, ( Math.random() * (i + 1) ) | 0);
    }
}

function zamiana(lista, a, b) {
    var pom = lista[a];
    lista[a] = lista[b];
    lista[b] = pom;
}

button1.addEventListener('click', function myFunction(){
    wynik.innerHTML="";
    if(aktualne == "11.png" && !raz)
    {
        punkty+=100;
        wynik.innerHTML+=punkty;
        raz=true;
    }
    else
    wynik.innerHTML+=punkty;
})

button2.addEventListener('click', function myFunction(){
    wynik.innerHTML="";
    if(aktualne == "22.png" && !raz)
    {
        punkty+=100;
        wynik.innerHTML+=punkty;
        raz=true;
    }
    else
    wynik.innerHTML+=punkty;

})
button3.addEventListener('click', function myFunction(){
    wynik.innerHTML="";
    if(aktualne == "33.png" && !raz)
    {
        punkty+=100;
        wynik.innerHTML+=punkty;
        raz=true;
    }
    else
    wynik.innerHTML+=punkty;

})
button4.addEventListener('click', function myFunction(){
    wynik.innerHTML="";
    if(aktualne == "44.png" && !raz)
    {
        punkty+=100;
        wynik.innerHTML+=punkty;
        raz=true;
    }
    else
    wynik.innerHTML+=punkty;

})
button5.addEventListener('click', function myFunction(){
    wynik.innerHTML="";
    if(aktualne == "55.png" && !raz)
    {
        punkty+=100;
        wynik.innerHTML+=punkty;
        raz=true;
    }
    else
    wynik.innerHTML+=punkty;

})



function zmiana_czas()
{

if (lista.length>0){
    aktualne = lista.shift();
    img.src = "img/zdjecia/"+aktualne;
    raz = false;
}
else
{
    lista = ["11.png", "22.png", "33.png", "44.png", "55.png"];
    mieszanie_listy(lista);
}
}
int = setInterval("zmiana_czas()",opoznienie);
 


function przycisk_dalej()
{
    let lista = [];
    const tile = document.createElement("div");
    document.getElementById('wynik').appendChild(tile);
        //   for(let i =0; i<WYDZIALY.length; i++)
        //   {
        //     if(getCookie("wz")==WYDZIALY[i])
        //     WYDZIALY.splice(i,1);
        //     if(getCookie("wm")==WYDZIALY[i])
        //     WYDZIALY.splice(i,1);
        //     if(getCookie("we")==WYDZIALY[i])
        //     WYDZIALY.splice(i,1);
        //     if(getCookie("wn")==WYDZIALY[i])
        //     WYDZIALY.splice(i,1);
        //   }

        // if(getCookie("wz")!=""&&getCookie("wm")!=""&&getCookie("we")!="")
        //     tile.innerHTML = '<a href="wn.html"><button id="dalej">Dalej</button></a>';
        // else if(getCookie("wz")!=""&&getCookie("wn")!=""&&getCookie("we")!="")
        //   tile.innerHTML = '<a href=""wm.html""><button id="dalej">Dalej</button></a>';
        // else if(getCookie("wz")!=""&&getCookie("wn")!=""&&getCookie("wm")!="")
        //   tile.innerHTML = '<a href=""we.html""><button id="dalej">Dalej</button></a>';
        //   else if(getCookie("wm")!=""&&getCookie("wn")!=""&&getCookie("wz")!=""&&getCookie("we")!="")
        //  tile.innerHTML = '<a>Koniec</a>';
        // else
        // tile.innerHTML = '<a href="'+WYDZIALY.shift()+'"><button id="dalej">Dalej</button></a>';
        //   console.log(WYDZIALY);

        if(getCookie("we")=="puste")
    lista.push("we.php");
    if(getCookie("wn")=="puste")
    lista.push("wn.php");
    if(getCookie("wm")=="puste")
    lista.push("wm.php");
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