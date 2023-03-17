const board_border = 'black';
    const board_background = "#d6eefc";
    let snake_col = '#7BC2EA';
    const snake_border = 'darkblue';

    const obecny_wydzial = "wn.php";

    const d1d1 = "red";
    const d2d2 = "blue";
    const d3d3 = "green";
    const border = 'black';

    let snake = [
      {x: 200, y: 200},
      {x: 190, y: 200},
      {x: 180, y: 200},
      {x: 170, y: 200},
      {x: 160, y: 200}
    ]

    let changing_direction = false;
  
    let towar1_x;
    let towar1_y;    
    let towar2_x;
    let towar2_y;
 
    let dx = 10;
    let dy = 0;

    let d2 = [{x: 280,y: 80}, {x: 280,y: 90}, {x:290,y:80}, {x:290,y:90}];
    let d3 = [{x: 80,y: 280}, {x: 80,y: 290}, {x:90,y:280}, {x:90,y:290}];

    let zaladowany1 = false;
    let zaladowany2 = false;

    let paliwo = 10000;
    let nagroda_pocieszenia =5;

    const snakeboard = document.getElementById("snakeboard");
    const snakeboard_ctx = snakeboard.getContext("2d");
    const postep_bar = document.getElementById('postep');
    const button = document.getElementById('start');
    const paliwo_icon = document.getElementById('paliwo_div');
    const koniec = document.getElementById('koniec');
    const wynik_koncowy = document.getElementById('wynik_koncowy');


    let postep = ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"];
    //let postep = ["b1","b2"];


    button.addEventListener('click', function handleClick() {
      main();
      gen_towar1();
      gen_towar2();
      button.style.visibility = "hidden";
      postep_bar.style.visibility = "visible";
      paliwo_icon.style.visibility = "visible";
      koniec.innerHTML="";
      setCookie("wn", obecny_wydzial,1);
    });

      

    function main() {
        if (has_game_ended()) {
          clearCanvas();
          postep_bar.style.visibility = "hidden";
          paliwo_icon.style.visibility = "hidden";
          snakeboard.style.visibility = "hidden";
          koniec.style.visibility = "visible";
          wynik_koncowy.innerHTML = "Twoja nagroda pocieszenia to: "+ nagroda_pocieszenia + " punktów";
          let w = getCookie("wynik");
          w = w+nagroda_pocieszenia;
          deleteCookie("wynik");
          setCookie("wynik",w,1);
          let wn_wynik = 5;
          deleteCookie("wn_wynik");
          setCookie("wn_wynik",wn_wynik,1);
          przycisk_dalej();
          return;
        }
        changing_direction = false;
        setTimeout(function onTick() {
        clearCanvas();
        drawTowar1();
        drawTowar2();
        baza2();
        baza3();
        move_snake();
        drawSnake();
        if((snake[0].x === d3[0].x && snake[0].y === d3[0].y || snake[0].x === d3[1].x && snake[0].y === d3[1].y ||snake[0].x === d3[2].x && snake[0].y === d3[2].y ||snake[0].x === d3[3].x && snake[0].y === d3[3].y) && zaladowany1 &&postep.length>0)
        { 
            let p = document.getElementById(postep[0]);
            console.log(p);
            p.style.background = "#7BC2EA";
            postep.shift();
            snake_col= "#7BC2EA";
            drawSnake();
            zaladowany1 = false;
            gen_towar1();
        }
        else if((snake[0].x === d2[0].x && snake[0].y === d2[0].y || snake[0].x === d2[1].x && snake[0].y === d2[1].y ||snake[0].x === d2[2].x && snake[0].y === d2[2].y ||snake[0].x === d2[3].x && snake[0].y === d2[3].y) && !zaladowany1 && zaladowany2 &&postep.length>0)
        {
            let p = document.getElementById(postep[0]);
            console.log(p);
            p.style.background = "#7BC2EA";
            postep.shift();
            snake_col= "#7BC2EA";
            drawSnake();
            zaladowany2 = false;
            gen_towar2();
        }
        else if(postep.length==0)
        {
          clearCanvas();
          postep_bar.style.visibility = "hidden";
          paliwo_icon.style.visibility = "hidden";
          snakeboard.style.visibility = "hidden";
          koniec.style.visibility = "visible";
          przycisk_dalej();
          let w = parseInt(getCookie("wynik"));
          w = Math.round(w+(paliwo/100));
          deleteCookie("wynik");
          setCookie("wynik",w,1);
          let wn_wynik = paliwo/100;
          deleteCookie("wn_wynik");
          setCookie("wn_wynik",wn_wynik,1);
          wynik_koncowy.innerHTML = "Brawo! Twój wynik to: "+ w;
          return;
        }
        main();
      }, 100)
    }
    
    
    function clearCanvas() {
      snakeboard_ctx.fillStyle = board_background;
      snakeboard_ctx.strokestyle = board_border;
      snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
      snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
    }
    
    function drawTowar1() {
        snakeboard_ctx.fillStyle = 'lightgreen';
        snakeboard_ctx.strokestyle = 'darkgreen';
        snakeboard_ctx.fillRect(towar1_x, towar1_y, 10, 10);
        snakeboard_ctx.strokeRect(towar1_x, towar1_y, 10, 10);
      }

      function drawTowar2() {
        snakeboard_ctx.fillStyle = 'purple';
        snakeboard_ctx.strokestyle = 'purple';
        snakeboard_ctx.fillRect(towar2_x, towar2_y, 10, 10);
        snakeboard_ctx.strokeRect(towar2_x, towar2_y, 10, 10);
      }

    function clearTowar1()
    {
        snakeboard_ctx.fillRect(towar1_x, towar1_y, 10, 10);
        snakeboard_ctx.strokeRect(towar1_x, towar1_y, 10, 10);
    }  


    function clearTowar2()
    {
        snakeboard_ctx.fillRect(towar2_x, towar2_y, 10, 10);
        snakeboard_ctx.strokeRect(towar2_x, towar2_y, 10, 10);
    }  

  
    function drawSnake() {
      snake.forEach(drawSnakePart)
    }
    
    
    function drawSnakePart(snakePart) {
      snakeboard_ctx.fillStyle = snake_col;
      snakeboard_ctx.strokestyle = snake_border;
      snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
      snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }



    function random_food(min, max) {
        return Math.round((Math.random() * (max-min) + min) / 10) * 10;
      }
  
      
    function gen_towar1() {
        towar1_x = random_food(20, snakeboard.width - 20);
        towar1_y = random_food(20, snakeboard.height - 20);
      }

    function gen_towar2() {
        towar2_x = random_food(20, snakeboard.width - 20);
        towar2_y = random_food(20, snakeboard.height - 20);
      }


    function move_snake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        const has_towar1 = snake[0].x === towar1_x && snake[0].y === towar1_y;
        const has_towar2 = snake[0].x === towar2_x && snake[0].y === towar2_y;
        if (has_towar1 && !zaladowany2) {
          snake.pop();
          snake_col= "lightgreen";
          drawSnake();
          zaladowany1 = true;
          towar1_x = 450;
          towar1_y = 450;
          clearTowar1();
        } 
        else if (has_towar2 && !zaladowany1)
        {
          snake.pop();
          snake_col= "purple";
          drawSnake();
          zaladowany2 = true;
          towar2_x = 450;
          towar2_y = 450;
          clearTowar2();
        }
        else {
          snake.pop();
        }
      }
    

      function has_game_ended() {
        for (let i = 4; i < snake.length; i++) {
          if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
        }
        const hitLeftWall = snake[0].x < 0;
        const hitRightWall = snake[0].x > snakeboard.width - 10;
        const hitToptWall = snake[0].y < 0;
        const hitBottomWall = snake[0].y > snakeboard.height - 10;
        return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
      }

      function baza2() {
        d2.forEach(gen_baza2);
      }

      function gen_baza2(baza_part){
      snakeboard_ctx.fillStyle = "purple";
      snakeboard_ctx.strokestyle = border;
      snakeboard_ctx.fillRect(baza_part.x, baza_part.y, 10, 10);
      snakeboard_ctx.strokeRect(baza_part.x, baza_part.y, 10, 10);

      }


      function baza3() {
        d3.forEach(gen_baza3);
      }

      function gen_baza3(baza_part){
      snakeboard_ctx.fillStyle = "lightgreen";
      snakeboard_ctx.strokestyle = border;
      snakeboard_ctx.fillRect(baza_part.x, baza_part.y, 10, 10);
      snakeboard_ctx.strokeRect(baza_part.x, baza_part.y, 10, 10);

      }
      
      function change_direction(event) 
{  
   const LEFT_KEY = 37;
   const RIGHT_KEY = 39;
   const UP_KEY = 38;
   const DOWN_KEY = 40;
 
   const keyPressed = event.keyCode;
   const goingUp = dy === -10;
   const goingDown = dy === 10;
   const goingRight = dx === 10;  
   const goingLeft = dx === -10;
 
     if (keyPressed === LEFT_KEY && !goingRight)
     {    
          dx = -10;
          dy = 0;  
          paliwo=paliwo-10;
          document.getElementById('klikniecia').innerHTML = paliwo;

     }
 
     if (keyPressed === UP_KEY && !goingDown)
     {    
          dx = 0;
          dy = -10;
          paliwo=paliwo-10;
          document.getElementById('klikniecia').innerHTML = paliwo;

     }
 
     if (keyPressed === RIGHT_KEY && !goingLeft)
     {    
          dx = 10;
          dy = 0;
          paliwo=paliwo-10;
          document.getElementById('klikniecia').innerHTML = paliwo;

     }
 
     if (keyPressed === DOWN_KEY && !goingUp)
     {    
          dx = 0;
          dy = 10;
          paliwo=paliwo-10;
          document.getElementById('klikniecia').innerHTML = paliwo;

     }
}

