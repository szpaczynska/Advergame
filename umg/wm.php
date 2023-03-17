<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  	<title>WM</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/wm2.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  </head>
  <body>
    <header>
        <div class="naglowek">
            <a href="https://umg.edu.pl/"> <img src="img/logo.png" class="logo"></a>
        </div>
        </header>
        <div id="wynik_koncowy"></div>
        <?php
        if (isset($_COOKIE["wm_wynik"])) {
          if ($_COOKIE["wm_wynik"] == "puste") {
            echo '<style>#start{visibility: visible;}</style>';
            echo '<style>#kontener{visibility: visible;}</style>';
          } else {
            //print_r("Twój wynik to:" . $_COOKIE["wm_wynik"]);
            echo '<style>#start{visibility: hidden;}</style>';
            echo '<style>#kontener{visibility: hidden;}</style>';
            $lista = array();
            $wm = "we.php";
            $wn = "wn.php";
            $wz = "wz.php";
            if ($_COOKIE["we"] == "puste")
              array_push($lista, $wm);
            if ($_COOKIE["wn"] == "puste")
              array_push($lista, $wn);
            if ($_COOKIE["wz"] == "puste")
              array_push($lista, $wz);
            if (count($lista) > 0)
              echo '<a href="' . array_shift($lista) . '"><button id="dalej">Dalej</button></a>';
            else
              echo '<a href="koniec.php"><button id="dalej">Dalej</button></a>';
          }
        }
        ?>
        <button id="start">Start</button>
        <div id="kontener">
          <h4>Układaj bloki tak, aby nie pozostawiać żadnych odstepów między nimi.</h4>
          <h4>Manipuluj blokami za pomocą strzałek.</h4>
          <h4>Im szybciej ułożysz 5 pełnych poziomów tym więcej punktów zdobędziesz.</h4>
          <h4>Naliczanie czasu rozpocznie się, gdy naciśniesz przycisk start.</h4>
      </div>
        <div id="blok">
   <canvas id="tetrisboard" width="300" height="600"></canvas>
    <div id = "wynik">Wynik: 0</div>
  </div>
    <script src="stale.js"></script>
    <script src="elementy.js"></script>
    <script src="model.js"></script>
    <script src="wm.js"></script>
    </body>
    </html>