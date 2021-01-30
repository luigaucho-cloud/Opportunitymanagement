<?php

if ( ! session_id() ) {

session_start();

}
$host="localhost";
$user="root";
$password="";
$dbname="opportunity";
try{
$dsn="mysql:host=".$host."; dbname=".$dbname.";charset=utf8";
$pdo=new PDO($dsn,$user,$password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    echo 'There was an error encountered in our system, Please try again after sometime ';
}
 ?>
