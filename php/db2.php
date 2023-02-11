<?php
$servername = "localhost";
$username = "root";
$password = "7jfMwLFJIJ3";
$dbname = "fppro_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
    $name = $_POST["name"];
    $phone_model = ["email"];

    $sql = "INSERT INTO projects (name, phone_model)
    VALUES ('$name', '$phone_model' '0')";

    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    } 
    else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

$conn->close();
?>