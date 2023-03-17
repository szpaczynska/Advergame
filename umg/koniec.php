<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/koniec2.css">
</head>
<body>
    <header>
    <div class="naglowek">
        <a href="https://umg.edu.pl/"> <img src="img/logo.png" class="logo"></a>
    </div>
    </header>
    <div id="calosc"style="color: rgb(6, 6, 103);">
    <!-- <?php
    if (isset($_COOKIE["name"])) {
        if($_COOKIE["name"]=="anonim")
        echo "<h2>Brawo!</h2>";
        else
        echo "<h2>Brawo " . strtoupper($_COOKIE["name"]) . "!</h2>";
    }
    ?> -->
    <div id="wyniki"></div>
    <div id="div_email">
    <h2 style="text-align: center;">Aby otrzymać nagrodę podaj email!</h2>
    <form action="koniec.php" method="post">
    <h2>E-mail: <input type="text" name="email" id="email"><br></h2>
    <input type="checkbox" name="tak" id="tak" value="tak">
    <label for="tak" style="color:green;">Chcę otrzymać nagrodę i wyrażam zgodę na przetwarzanie moich danych osobowych.</label><br>
    <a style="color:red;">
    <?php
//print_r($_COOKIE['PW']);
//print_r($_COOKIE['wynik']);
//print_r($_COOKIE["name"]);
$db_connection = pg_connect("host=localhost port=5432 dbname=gra user=postgres password=3528");
if (isset($_POST["email"]))
$email = $_POST["email"];
    if (isset($_COOKIE["name"])) {
        $pseudonim = $_COOKIE["name"];
    }
    if (isset($_COOKIE["PW"])) {
        $wydzial = strval($_COOKIE['PW']);
    }
    if (isset($_COOKIE["wynik"])) {
        $wynik = $_COOKIE['wynik'];
    }
if (isset($_POST["zakoncz"])) {
    $wartosci = array("pierwszywybor" => $wydzial, "wynik" => $wynik, "pseudonim" => $pseudonim);
    $result = pg_insert($db_connection, "public.gra", $wartosci);
    header('Location: milegodnia.php');
}
else if(isset($_POST["email"])&&isset($_POST["tak"]) &&isset($_POST["button"])&&filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
{
    $wartosci =array("pierwszywybor"=>$wydzial,"wynik"=>$wynik,"email"=>$email, "pseudonim" => $pseudonim );
    $result = pg_insert($db_connection, "public.gra",$wartosci);
    header('Location: milegodnia.php');
}
else if(isset($_POST["email"])&&isset($_POST["button"])&&!isset($_POST["tak"]))
{
    echo "Aby przesłać adres email należy zatwierdzić klauzulę.";
}
else if(isset($_POST["email"])&&!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) 
echo "Nieprawidłowy adres email.\n";

// if(isset($_POST["email"]))
// print_r($_POST["email"])
?>
</a>
</div>
<div id="buttony">
<button type="submit" name="button" id="button2">Odbierz nagrodę</button>
<button type="submit" name="zakoncz" id="button3">Zakończ bez nagrody</button>
</div>
</form>
    </div>
<footer>
    <p>Autor: Dominika Szpaczyńska</p>
</footer>
<script src="koniec.js"></script>
</body>
</html>


