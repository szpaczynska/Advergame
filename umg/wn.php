<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  	<title>WN</title>
    <link rel="stylesheet" href="css/wn2.css">
  </head>
  <body>
    <header>
        <div class="naglowek">
            <a href="https://umg.edu.pl/"> <img src="img/logo.png" class="logo"></a>
        </div>
        </header>
        <div id="wynik_koncowy"></div>
        <?php
        if (isset($_COOKIE["wn_wynik"])) {
          if ($_COOKIE["wn_wynik"] == "puste") {
            echo '<style>#start{visibility: visible;}</style>';
            echo '<style>#koniec{visibility: visible;}</style>';
          } else {
            //print_r("Twój wynik to:" . $_COOKIE["we_wynik"]);
            echo '<style>#start{visibility: hidden;}</style>';
            echo '<style>#koniec{visibility: hidden;}</style>';
            $lista = array();
            $wm = "wm.php";
            $wn = "we.php";
            $wz = "wz.php";
            if ($_COOKIE["wm"] == "puste")
              array_push($lista, $wm);
            if ($_COOKIE["we"] == "puste")
              array_push($lista, $wn);
            if ($_COOKIE["wz"] == "puste")
              array_push($lista, $wz);
            if (count($lista) > 0)
              echo '<a href="' . array_shift($lista) . '"><button id="dalej">Dalej</button></a>';
            else
              echo '<a href="koniec.php"><button id="dalej">Dalej</button></a>';
          }
        }?>
        <button id="start">Start</button>
        <div id="koniec">
          <h4>Zbieraj towary i dostarczaj je do miejsc oznaczonych tym samym kolorem.</h4>
          <h4>Poruszaj statek strzałkami.</h4>
          <h4>Nie pozwól, aby statek rozbił się o krawędzie planszy.</h4>
          <h4>Kazdy kliknięcie strzałki zabiera Ci paliwo, starj się nie wykonywac niepotrzebnych ruchów.</h4>
        </div>
        <div id="postep">
          <button id="b1"></button>
          <button id="b2"></button>
          <button id="b3"></button>
          <button id="b4"></button>
          <button id="b5"></button>
          <button id="b6"></button>
          <button id="b7"></button>
          <button id="b8"></button>
          <button id="b9"></button>
          <button id="b10"></button>
      </div>
          <div id="paliwo_div"> 
          <img id="paliwo" src="img/paliwo.png">
          <h2 id="klikniecia">10000</h2>
        </div>
    <div><canvas id="snakeboard" width="400" height="400"></canvas></div>
    <script src="wn.js"></script>
    </body>
    </html>
    <?php
  
    ?>