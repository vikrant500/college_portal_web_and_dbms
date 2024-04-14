<?php

$host = "localhost";
$dbname = "myfirstdatabase";
$dbusername = "root";
$dbpassword = "";

try {
    //code...

    $pdo = new PDO("mysql:host=$host; dbname=$dbname", $dbusername, $dbpassword);
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    //throw $th;
    echo "Connection to the database failed: " . $e -> getMessage();
}