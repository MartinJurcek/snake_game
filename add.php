<?php
include "db_config.php";

$username='';
if(isset($_POST['username']))
$username = $_POST['username'];

$score='';
if(isset($_POST['score']))
$score = $_POST['score'];




    $sql = "INSERT INTO about_user (username, highscore) VALUES ('$username','$score')";


    $result = mysqli_query($connection, $sql) or die(mysqli_error($connection));


?>