<?php

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];

    try {
        //code...
        require_once "dbh.inc.php";

        $query = "INSERT INTO users (username, pwd, email) VALUES(:username, :pwd, :email);";

        // stmt = statements
        $stmt = $pdo -> prepare($query);

        $stmt -> bindParam(":username", $username);
        $stmt -> bindParam(":pwd", $pwd);
        $stmt -> bindParam(":email", $email);

        $stmt -> execute();

        $pdo = NULL;
        $stmt = NULL;

        die(); //use die instead of exist whenever we have a connection

    } catch (PDOException $e) {

        die("Query failed: " . $e -> getMessage());
    }

}

else
{
    header("location: ../index.php");

}