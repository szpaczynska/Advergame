<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WE</title>
        <link rel="stylesheet" href="css/we.css">
        
    </head>
    <body>
        <header>
            <div class="naglowek">
                <a href="https://umg.edu.pl/"> <img src="img/logo.png" class="logo"></a>
            </div>
            </header>
            <?php
            if (isset($_COOKIE["we_wynik"])) {
                if ($_COOKIE["we_wynik"] == "puste") {
                    echo '<style>#start{visibility: visible;}</style>';
                    echo '<style>#kontener{visibility: visible;}</style>';
                } else {
                   // print_r("Twój wynik to:" . $_COOKIE["we_wynik"]);
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
                    if ($_COOKIE["wz"] == "puste")
                        array_push($lista, $wz);
                    if (count($lista) > 0)
                        echo '<a href="' . array_shift($lista) . '"><button id="dalej">Dalej</button></a>';
                    else
                        echo '<a href="koniec.php"><button id="dalej">Dalej</button></a>';
                }
            }?>
        <button id="start">Start</button>
        <div id="kontener">
            <h4>Stwórz jak najszybciej pełen obwód elektryczy.</h4>
            <h4>Każde kliknięcie obraca element o 90 stopni.</h4>
            <h4>Nie wszystkie elementy będą wykorzystane w schemacie.</h4>
            <h4>Naliczanie czasu rozpocznie się, gdy naciśniesz przycisk start.</h4>
        </div>
        <div id="board">
            <button id="p1"></button>
            <button id="zdj1"></button>
            <button id="zdj2"></button>
            <button id="zdj3"></button>
            <button id="p2"></button>
            <button id="zdj4"></button>
            <button id="zdj5"></button>
            <button id="zdj6"></button>
            <button id="p3"></button>
            <button id="zdj7"></button>
            <button id="zdj8"></button>
            <button id="zdj9"></button>
            <button id="p4"></button>
            <button id="p5"></button>
            <button id="p6"></button>
            <button id="p7"></button>
        </div>
        <div id="wynik"></div>
        <script src="we.js"></script>
    </body>
</html>
