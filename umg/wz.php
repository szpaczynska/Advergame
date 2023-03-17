<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  	<title>WZ</title>
    <link rel="stylesheet" href="css/wz.css">
  </head>
  <body>
    <header>
        <div class="naglowek">
            <a href="https://umg.edu.pl/"> <img src="img/logo.png" class="logo"></a>
        </div>
        </header>
        <?php
        if (isset($_COOKIE["wz_wynik"])) {
          if ($_COOKIE["wz_wynik"] == "puste") {
            echo '<style>#start{visibility: visible;}</style>';
            echo '<style>#kontener{visibility: visible;}</style>';
          } else {
            //print_r("Twój wynik to:" . $_COOKIE["we_wynik"]);
            echo '<style>#start{visibility: hidden;}</style>';
            echo '<style>#kontener{visibility: hidden;}</style>';
            $lista = array();
            $wm = "wm.php";
            $wn = "wn.php";
            $wz = "wz.php";
            if ($_COOKIE["wm"] == "puste")
              array_push($lista, $wm);
            if ($_COOKIE["wn"] == "puste")
              array_push($lista, $wn);
            if ($_COOKIE["we"] == "puste")
              array_push($lista, $wz);
            if (count($lista) > 0)
              echo '<a href="' . array_shift($lista) . '"><button id="dalej">Dalej</button></a>';
            else
              echo '<a href="koniec.php"><button id="dalej">Dalej</button></a>';
          }
        }?>
        <div id="top"><div id="wynik"></div>
        <button id="start">Start</button>
        </div>
        <div id="kontener">
          <h4>Wybierz fiolkę pokazaną na obrazku</h4>
          <h4>Im szybciej zbierzesz 10 fiolek tym wyższy wynik</h4>
          <h4>Naliczanie czasu rozpocznie się, gdy naciśniesz przycisk start.</h4>
      </div>
        <div id="obrazki">
        </div>
        <div id="fiolki">
            <button id="f1"></button>
            <button id="f2"></button>
            <button id="f3"></button>
            <button id="f4"></button>
            <button id="f5"></button>
      </div>
    <script src="wz.js"></script>
    </body>
    </html>
    <?php
   
    ?>