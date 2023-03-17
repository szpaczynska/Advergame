const menu= {
    wydzialy : [
        "we",
        "wm",
        "wn",
        "wz",
     ],

     div_wydzialy: null,
     div_statystyki : null,
     we:0,
     wm:0,
     wn:0,
     wz:0,

     we_lista: [],

    randomize(values) {
        let index = values.length,  randomIndex;
      
        // While there remain elements to shuffle
        while (index != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * index);
          index--;
      
          // And swap it with the current element.
          [values[index], values[randomIndex]] = [
            values[randomIndex], values[index]];
        }
      
        return values;
      },

      div_wydzialy: document.querySelector(".wydzialy"),
      div_instr : document.querySelector(".instr"),
      div_statystyki : document.querySelector(".statystyki"),

      button_start : document.querySelector(".start"),
      pierwszy_click: true,
      zdjecia: [],

      
      deleteCookie(name) {
      const cookieName = encodeURIComponent(name);
      document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      },


      pierwszyWybor(name) {
        if(this.pierwszy_click){
        //   if(name=="we")
        //   {
        //     this.we++;
        //    // this.div_statystyki.innerHTML="<h4>Wybrany jako pierwszy wydział elektryczny</h4>";
        //     listy.we.push(1);
        // }
        //   else if(name=="wm")
        //   {
        //     this.wm++;
        //     //this.div_statystyki.innerHTML="<h4>Wybrany jako pierwszy wydział mechaniczny</h4>";
        //     listy.wm.push(1);
        //   }
        //   else if(name=="wn")
        //   {
        //     this.wn++;
        //     //this.div_statystyki.innerHTML="<h4>Wybrany jako pierwszy wydział nawigacyjny</h4>";
        //     listy.wn.push(1);
        //   }
        //   else
        //  { this.wz++;
        //    // this.div_statystyki.innerHTML="<h4>Wybrany jako pierwszy wydział zarządzania i nauk o jakości</h4>";
        //    listy.wz.push(1);
        //   }
        let dane = name;
        this.setCookie("PW", dane);
          this.pierwszy_click=false;
          //this.div_statystyki.innerHTML="<h4>"+listy.we.length+"</h4>";
        } 
      },



      getCookie(cname) {
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
      },
      setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      },


      startGry(){
        this.div_wydzialy.innerHTML = "";
        this.div_instr.innerHTML = "";
        this.div_statystyki.innerHTML = "";
        this.button_start.classList.add("x");
        this.zdjecia = this.randomize(this.wydzialy);
        this.div_instr.innerHTML = '<h2>Wybierz logo wydziału, aby rozpocząć grę</h2>';
        for (let i=0; i<this.wydzialy.length; i++) {
         const tile = document.createElement("div");
          tile.classList.add("element");
          this.div_wydzialy.appendChild(tile);

          let a = this.zdjecia[i];
          let b = this.zdjecia[i]+".png"
          tile.innerHTML = "<a href='"+a+".php'><img src="+b+"></a>";
          
          tile.dataset.index=i;
          tile.dataset.name = this.zdjecia[i];
          tile.addEventListener("click", e => this.pierwszyWybor(tile.dataset.name));
        
        }

        this.deleteCookie("we");
        this.deleteCookie("wm");
        this.deleteCookie("wn");
        this.deleteCookie("wz");
        this.deleteCookie("wynik");
        
        this.setCookie("we", "puste", 1);
        this.setCookie("wm", "puste", 1);
        this.setCookie("wn", "puste", 1);
        this.setCookie("wz", "puste", 1);
        this.setCookie("wynik", 0, 1);
       
        console.log(this.getCookie("we_wynik") +this.getCookie("wm_wynik") +this.getCookie("wn_wynik") +this.getCookie("wz_wynik")); 
        //sessionStorage.setItem("session", "session");
        
        //localStorage.setItem('wynik', "wynik123");
         // console.log(this.getCookie("we"));
          //this.deleteCookie("we");
          //console.log(this.getCookie("we"));
          //this.deleteCookie("wm");
          //this.deleteCookie("wn");
          //this.deleteCookie("wz");
}
};

const listy ={
    we:[],
    wm:[],
    wn:[],
    wz:[]
}



 document.addEventListener("DOMContentLoaded", () => {
     const startBtn = document.querySelector(".start");
     startBtn.addEventListener("click", e => menu.startGry());
 });