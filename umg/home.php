<?php
setcookie("we_wynik", null, -1, '/'); 
setcookie("wm_wynik", null, -1, '/'); 
setcookie("wn_wynik", null, -1, '/'); 
setcookie("wz_wynik", null, -1, '/'); 
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/home.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
</head>
<body>
    <header>
    <div class="naglowek">
        <a href="https://umg.edu.pl/"> <img src="img/logo.png" class="logo"></a>
    </div>
    </header>
<button class="start">start</button>
<div class="instr"></div>
<div class="wydzialy"></div>
<div class="ranking">
<h2 id="ranking_h2">Ranking Gry Reklamowej Uniwersytetu Morskiego w Gdyni</h2>
<TABLE> 
    <thead>
<tr>
    <th>Gracz</th>
    <th>Wynik</th>
</tr>
    </thead>
<?php
$db_connection = pg_connect("host=localhost port=5432 dbname=gra user=postgres password=3528");
$result = pg_query($db_connection,"SELECT wynik,pseudonim FROM public.gra ORDER BY wynik DESC");
while ($row = pg_fetch_row($result))
	{
    echo "<tr>";
    echo "<td>" . $row[1] . "</td>"; 
    echo "<td>" . $row[0] . "</td>";
	}
?>
</TABLE>
</div>
<footer>
    <p>Autor: Dominika Szpaczyńska</p>
    <div class="statystyki"></div>
</footer>
</body>
<script src="home.js"></script>
</html>
<?php
$cookie_we= "we_wynik";
$cookie_wm= "wm_wynik";
$cookie_wn= "wn_wynik";
$cookie_wz= "wz_wynik";
$cookie_value = "puste";
if (isset($_COOKIE["we_wynik"])) {
    if ($_COOKIE["we_wynik"] != "puste")
        setcookie($cookie_we, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
}
if (isset($_COOKIE["wm_wynik"])) {
    if ($_COOKIE["wm_wynik"] != "puste")
        setcookie($cookie_wm, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
}
if (isset($_COOKIE["wn_wynik"])) {
    if ($_COOKIE["wn_wynik"] != "puste")
        setcookie($cookie_wn, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
}
if (isset($_COOKIE["wz_wynik"])) {
    if ($_COOKIE["wz_wynik"] != "puste")
        setcookie($cookie_wz, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
}
// print_r($_COOKIE["we_wynik"]);
// print_r($_COOKIE["wm_wynik"]);
// print_r($_COOKIE["wn_wynik"]);
// print_r($_COOKIE["wz_wynik"]);

?>