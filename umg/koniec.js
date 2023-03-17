// const cookies = require('js-cookie');
// let wynik_js = cookies.get('wynik');

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


let wyniki = document.getElementById("wyniki");
let wynik_calk = getCookie("wynik");
wyniki.innerHTML= "<h2>Twój wynik to: "+wynik_calk+"</h2>";