document.addEventListener("keydown", change_direction);

document.addEventListener("DOMContentLoaded", function () {
    pTag = document.querySelector("div");
    newVal = document.createElement("p");
    newVal.innerHTML = '';
    pTag.appendChild(newVal);
  
  });

  function przycisk_dalej()
{
  let lista = [];
    const tile = document.createElement("div");
    koniec.appendChild(tile);
        //   for(let i =0; i<WYDZIALY.length; i++)
        //   {
        //     if(getCookie("wn")==WYDZIALY[i])
        //     WYDZIALY.splice(i,1);
        //     if(getCookie("wm")==WYDZIALY[i])
        //     WYDZIALY.splice(i,1);
        //     if(getCookie("we")==WYDZIALY[i])
        //     WYDZIALY.splice(i,1);
        //     if(getCookie("wz")==WYDZIALY[i])
        //     WYDZIALY.splice(i,1);
        //   }
        //   if(getCookie("wn")!=""&&getCookie("wm")!=""&&getCookie("we")!="")
        //     tile.innerHTML = '<a href="wz.html"><button id="dalej">Dalej</button></a>';
        // else if(getCookie("wn")!=""&&getCookie("wz")!=""&&getCookie("we")!="")
        //   tile.innerHTML = '<a href=""wm.html""><button id="dalej">Dalej</button></a>';
        // else if(getCookie("wn")!=""&&getCookie("wz")!=""&&getCookie("wm")!="")
        //   tile.innerHTML = '<a href=""we.html""><button id="dalej">Dalej</button></a>';
        //   else if(getCookie("wm")!=""&&getCookie("wn")!=""&&getCookie("wz")!=""&&getCookie("we")!="")
        //  tile.innerHTML = '<a>Koniec</a>';
        // else
        // tile.innerHTML = '<a href="'+WYDZIALY.shift()+'"><button id="dalej">Dalej</button></a>';
        //   console.log(WYDZIALY);
        if(getCookie("we")=="puste")
    lista.push("we.php");
    if(getCookie("wm")=="puste")
    lista.push("wm.php");
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