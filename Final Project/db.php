<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "clothing_users";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>